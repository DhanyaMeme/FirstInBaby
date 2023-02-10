import { PageContent } from "../../../ui_kits/global/PageContent.styles";
import { Form, FormElement, FormSearchInput } from "../../../ui_kits/Form";
import { SearchResults } from "./SearchResults";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { searchText } from "../../../redux/slices/nav/nav.selector";
import { InputChangeEvent } from "../../../models/types";
import { setSearchText } from "../../../redux/slices/nav/nav.slice";
import { IF } from "../../../ui_kits/IF";
import { isEmpty } from "../../../utils/script";

export const SearchForm = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(searchText);

  return (
    <PageContent spacingTight>
      <Form>
        <FormElement>
          <FormSearchInput
            label="Search"
            placeholder="Search..."
            value={searchValue || ""}
            onChange={(e: InputChangeEvent) =>
              dispatch(setSearchText(e.target.value))
            }
          />
        </FormElement>
      </Form>
      <IF condition={!isEmpty(searchValue)}>
        <SearchResults searchValue={searchValue as string} />
      </IF>
    </PageContent>
  );
};
