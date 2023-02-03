import { useNavigate } from "react-router-dom";
import { AddressContainer } from "../../components/Address/AddressContainer";
import Minicart from "../../components/Minicart/Minicart";
import { OnclickEvent } from "../../models/types";
import {
  addressList,
  defaultAddressId,
} from "../../redux/slices/address/address.selector";
import { useAppSelector } from "../../redux/store";
import {
  BUTTON_TYPE_CLASSES,
  TextButton,
} from "../../ui_kits/Buttons/TextButton/TextButton.component";
import { IF } from "../../ui_kits/IF";
import { isEmpty } from "../../utils/script";
import toastMessage from "../../utils/toastMessage";
import "./Style.scss";

const Address = () => {
  const { data: addresses } = useAppSelector(addressList);
  const defaultId = useAppSelector(defaultAddressId);
  const navigate = useNavigate();

  const handleClick = (e: OnclickEvent) => {
    if (defaultId) {
      navigate("/payment");
    } else {
      toastMessage("Select Address", "warning");
    }
  };

  return (
    <div className="PageLayout">
      <div className="PageLayout--Primary">
        <AddressContainer />
        <IF condition={!isEmpty(addresses)}>
          <div className="Payment_Section">
            <TextButton
              buttonType={BUTTON_TYPE_CLASSES.inverted}
              isSmall
              onClick={handleClick}
            >
              PROCEED TO PAYMENT
            </TextButton>
          </div>
        </IF>
      </div>
      <div className="PageLayout--Secondary">
        <Minicart />
      </div>
    </div>
  );
};

export default Address;
