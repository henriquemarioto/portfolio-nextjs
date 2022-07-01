import Section from '../Section';
import { Container } from './style';
import Wave from '../../assets/blue_wave.svg';
import SectionTitle from '../SectionTitle';
import ContactForm from '../ContactForm';

const Contact = () => (
  <Section backgroundColor="white">
    <Wave />
    <Container>
      <SectionTitle
        title="Contact me"
        subTitle="send me an email if you need or via LinkedIn"
      />

      <ContactForm />
    </Container>
  </Section>
);

export default Contact;
