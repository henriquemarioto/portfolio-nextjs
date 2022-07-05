import Section from '../Section';
import SectionTitle from '../SectionTitle';
import { Container, IconsContainer, Studying, TechStack } from './style';
import useDataBase from '../../Providers/Database';
import ContentContainer from '../ContentContainer';
import WaveContainer from '../WaveContainer';

const Technologies = () => {
  const { techsList, studyingTechsList } = useDataBase();

  return (
    <Section backgroundColor="white" fontColor="black" id="techs">
      <WaveContainer img="/black_wave.svg" />

      <ContentContainer>
        <Container>
          <TechStack>
            <SectionTitle
              title="Tech Stack"
              subTitle="some technologies I work with"
            />

            <IconsContainer>
              {techsList.map((tech, i) => (
                <li key={i}>
                  {tech.icon && <tech.icon />}
                  {tech.text && tech.text}
                </li>
              ))}
            </IconsContainer>
          </TechStack>

          <Studying>
            <SectionTitle
              title="Studying"
              subTitle="technologies I've been studying"
            />

            <IconsContainer>
              {studyingTechsList.map((tech, i) => (
                <li key={i}>
                  {tech.icon && <tech.icon />}
                  {tech.text && tech.text}
                </li>
              ))}
            </IconsContainer>
          </Studying>
        </Container>
      </ContentContainer>
    </Section>
  );
};

export default Technologies;
