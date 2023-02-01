import { useEffect, useMemo } from "react";
import { Description } from "../../components/ProductView/Description/Description";
import { ImageViewer } from "../../components/ProductView/ImageViewer/ImageViewer";
import { InfoViewer } from "../../components/ProductView/InfoViewer/InfoViewer";
import Reviews from "../../components/Reviews/Reviews";
import usePath from "../../hooks/usePath";
import { allProducts } from "../../redux/slices/collection/collection.selector";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { setProductVariants } from "../../redux/slices/product/product.slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Accordian } from "../../ui_kits/Accordian/Accordian";
import { Container } from "../../ui_kits/global/Container.styles";
import { SectionHeader } from "../../ui_kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../ui_kits/Sections/SectionWrapper/SectionWrapper";
import { findArrayItems, pick } from "../../utils/generics";
import "./Style.scss";

export const ProductView = () => {
  const productId = usePath();
  const dispatch = useAppDispatch();

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
      const variants = pick(filteredData, [
        "id",
        "mcId",
        "productname",
        "price",
        "imageurl",
        "productcolor",
      ]);
      dispatch(
        setProductVariants({
          ...variants,
          quantity: 1,
          size: filteredData.productSize?.[0]?.psize || "",
        })
      );
    }
  }, [dispatch, filteredData]);

  // const filteredData = products[0];

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
            <Reviews />
          </Container>
        </SectionWrapper>
      </main>
    </>
  );
};
