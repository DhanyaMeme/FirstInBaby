import { useEffect, useMemo } from "react";
import { Description } from "../../components/ProductView/Description/Description";
import { ImageViewer } from "../../components/ProductView/ImageViewer/ImageViewer";
import { InfoViewer } from "../../components/ProductView/InfoViewer/InfoViewer";
import { Reviews } from "../../components/Reviews/Reviews";
import usePath from "../../hooks/usePath";
import { useProductCRUD } from "../../hooks/useProductCRUD";
import { allProducts } from "../../redux/slices/collection/collection.selector";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Accordian } from "../../ui_kits/Accordian/Accordian";
import { Container } from "../../ui_kits/global/Container.styles";
import { SectionHeader } from "../../ui_kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../ui_kits/Sections/SectionWrapper/SectionWrapper";
import { findArrayItems } from "../../utils/generics";
import "./Style.scss";

export const ProductView = () => {
  const productId = usePath();
  const dispatch = useAppDispatch();

  const { updateProductVariants } = useProductCRUD();

  const { data: productList } = useAppSelector(allProducts);

  const filteredData = useMemo(() => {
    let computedData: IProduct | undefined = {} as IProduct;

    if (productList) {
      computedData = findArrayItems(productList, {
        mcId: +productId,
      });
    }

    return computedData;
  }, [productList, productId]);

  useEffect(() => {
    if (filteredData) {
      updateProductVariants(
        filteredData,
        filteredData.productSize?.[0]?.psize || ""
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, filteredData]);

  // console.log("filteredData", filteredData);

  return (
    <>
      <main className="SelectedProduct">
        <SectionWrapper isbordered>
          <div className="SelectedProduct__Container Clearfix">
            <ImageViewer product={filteredData as IProduct} />
            <InfoViewer product={filteredData as IProduct} />
          </div>
        </SectionWrapper>
        <SectionWrapper isbordered>
          <Container isNarrow>
            <Accordian title="DETAILS" child={<Description />} />
            <Accordian title="DETAILS OF THE VENDOR" child={<Description />} />
            <Accordian title="SHIPPING RESTRICTIONS" child={<Description />} />
          </Container>
        </SectionWrapper>
        <SectionWrapper isbordered>
          <Container>
            <SectionHeader heading="Customer Reviews" />
            <Reviews product={filteredData as IProduct} />
          </Container>
        </SectionWrapper>
      </main>
    </>
  );
};
