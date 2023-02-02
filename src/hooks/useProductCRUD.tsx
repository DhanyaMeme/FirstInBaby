import { useAuth } from "../contexts/AuthContext";
import { useAppDispatch, useAppSelector } from "../redux/store";
import toastMessage from "../utils/toastMessage";
import { addFavAsync } from "../redux/slices/wishlist/wishlist.reducer";
import { pick } from "../utils/generics";
import { IProduct } from "../redux/slices/collection/collection.type";
import { setProductVariants } from "../redux/slices/product/product.slice";
import { addItemToCart } from "../redux/slices/cart/cart.slice";
import { productVariants } from "../redux/slices/product/product.selector";
import { IProductVariants } from "../redux/slices/product/product.type";
import { customer } from "../redux/slices/profile/profile.selector";
import {
  addAddressAsync,
  fetchAddressAsync,
} from "../redux/slices/address/address.action";
import { IAddressFormState } from "../components/Modal/AddressModal/inputs";

export const useProductCRUD = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  const selectedProductVariants =
    useAppSelector(productVariants) || ({} as IProductVariants);
  const userData = useAppSelector(customer);

  const handleToggleToFav = (mcId: number) => {
    if (user) {
      const item = {
        phone: user as string,
        pId: mcId,
      };
      dispatch(addFavAsync(item) as any);
    } else {
      toastMessage("Login", "warning");
    }
  };

  const updateProductVariants = (product: IProduct, size: string) => {
    const variants = pick(product, [
      "id",
      "mcId",
      "productname",
      "price",
      "imageurl",
      "productcolor",
    ]);

    dispatch(
      setProductVariants({
        ...variants,
        quantity: 1,
        size: size,
      })
    );
  };

  const handleAddTocart = () => {
    dispatch(addItemToCart(selectedProductVariants));
    toastMessage(
      `${selectedProductVariants.productcolor} added to cart`,
      "success"
    );
  };

  // Address

  const getAddressHandler = () => {
    dispatch(fetchAddressAsync({ phone: user }));
  };

  const addAddressHandler = (addressState: IAddressFormState) => {
    dispatch(
      addAddressAsync({
        address: { ...addressState, userid: userData.data?.customerid },
        user
      })
    );
  };

  return {
    user,
    handleToggleToFav,
    updateProductVariants,
    handleAddTocart,
    addAddressHandler,
    getAddressHandler,
  };
};