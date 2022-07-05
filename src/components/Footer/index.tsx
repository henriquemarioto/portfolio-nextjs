import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from '../Button';
import ContentContainer from '../ContentContainer';
import { Container, IconContainer, InfoContainer } from './style';

const Footer = () => (
  <Container>
    <ContentContainer>
      <InfoContainer>
        <span>© 2022 Paulo Marioto</span>
        <span>
          Designed by{' '}
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
        <Button href="https://github.com/henriquemarioto" target="_blank">
          <FaGithub />
        </Button>

        <Button
          href="https://www.linkedin.com/in/paulo-marioto/"
          target="_blank"
        >
          <FaLinkedin />
        </Button>
      </IconContainer>
    </ContentContainer>
  </Container>
);

export default Footer;
