import { BsGithub, BsLinkedin } from 'react-icons/bs';
import BGGif from '../../assets/bg.gif';
import Avatar from '../../assets/avatar.svg';
import Button from '../Button';
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

const Presentation = () => (
  <Section fontColor="white" img={BGGif}>
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
              <Avatar />
            </ContainerAvatar>

            <ContainerText>
              <p>Technology, games, and pixel art lover! </p>
              <span>
                I started my programming journey in 2017 and I keep improving
                myself continuously, see more about me.
              </span>
            </ContainerText>
          </ProfileInfo>

          <ButtonContainer>
            <Button
              bgColor={theme.colors.white}
              textColor={theme.colors.black}
              allWidth
            >
              <BsGithub />
              Github
            </Button>

            <Button borded allWidth>
              <BsLinkedin />
              Linkedin
            </Button>
          </ButtonContainer>
        </SecondInfo>
      </Container>
    </ContentContainer>
  </Section>
);

export default Presentation;
