import { useAuth } from "../contexts/AuthContext";
import { useAppDispatch } from "../redux/store";
import toastMessage from "../utils/toastMessage";
import { addFavAsync } from "../redux/slices/wishlist/wishlist.reducer";

export const useProductCRUD = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();

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

  

  return { handleToggleToFav };
};
