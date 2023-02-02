import {
  Form,
  FormElement,
  FormTextInput,
  FormSelectInput,
  FormAlert,
} from "../../../ui_kits/Form";
import { Form__Elemen__Types } from "../../../ui_kits/Form/FormElements/FormElement";
import {
  AddressFormGroupInputs,
  AddressFormInput,
  AddressFormInputs,
  IAddressFormState,
  initialIAddressValues,
} from "./inputs";
import {
  IFormState,
  InputChangeEvent,
  InputFocusEvent,
  InputType,
} from "../../../models/types";
import { IF } from "../../../ui_kits/IF";
import { getAllDistricts, getAllStates } from "../../../mockData/States";
import useObjectState from "../../../hooks/useObjectState";
import { initialFormState } from "../../../models/constants";
import { useAuth } from "../../../contexts/AuthContext";
import { isEmpty, uid } from "../../../utils/script";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { addNewAddress } from "../../../redux/slices/address/address.slice";
import { IAddress } from "../../../redux/slices/address/address.type";
import { useEffect, useMemo } from "react";
import ModalWrapper from "../../../ui_kits/modal/modal-wrapper.component";
import {
  selectAddresses,
  selectedAddressId,
} from "../../../redux/slices/address/address.selector";

export const AddressModal = () => {
  const dispatch = useAppDispatch();
  const { handleOnFocusEvent, handleFormValidate } = useAuth();

  const addresses = useAppSelector(selectAddresses);
  const addressId = useAppSelector(selectedAddressId);

  const initialValues = useMemo(() => {
    let computedData = initialIAddressValues;
    let computedId = uid();

    const selectedAddress = addresses?.find(
      (add: IAddress) => add.id === addressId
    );
    if (selectedAddress) {
      let { id, isDefault, ...rest } = selectedAddress;
      computedData = rest;
      computedId = id;
    }
    return { computedData, computedId };
  }, [addressId, addresses]);

  const {
    obj: addressState,
    get: getAddressState,
    update: updateAddressState,
    setObj: setAddressState,
  } = useObjectState(initialValues.computedData);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(
    initialFormState as Partial<IFormState<IAddressFormState>>
  );

  useEffect(() => {
    setAddressState(initialValues.computedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressId, addresses]);

  const handleSelectChange = (name: string, option: string) => {
    updateAddressState(name as any, option);
  };

  const getOptions = (name: string) => {
    return name === "state"
      ? getAllStates()
      : getAllDistricts(addressState.state);
  };

  const handleOnsubmit = async () => {
    const isValid = handleFormValidate(
      [...AddressFormInputs, ...AddressFormGroupInputs],
      addressState,
      updateFormState
    );
    if (isValid) {
      dispatch(
        addNewAddress({
          id: initialValues.computedId,
          ...addressState,
          isDefault: false,
        })
      );
    }
  };

  const getFormInput = (addressInput: AddressFormInput) => {
    return (
      <FormTextInput
        label={addressInput.label}
        name={addressInput.name}
        type={addressInput.type}
        value={getAddressState(addressInput.name)}
        onFocus={(e: InputFocusEvent) =>
          handleOnFocusEvent(e, initialFormState, setFormState)
        }
        onChange={(e: InputChangeEvent) => {
          updateAddressState(addressInput.name, e.target.value);
        }}
      />
    );
  };

  return (
    <ModalWrapper
      size="tiny"
      header="Add Address"
      actionName="Add"
      handleActionClick={handleOnsubmit}
    >
      <Form spacingTight onSubmit={handleOnsubmit}>
        {/* <FormElement>
          <IF
            condition={
              !isEmpty(formState.helperText) || !isEmpty(formState.errors)
            }
          >
            <FormAlert
              isError={!formState.submitSuccess}
              isSuccess={formState.submitSuccess}
              classname="u-h6"
            >
              {formState.helperText ||
                (formState.errors && Object.values(formState.errors)[0])}
            </FormAlert>
          </IF>
        </FormElement> */}
        {AddressFormInputs.map((addressInput: AddressFormInput) => (
          <FormElement key={addressInput.name}>
            {getFormInput(addressInput)}
          </FormElement>
        ))}
        <FormElement elementType={Form__Elemen__Types.FormGroup}>
          {AddressFormGroupInputs.map((addressInput: AddressFormInput) => (
            <FormElement key={addressInput.name}>
              {getFormInput(addressInput)}
            </FormElement>
          ))}
        </FormElement>
      </Form>
    </ModalWrapper>
  );
};
