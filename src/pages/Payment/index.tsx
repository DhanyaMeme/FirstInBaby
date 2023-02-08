import { useMemo } from "react";
import Minicart from "../../components/Minicart/Minicart";
import { SelectedAddress } from "../../components/Payment/SelectedAddress";
import usePath from "../../hooks/usePath";
import {
  addressList,
  defaultAddressId,
} from "../../redux/slices/address/address.selector";
import { IAddress } from "../../redux/slices/address/address.type";
import { useAppSelector } from "../../redux/store";
import { IF } from "../../ui_kits/IF";
import { findArrayItems } from "../../utils/generics";
import { isEmpty } from "../../utils/script";

export const Payment = () => {
  const addressId = usePath();
  const { data: addresses } = useAppSelector(addressList);

  const selectedAddress = useMemo(() => {
    let computedData: IAddress | undefined = {} as IAddress;

    if (addresses) {
      computedData = findArrayItems(addresses.address, {
        id: +addressId,
      });
    }

    return computedData;
  }, [addresses, addressId]);

  return (
    <div className="PageLayout">
      <div className="PageLayout--Primary">
        <IF condition={!isEmpty(SelectedAddress)}>
          <SelectedAddress address={selectedAddress as IAddress} />
        </IF>
      </div>
      <div className="PageLayout--Secondary">
        <Minicart />
      </div>
    </div>
  );
};
