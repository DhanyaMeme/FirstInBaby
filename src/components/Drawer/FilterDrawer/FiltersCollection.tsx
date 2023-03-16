import usePath from "../../../hooks/usePath";
import { useAppSelector } from "../../../redux/store";
import { decodeUrl } from "../../../utils/textHandler";
import { filtersByCategory } from "../../../redux/slices/collection/collection.selector";
import { FilterData, FilterItem } from "./FilterItem";
import { IF } from "../../../ui_kits/IF";
import { isEmpty } from "../../../utils/script";
import { Accordian } from "../../../ui_kits/Accordian/Accordian";
import { IFilterColor } from "../../../redux/slices/collection/collection.type";
import { useMemo } from "react";
import { discountFilter, priceFilter } from "./FilterData";

export const FiltersCollection = () => {
  const mainCategory = usePath();
  const { data: filters } = useAppSelector(filtersByCategory) || {};

  const computedData = useMemo(() => {
    const selectedFiltersGroup = filters?.[decodeUrl(mainCategory)];

    let colors = [] as FilterData[];

    if (selectedFiltersGroup) {
      colors = selectedFiltersGroup?.fc.map((item: IFilterColor) => ({
        id: item.fid,
        title: item.color,
        code: item.colorcode,
      }));
    }

    return {
      selectedFiltersGroup,
      colors,
    };
  }, [mainCategory]);

  return (
    <div className="CollectionFilters">
      <IF condition={!isEmpty(computedData?.selectedFiltersGroup?.fc)}>
        <Accordian
          title="COLOR"
          child={
            <FilterItem field="color" fieldCollection={computedData.colors} />
          }
          isPadded
        />
      </IF>
      <Accordian
        title="PRICE"
        child={<FilterItem field="price" fieldCollection={priceFilter} />}
        isPadded
      />
      <Accordian
        title="DISCOUNT"
        child={<FilterItem field="discount" fieldCollection={discountFilter} />}
        isPadded
      />
    </div>
  );
};
