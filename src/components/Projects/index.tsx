import Section from '../Section';
import { Container } from './style';
import SectionTitle from '../SectionTitle';
import useDataBase from '../../Providers/Database';
import ProjectCard from '../ProjectCard';
import theme from '../../styles/theme';
import ContentContainer from '../ContentContainer';
import WaveContainer from '../WaveContainer';
import Anchor from '../Anchor';

const Projects = () => {
  const { projectsList } = useDataBase();

  return (
    <Section backgroundColor="blue" id="projects">
      <WaveContainer img="/white_wave.svg" />

      <ContentContainer>
        <Container>
          <SectionTitle
            title="Projects"
            subTitle="projects I've worked on"
            fontColor="white"
          />
          <ul>
            {projectsList.map(
              (
                {
                  img,
                  title,
                  inProgress,
                  description,
                  technologies,
                  previewUrl,
                  githubUrl
                },
                i
              ) => (
                <ProjectCard
                  key={i}
                  img={img}
                  title={title}
                  inProgress={inProgress}
                  description={description}
                  technologies={technologies}
                  previewUrl={previewUrl}
                  githubUrl={githubUrl}
                />
              )
            )}
          </ul>

          <Anchor
            bgColor={theme.colors.white}
            textColor={theme.colors.black}
            href="https://github.com/henriquemarioto"
            target="_blank"
            rel="noreferrer"
          >
            See more
          </Anchor>
        </Container>
      </ContentContainer>
    </Section>
  );
};

export default Projects;
