import { BsGithub, BsLinkedin } from 'react-icons/bs';
import BGGif from '../../assets/bg.gif';
import Section from '../Section';
import {
  ButtonContainer,
  Container,
  ContainerAvatar,
  ContainerText,
  MainInfo,
  ProfileInfo,
  SecondInfo
} from './style';
import theme from '../../styles/theme';
import ContentContainer from '../ContentContainer';
import Anchor from '../Anchor';

const Presentation = () => (
  <Section fontColor="white" img={BGGif} id="about">
    <ContentContainer>
      <Container>
        <MainInfo>
          <p>Hi there 🤟🏻, I&apos;m</p>

          <div>
            <h1>marioto.</h1>
            <h2>Fullstack developer 🖥️</h2>
          </div>

          <span>
            I&apos;m a full stack web developer, based on São Paulo, Brazil
          </span>
        </MainInfo>

        <SecondInfo>
          <ProfileInfo>
            <ContainerAvatar>
              <img src="/avatar.svg" alt="avatar" />
            </ContainerAvatar>

            <ContainerText>
              <p>Technology, games, and pixel art lover! </p>
              <span>
                I started my programming journey in 2017 and I keep improving
                myself continuously, see more{' '}
                <a
                  href="https://www.linkedin.com/in/paulo-marioto/"
                  target="_blank"
                  rel="noreferrer"
                >
                  about me.
                </a>
              </span>
            </ContainerText>
          </ProfileInfo>

          <ButtonContainer>
            <Anchor
              bgColor={theme.colors.white}
              textColor={theme.colors.black}
              allWidth
              href="https://github.com/henriquemarioto"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
              Github
            </Anchor>

            <Anchor
              bgColor={theme.colors.black}
              textColor={theme.colors.white}
              allWidth
              borded
              href="https://www.linkedin.com/in/paulo-marioto/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
              Linkedin
            </Anchor>
          </ButtonContainer>
        </SecondInfo>
      </Container>
    </ContentContainer>
  </Section>
);

export default Presentation;
