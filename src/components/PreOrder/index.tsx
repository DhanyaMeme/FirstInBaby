import { useNavigate } from "react-router-dom";
import { TextButton } from "../../ui_kits/Buttons/TextButton/TextButton.component";

export const PreOrder = () => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate("/preorder");
  };

  return (
    <TextButton
      className="hidden-pocket hidden-lap"
      onClick={handleOnclick}
      isSmall
    >
      BULK ORDER
    </TextButton>
  );
};
