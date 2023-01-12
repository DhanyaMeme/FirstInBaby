import { Description } from "../../components/ProductView/Description/Description";
import { ImageViewer } from "../../components/ProductView/ImageViewer/ImageViewer";
import { InfoViewer } from "../../components/ProductView/InfoViewer/InfoViewer";
import { products } from "../../mockData/productData";
import { Accordian } from "../../ui_kits/Accordian/Accordian";
import { Container } from "../../ui_kits/global/Container.styles";
import { SectionWrapper } from "../../ui_kits/Sections/SectionWrapper/SectionWrapper";
import "./Style.scss";

export const ProductView = () => {
  const filteredData = products[0];

  return (
    <>
      <main className="SelectedProduct">
        <SectionWrapper isbordered>
          <div className="SelectedProduct__Container Clearfix">
            <ImageViewer product={filteredData} />
            <InfoViewer product={filteredData} />
          </div>
        </SectionWrapper>
        <SectionWrapper isbordered>
          <Container isNarrow>
            <Accordian title="DETAILS" child={<Description />} />
            <Accordian title="DETAILS OF THE VENDOR" child={<Description />} />
            <Accordian title="SHIPPING RESTRICTIONS" child={<Description />} />
          </Container>
        </SectionWrapper>
      </main>
    </>
  );
};
