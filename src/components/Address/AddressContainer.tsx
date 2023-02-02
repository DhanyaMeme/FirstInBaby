import { Fragment, useCallback, useEffect } from "react";
import { AddressBlock } from "./AddressBlock";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  removeAddress,
  setDefaultAddress,
  setSelectedAddressId,
} from "../../redux/slices/address/address.slice";
import { selectAddresses } from "../../redux/slices/address/address.selector";
import { AddressIcon } from "../../assets/icons/Address.icon";
import { IAddress } from "../../redux/slices/address/address.type";
import { TextButton } from "../../ui_kits/Buttons/TextButton/TextButton.component";
import { openModal } from "../../redux/slices/modal/modal.slice";
import { useProductCRUD } from "../../hooks/useProductCRUD";
import { fetchAddressAsync } from "../../redux/slices/address/address.action";

export const AddressContainer = () => {
  const dispatch = useAppDispatch();
  const { getAddressHandler, user } = useProductCRUD();
  const addresses = useAppSelector(selectAddresses);



  const toggleAddressForm = () => {
    dispatch(
      openModal({
        modalType: "AddressModal",
      })
    );
  };

  const handleAddNewAddress = () => {
    dispatch(setSelectedAddressId(undefined));
    toggleAddressForm();
  };

  const handleUpdateNewAddress = (id: string) => {
    dispatch(setSelectedAddressId(id));
    toggleAddressForm();
  };

  const handleRemoveAddress = useCallback(
    (id: string) => {
      dispatch(removeAddress(id));
    },
    [dispatch]
  );

  const toggleDefaultAddress = useCallback(
    (id: string) => {
      dispatch(setDefaultAddress(id));
    },
    [dispatch]
  );

  return (
    <Fragment>
      <div className="Address_Section">
        <h4 className="Heading">
          <AddressIcon />
          ADDRESS BOOK
        </h4>
        <TextButton isSmall onClick={handleAddNewAddress}>
          ADD ADDRESS
        </TextButton>
      </div>
      <div className="Grid">
        {addresses.map((address: IAddress) => (
          <div
            className="Grid__Cell 1/1--phone 1/2--tablet-and-up 1/2--desk"
            key={address.id}
          >
            <AddressBlock
              addressData={address}
              toggleDefaultAddress={toggleDefaultAddress}
              handleRemoveAddress={handleRemoveAddress}
              handleUpdateNewAddress={handleUpdateNewAddress}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};
