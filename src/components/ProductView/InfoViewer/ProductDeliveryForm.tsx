import {
  Form,
  FormAlert,
  FormElement,
  FormTextInput,
} from "../../../ui_kits/Form";
import {
  TextButton,
  BUTTON_TYPE_CLASSES,
} from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import { Form__Elemen__Types } from "../../../ui_kits/Form/FormElements/FormElement";

export const ProductDeliveryForm = () => {
  return (
    <Form classname="ProductForm" spacingTight>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h5 className="Heading">DELIVERY / STORE OPTIONS:</h5>
      </FormElement>
      {/* <FormAlert isError classname="u-h6">
        Delivery within 5-10 days
      </FormAlert> */}
      <FormElement elementType={Form__Elemen__Types.FormGroup}>
        <FormElement>
          <FormTextInput label="Pincode" type="number" />
        </FormElement>
        <FormElement>
          <TextButton isFull>CHECK</TextButton>
        </FormElement>
      </FormElement>
    </Form>
  );
};
