import { AddressContainer } from "../../components/Address/AddressContainer";
import Minicart from "../../components/Minicart/Minicart";
import { TextButton } from "../../ui_kits/Buttons/TextButton/TextButton.component";
import "./Style.scss";

const Address = () => {
  return (
    <div className="PageLayout">
      <div className="PageLayout--Primary">
        <AddressContainer />
        <div className="Payment_Section">
          <TextButton isSmall>PROCEED TO PAYMENT</TextButton>
        </div>
      </div>
      <div className="PageLayout--Secondary">
        <Minicart />
      </div>
    </div>
  );
};

export default Address;
