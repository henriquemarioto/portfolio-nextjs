import { ImHtmlFive } from 'react-icons/im';
import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiStyledcomponents,
  SiExpress,
  SiPostgresql,
  SiVercel,
  SiHeroku,
  SiGithub,
  SiJest,
  SiPython,
  SiDjango
} from 'react-icons/si';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { createContext, useContext } from 'react';
import { IconType } from 'react-icons/lib';
import Borarachar from '../../assets/borarachar.png';
import LolLogin from '../../assets/lol-login.jpg';

interface IconListProps {
  icon: IconType | undefined;
  text: string;
}

interface ProjectsProps {
  img?: any;
  title: string;
  inProgress?: boolean;
  description: string;
  technologies: string[];
  previewUrl: string;
  githubUrl: string;
}

interface ContextProps {
  techsList: IconListProps[];
  studyingTechsList: IconListProps[];
  projectsList: ProjectsProps[];
}

const DEFAULT_ICONS_VALUE = [
  {
    icon: undefined,
    text: ''
  }
];

const DEFAULT_PROJECT_VALUE = [
  {
    img: '',
    title: '',
    inProgress: true,
    description: '',
    technologies: [],
    previewUrl: '',
    githubUrl: ''
  }
];

export const DataBaseContext = createContext<ContextProps>({
  techsList: DEFAULT_ICONS_VALUE,
  studyingTechsList: DEFAULT_ICONS_VALUE,
  projectsList: DEFAULT_PROJECT_VALUE
});

export const DataBaseProvider = ({ children }) => {
  const techsList: IconListProps[] = [
    {
      icon: ImHtmlFive,
      text: ''
    },
    {
      icon: SiCss3,
      text: ''
    },
    {
      icon: SiJavascript,
      text: ''
    },
    {
      icon: FaReact,
      text: ''
    },
    {
      icon: SiTypescript,
      text: ''
    },
    {
      icon: SiStyledcomponents,
      text: ''
    },
    {
      icon: FaNodeJs,
      text: ''
    },
    {
      icon: SiExpress,
      text: ''
    },
    {
      icon: undefined,
      text: 'Typeorm'
    },
    {
      icon: SiJest,
      text: ''
    },
    {
      icon: SiPostgresql,
      text: ''
    },
    {
      icon: FaDocker,
      text: ''
    },
    {
      icon: SiVercel,
      text: ''
    },
    {
      icon: SiHeroku,
      text: ''
    },
    {
      icon: FaGitAlt,
      text: ''
    },
    {
      icon: SiGithub,
      text: ''
    }
  ];
  const studyingTechsList: IconListProps[] = [
    {
      icon: SiPython,
      text: ''
    },
    {
      icon: SiDjango,
      text: ''
    },
    {
      icon: FaReact,
      text: 'Native'
    }
  ];
  const projectsList: ProjectsProps[] = [
    {
      img: '',
      title: 'Pokedex',
      inProgress: true,
      description:
        'A Pokedex, containing all pokemon information, registration system to create profile with favorite pokemons and share with others.',
      technologies: ['React', 'Next', 'Typescript'],
      previewUrl: '',
      githubUrl: ''
    },
    {
      img: Borarachar,
      title: 'Borarachar',
      inProgress: false,
      description:
        'Borarachar is a website to share streaming services with other people, such as Netflix, Spotify, among others.',
      technologies: ['React'],
      previewUrl:
        'https://capstone-m3-borarachar-git-master-henriquemarioto.vercel.app/',
      githubUrl: 'https://github.com/henriquemarioto/capstone-m3-borarachar'
    },
    {
      img: LolLogin,
      title: 'League of Legends Login',
      inProgress: false,
      description:
        'A clone of the League of Legends login screen, it was my first time using Typescript and I really enjoyed the experience..',
      technologies: ['React', 'Typescript'],
      previewUrl: 'https://github.com/henriquemarioto/lol-login-screen-react',
      githubUrl: 'https://lol-login-screen-react.vercel.app/'
    }
  ];

  return (
    <DataBaseContext.Provider
      value={{
        techsList,
        studyingTechsList,
        projectsList
      }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};

export default function useDataBase() {
  return useContext(DataBaseContext);
}
