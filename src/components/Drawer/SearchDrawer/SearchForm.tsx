import { PageContent } from "../../../ui_kits/global/PageContent.styles";
import { Form, FormElement, FormSearchInput } from "../../../ui_kits/Form";
import { SearchResults } from "./SearchResults";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { searchText } from "../../../redux/slices/nav/nav.selector";
import { InputChangeEvent } from "../../../models/types";
import {
  setSearchDrawHidden,
  setSearchText,
} from "../../../redux/slices/nav/nav.slice";
import { IF } from "../../../ui_kits/IF";
import { isEmpty } from "../../../utils/script";
import { TextButton } from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import useDebounce from "../../../hooks/useDebounce";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SearchForm = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(searchText);
  const debouncedSearchTerm = useDebounce<string>(searchValue || "", 1000);
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedSearchTerm) {
      navigate("/search", {
        state: { name: debouncedSearchTerm },
      });
      dispatch(setSearchDrawHidden(true));
    }
  }, [debouncedSearchTerm, dispatch]);

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
    </PageContent>
  );
};
