import { OnclickEvent } from "../../../models/types";
import { TextButton } from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import { DrawerView } from "../../../ui_kits/Drawer/Drawer.compenent";
import { PageOverlay } from "../../../ui_kits/PageOverlay/PageOverlay";

interface IProps {
  visibility: boolean;
  toggleFilter: () => void;
  resetFilters: (e: OnclickEvent) => void;
}

export const FilterDrawer = (props: IProps) => {
  const { visibility, toggleFilter, resetFilters } = props;

  return (
    <>
      <PageOverlay isVisible={!visibility} />
      <DrawerView
        body={<div></div>}
        position="right"
        title="FILTERS"
        isHidden={visibility}
        handleClose={toggleFilter}
        footer={
          <TextButton isFull onClick={resetFilters}>
            RESET
          </TextButton>
        }
      />
    </>
  );
};
