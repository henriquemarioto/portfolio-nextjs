import Section from '../Section';
import { Container } from './style';
import SectionTitle from '../SectionTitle';
import ContactForm from '../ContactForm';
import ContentContainer from '../ContentContainer';
import WaveContainer from '../WaveContainer';
import Wave from '../Wave';
import theme from '../../styles/theme';

const Contact = () => (
  <Section backgroundColor="white" id="contact">
    <WaveContainer backgroundColor={theme.colors.blue}>
      <Wave />
      <Wave />
      <Wave />
    </WaveContainer>

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
