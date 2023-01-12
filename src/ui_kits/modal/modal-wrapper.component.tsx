import { ReactNode } from "react";
import { Button, Modal } from "semantic-ui-react";
import { closeModal } from "../../redux/slices/modal/modal.slice";
import { useAppDispatch } from "../../redux/store";

type sizeType = "mini" | "tiny" | "small" | "large" | "fullscreen";

interface IProps {
  children: ReactNode;
  handleActionClick: () => void;
  size?: sizeType;
  header?: string;
  actionName?: string;
}

export default function ModalWrapper(props: IProps) {
  const {
    children,
    handleActionClick,
    size = "mini",
    header,
    actionName = "Submit",
  } = props;

  const dispatch = useAppDispatch();

  const handleOnclose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal closeIcon open={true} onClose={handleOnclose} size={size}>
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Content scrolling>{children}</Modal.Content>
      <Modal.Actions>
        <Button onClick={handleActionClick} color="pink">
          {actionName}
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
