import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Anchor from '../Anchor';
import ContentContainer from '../ContentContainer';
import { Container, IconContainer, InfoContainer } from './style';

const Footer = () => (
  <Container>
    <ContentContainer fade="none">
      <InfoContainer>
        <span>© 2022 Paulo Marioto</span>
        <span>
          Designed by&ensp;
          <a
            href="https://www.linkedin.com/in/paulo-marioto/"
            target="_blank"
            rel="noreferrer"
          >
            Paulo Marioto
          </a>
        </span>
      </InfoContainer>

      <IconContainer>
        <Anchor href="https://github.com/henriquemarioto" target="_blank">
          <FaGithub />
        </Anchor>

        <Anchor
          href="https://www.linkedin.com/in/paulo-marioto/"
          target="_blank"
        >
          <FaLinkedin />
        </Anchor>
      </IconContainer>
    </ContentContainer>
  </Container>
);

export default Footer;
