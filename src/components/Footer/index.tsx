import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, IconContainer, InfoContainer } from './style';

const Footer = () => (
  <Container>
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
  </Container>
);

export default Footer;
