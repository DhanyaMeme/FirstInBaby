import { useAuth } from "../../../contexts/AuthContext";
import useObjectState from "../../../hooks/useObjectState";
import { initialFormState } from "../../../models/constants";
import {
  initialReviewFormState,
  IReviewFormState,
  ReviewFormInput,
  ReviewFormInputs,
} from "./inputs";
import {
  IFormState,
  InputChangeEvent,
  InputFocusEvent,
} from "../../../models/types";
import {
  Form,
  FormAlert,
  FormSubmit,
  FormTextArea,
  FormTextInput,
} from "../../../ui_kits/Form";
import { IF } from "../../../ui_kits/IF";
import { isEmpty } from "../../../utils/script";
import { FormElement } from "../../../ui_kits/Form/FormElements/FormElement";
import StarRatings from "react-star-ratings";

import { ImageListType } from "react-images-uploading";
import ModalWrapper from "../../../ui_kits/modal/modal-wrapper.component";
import { ImageUploader } from "./ImageUploader/ImageUploader";

export const ReviewModal = () => {
  const {
    obj: reviewState,
    get: getReviewState,
    update: updateReviewState,
  } = useObjectState(initialReviewFormState);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<IReviewFormState>);

  const { handleFormValidate, handleOnFocusEvent } = useAuth();

  const handleOnsubmit = async () => {
    const isValid = handleFormValidate(
      ReviewFormInputs,
      reviewState,
      updateFormState
    );

    if (isValid) {
    }
  };

  return (
    <ModalWrapper
      size="tiny"
      header="Write Review"
      actionName="Add Review"
      handleActionClick={handleOnsubmit}
    >
      <Form>
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
        {ReviewFormInputs.map(({ validation, ...item }: ReviewFormInput) => {
          return (
            <FormElement key={item.name}>
              <IF condition={item.name === "rating"}>
                <StarRatings
                  rating={+reviewState.rating}
                  starDimension="15px"
                  starSpacing="1px"
                  starRatedColor="#d3b289"
                  changeRating={(newRating) => {
                    updateReviewState(item.name, newRating.toString());
                  }}
                />
              </IF>
              <IF condition={item.name === "description"}>
                <FormTextArea
                  label={item.label}
                  placeholder={item.placeholder}
                  value={getReviewState(item.name)}
                  onFocus={(e: InputFocusEvent) =>
                    handleOnFocusEvent(e, initialFormState, setFormState)
                  }
                  onChange={(e: InputChangeEvent) => {
                    updateReviewState(item.name, e.target.value);
                  }}
                />
              </IF>
              <IF condition={item.type === "text"}>
                <FormTextInput
                  {...item}
                  value={getReviewState(item.name)}
                  onFocus={(e: InputFocusEvent) =>
                    handleOnFocusEvent(e, initialFormState, setFormState)
                  }
                  onChange={(e: InputChangeEvent) => {
                    updateReviewState(item.name, e.target.value);
                  }}
                />
              </IF>

              <IF condition={item.name === "imageUrl"}>
                <ImageUploader
                  updateImageChange={(imageList: ImageListType) => {
                    updateReviewState(item.name, imageList[0].file);
                  }}
                />
              </IF>
            </FormElement>
          );
        })}
        <FormSubmit isFull isLoading={formState.isButtonLoading}>
          Submit
        </FormSubmit>
      </Form>
    </ModalWrapper>
  );
};
