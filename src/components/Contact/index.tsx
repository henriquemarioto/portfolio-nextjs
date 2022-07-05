import Section from '../Section';
import { Container } from './style';
import SectionTitle from '../SectionTitle';
import ContactForm from '../ContactForm';
import ContentContainer from '../ContentContainer';
import WaveContainer from '../WaveContainer';

const Contact = () => (
  <Section backgroundColor="white" id="contact">
    <WaveContainer img="/blue_wave.svg" />

    <ContentContainer>
      <Container>
        <SectionTitle
          title="Contact me"
          subTitle="send me an email if you need or via LinkedIn"
        />

        <ContactForm />
      </Container>
    </ContentContainer>
  </Section>
);

export default Contact;
