import {
  PageContent,
  PageHeader,
} from "../../../ui_kits/global/PageContent.styles";
import { Container } from "../../../ui_kits/global/Container.styles";

import { TextButton } from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import {
  Form,
  FormElement,
  FormTextArea,
  FormTextInput,
} from "../../../ui_kits/Form";
import { Form__Elemen__Types } from "../../../ui_kits/Form/FormElements/FormElement";
import { SectionHeader } from "../../../ui_kits/Sections/SectionHeader/SectionHeader";

export const Contact = () => {
  return (
    <Container>
      <PageContent isNarrow>
        <PageHeader>
          <SectionHeader heading="Contact Us" />
        </PageHeader>
        <div className="Rte Heading">
          <p>
            FirstInCry<span>&nbsp;</span>aims at providing the best quality for
            our customers. <br /> <br />
            Please tell us your thoughts if you have any questions. We will
            reply you as soon as possible.&nbsp;
          </p>
          <ul>
            <li>
              ☎ Contact Us by Phone :&nbsp;
              <a
                className="Link Link--secondary"
                href="mailto:cs@FirstInCry.store"
                target="_blank"
                rel="snugglz noreferrer"
              >
                +91 93605 59626 (Mon-Fri 10am-5pm IST)&nbsp;
              </a>
            </li>
            <li>
              ✉ Contact Us by Email :&nbsp;
              <a
                className="Link Link--secondary"
                href="mailto:cs@FirstInCry.store"
                target="_blank"
                rel="FirstInCry noreferrer"
              >
                cs@FirstInCry.store.au or submit the below contact form
              </a>
            </li>
          </ul>
          <p>Or write down your opinions in the following form.</p>
          <p>We will answer your&nbsp;questions within 24 hours.</p>
          <Form classname="Form">
            <FormElement elementType={Form__Elemen__Types.FormGroup}>
              <FormElement>
                <FormTextInput label="Name" placeholder="Name" />
              </FormElement>
              <FormElement>
                <FormTextInput label="Email" placeholder="Email" />
              </FormElement>
            </FormElement>
            <FormElement>
              <FormTextArea label="Your message" placeholder="Your message" />
            </FormElement>
            <TextButton isFull>SEND MESSAGE</TextButton>
          </Form>
        </div>
      </PageContent>
    </Container>
  );
};
