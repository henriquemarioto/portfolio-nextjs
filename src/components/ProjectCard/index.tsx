import { FaLink } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import {
  Container,
  Description,
  ImageContainer,
  InfoContainer,
  Links,
  Technologies,
  Title
} from './style';

interface Props {
  img?: any;
  title: string;
  inProgress?: boolean;
  description: string;
  technologies: string[];
  previewUrl: string;
  githubUrl: string;
}

const ProjectCard = ({
  description,
  githubUrl,
  img,
  previewUrl,
  technologies,
  title,
  inProgress
}: Props) => (
  <Container>
    <ImageContainer img={img}>{!img && <p>In construction</p>}</ImageContainer>

    <InfoContainer>
      <Title>
        <h3>{title}</h3>
        {inProgress && <span>In progress</span>}
      </Title>

      <Description>{description}</Description>

      <Technologies>
        <strong>Technologies</strong>: <span>{technologies.join(', ')}</span>
      </Technologies>

      <Links>
        <a href={previewUrl} target="_blank" rel="noreferrer">
          <FaLink />
          Preview
        </a>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <SiGithub /> Code
        </a>
      </Links>
    </InfoContainer>
  </Container>
);

ProjectCard.defaultProps = {
  img: false,
  inProgress: false
};

export default ProjectCard;
