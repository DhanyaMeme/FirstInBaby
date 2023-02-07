import { useEffect } from "react";
import { Description } from "../../components/ProductView/Description/Description";
import { ImageViewer } from "../../components/ProductView/ImageViewer/ImageViewer";
import { InfoViewer } from "../../components/ProductView/InfoViewer/InfoViewer";
import { Reviews } from "../../components/Reviews/Reviews";
import usePath from "../../hooks/usePath";
import { useProductCRUD } from "../../hooks/useProductCRUD";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { fetchSingleProductAsync } from "../../redux/slices/product/product.reducer";
import { selectedProduct } from "../../redux/slices/product/product.selector";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Accordian } from "../../ui_kits/Accordian/Accordian";
import { Container } from "../../ui_kits/global/Container.styles";
import { SectionHeader } from "../../ui_kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../ui_kits/Sections/SectionWrapper/SectionWrapper";
import { Spinner } from "../../ui_kits/Spinner/Spinner.component";
import "./Style.scss";

export const ProductView = () => {
  const productId = usePath();
  const dispatch = useAppDispatch();

  // const { data: productList } = useAppSelector(allProducts);
  const { updateProductVariants } = useProductCRUD();
  const { data: filteredData, loading } = useAppSelector(selectedProduct);

  // const filteredData = useMemo(() => {
  //   let computedData: IProduct | undefined = {} as IProduct;

  //   if (productList) {
  //     computedData = findArrayItems(productList, {
  //       mcId: +productId,
  //     });
  //   }

  //   return computedData;
  // }, [productList, productId]);

  useEffect(() => {
    dispatch(fetchSingleProductAsync(+productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (filteredData) {
      updateProductVariants(
        filteredData,
        filteredData.productSize?.[0]?.psize || ""
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, filteredData]);

  if (loading) {
    return <Spinner />;
  }

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
