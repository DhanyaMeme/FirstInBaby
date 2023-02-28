import { IFormState } from "../../../models/types";
import { FormAlert, FormElement } from "../../../ui_kits/Form";
import { IF } from "../../../ui_kits/IF";
import { isEmpty } from "../../../utils/script";

interface IProps<T> {
  formState: IFormState<T>;
}

export const FormError = <T,>(props: IProps<T>) => {
  const { formState } = props;

  const getErrorText = (errors: string | object) => {
    if (typeof errors === "string") {
      return errors;
    }
    return Object.values(errors)[0];
  };

  return (
    <IF
      condition={!isEmpty(formState.helperText) || !isEmpty(formState.errors)}
    >
      <FormElement>
        <FormAlert
          isError={!formState.submitSuccess}
          isSuccess={formState.submitSuccess}
          classname="u-h5 Heading"
        >
          {formState.helperText ||
            (formState.errors && getErrorText(formState.errors))}
        </FormAlert>
      </FormElement>
    </IF>
  );
};
