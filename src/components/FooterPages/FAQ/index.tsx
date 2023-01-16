import {
  PageContent,
  PageHeader,
} from "../../../ui_kits/global/PageContent.styles";
import { Container } from "../../../ui_kits/global/Container.styles";
import { FAQSection } from "./FAQSection"
import { SectionHeader } from "../../../ui_kits/Sections/SectionHeader/SectionHeader";
import { faqData } from "../../../mockData/faqData";

export const FAQ = () => {
  return (
    <Container>
      <PageContent>
        <PageHeader>
          <SectionHeader heading="FAQs" />
        </PageHeader>
        <div className="Faq">
          {Object.entries(faqData).map(([key, value]) => (
            <FAQSection title={key} content={value} key={key} />
          ))}
        </div>
      </PageContent>
    </Container>
  );
};
