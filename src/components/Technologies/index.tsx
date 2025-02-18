import Section from '../Section';
import SectionTitle from '../SectionTitle';
import { Container, IconsContainer, StackSection } from './style';
import useDataBase, { IconListProps } from '../../Providers/Database';
import ContentContainer from '../ContentContainer';
import WaveContainer from '../WaveContainer';
import Wave from '../Wave';
import theme from '../../styles/theme';

const Technologies = () => {
  const { codeList, databaseList, deployList, toolsList } = useDataBase();

  const sections: {
    title: string;
    subtitle: string;
    list: IconListProps[];
  }[] = [
    {
      title: 'Code',
      subtitle: 'technologies related with coding',
      list: codeList
    },
    {
      title: 'Database',
      subtitle: 'databases and ORMs',
      list: databaseList
    },
    {
      title: 'Deploy',
      subtitle: 'deployment platforms',
      list: deployList
    },
    {
      title: 'Tools and Others',
      subtitle: 'tools and others',
      list: toolsList
    }
  ];

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
          {sections.map(data => (
            <StackSection key={data.title}>
              <SectionTitle title={data.title} subTitle={data.subtitle} />
              <IconsContainer>
                {data.list.map(tech => (
                  <li key={tech.name}>
                    <a href={tech.link} target="_blank" rel="noreferrer">
                      {tech.icon && (
                        <tech.icon title={tech.name} aria-label={tech.name} />
                      )}
                    </a>
                  </li>
                ))}
              </IconsContainer>
            </StackSection>
          ))}
        </Container>
      </ContentContainer>
    </Section>
  );
};

export default Technologies;
