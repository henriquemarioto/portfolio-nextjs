import Section from '../Section';
import Wave from '../../assets/white_wave.svg';
import { Container } from './style';
import SectionTitle from '../SectionTitle';
import useDataBase from '../../Providers/Database';
import ProjectCard from '../ProjectCard';
import Button from '../Button';
import theme from '../../styles/theme';

const Projects = () => {
  const { projectsList } = useDataBase();

  return (
    <Section backgroundColor="blue">
      <Wave />
      <Container>
        <SectionTitle
          title="Projects"
          subTitle="projects I've worked on"
          fontColor="white"
        />

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

        <Button bgColor={theme.colors.white} textColor={theme.colors.black}>
          See more
        </Button>
      </Container>
    </Section>
  );
};

export default Projects;
