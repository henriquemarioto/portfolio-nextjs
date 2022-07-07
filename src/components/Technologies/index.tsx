import Section from '../Section';
import SectionTitle from '../SectionTitle';
import { Container, IconsContainer, Studying, TechStack, Tools } from './style';
import useDataBase from '../../Providers/Database';
import ContentContainer from '../ContentContainer';
import WaveContainer from '../WaveContainer';
import Wave from '../Wave';
import theme from '../../styles/theme';

const Technologies = () => {
  const { techsList, studyingTechsList, toolsList } = useDataBase();

  return (
    <Section
      backgroundColor={theme.colors.white}
      fontColor={theme.colors.black}
      id="techs"
    >
      <WaveContainer backgroundColor={theme.colors.black}>
        <Wave />
        <Wave />
        <Wave />
      </WaveContainer>

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
                  <a href={tech.link} target="_blank" rel="noreferrer">
                    {tech.icon && <tech.icon />}
                    {tech.text && tech.text}
                  </a>
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
                  <a href={tech.link} target="_blank" rel="noreferrer">
                    {tech.icon && <tech.icon />}
                    {tech.text && tech.text}
                  </a>
                </li>
              ))}
            </IconsContainer>
          </Studying>

          <Tools>
            <SectionTitle title="Tools" subTitle="some tools I work with" />

            <IconsContainer>
              {toolsList.map((tool, i) => (
                <li key={i}>
                  <a href={tool.link} target="_blank" rel="noreferrer">
                    {tool.icon && <tool.icon />}
                    {tool.text && tool.text}
                  </a>
                </li>
              ))}
            </IconsContainer>
          </Tools>
        </Container>
      </ContentContainer>
    </Section>
  );
};

export default Technologies;
