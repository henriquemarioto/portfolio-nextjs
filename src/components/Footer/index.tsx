import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ContentContainer from '../ContentContainer';
import { Container, IconContainer, InfoContainer } from './style';

const Footer = () => (
  <Container>
    <ContentContainer>
      <InfoContainer>
        <span>© 2022 Paulo Marioto</span>
        <span>
          Designed by{' '}
          <a href="https://www.linkedin.com/in/paulo-marioto/">Paulo Marioto</a>
        </span>
      </InfoContainer>

      <IconContainer>
        <FaGithub /> <FaLinkedin />
      </IconContainer>
    </ContentContainer>
  </Container>
);

export default Footer;
