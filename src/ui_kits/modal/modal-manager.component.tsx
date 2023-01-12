import React from "react";
import { AddFavToCartModal } from "../../components/Modal/AddFavToCart.modal";
import { modalData } from "../../redux/slices/modal/modal.selector";
import { useAppSelector } from "../../redux/store";

export default function ModalManager() {
  const modalLookup: Record<string, any> = {
    AddFavToCartModal,
  };
  const currentModal = useAppSelector(modalData);
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps = {} } = currentModal;
    const ModalComponent = modalLookup[modalType] as typeof React.Component;
    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
}
