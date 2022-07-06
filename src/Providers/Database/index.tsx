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
  SiDjango,
  SiVite,
  SiRedux,
  SiJsonwebtokens,
  SiMongodb,
  SiNpm,
  SiYarn,
  SiFigma,
  SiInsomnia,
  SiTrello,
  SiNotion,
  SiVisualstudiocode
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { createContext, useContext } from 'react';
import { IconType } from 'react-icons/lib';
import Borarachar from '../../assets/borarachar.png';
import LolLogin from '../../assets/lol-login.jpg';

interface IconListProps {
  icon: IconType | undefined;
  text: string;
  link: string;
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
  toolsList: IconListProps[];
  projectsList: ProjectsProps[];
}

const DEFAULT_ICONS_VALUE = [
  {
    icon: undefined,
    text: '',
    link: ''
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
  toolsList: DEFAULT_ICONS_VALUE,
  projectsList: DEFAULT_PROJECT_VALUE
});

export const DataBaseProvider = ({ children }) => {
  const techsList: IconListProps[] = [
    {
      icon: FaGitAlt,
      text: '',
      link: 'https://git-scm.com/'
    },
    {
      icon: ImHtmlFive,
      text: '',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
    },
    {
      icon: SiCss3,
      text: '',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
    },
    {
      icon: SiJavascript,
      text: '',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
    },
    {
      icon: FaReact,
      text: '',
      link: 'https://pt-br.reactjs.org/'
    },
    {
      icon: SiVite,
      text: '',
      link: 'https://vitejs.dev/'
    },
    {
      icon: TbBrandNextjs,
      text: '',
      link: 'https://nextjs.org/'
    },
    {
      icon: SiTypescript,
      text: '',
      link: 'https://www.typescriptlang.org/'
    },
    {
      icon: SiStyledcomponents,
      text: '',
      link: 'https://styled-components.com/'
    },
    {
      icon: SiRedux,
      text: '',
      link: 'https://redux.js.org/'
    },
    {
      icon: FaReact,
      text: 'ContextAPI',
      link: 'https://pt-br.reactjs.org/docs/context.html'
    },
    {
      icon: FaNodeJs,
      text: '',
      link: 'https://nodejs.org/en/'
    },
    {
      icon: SiExpress,
      text: '',
      link: 'https://expressjs.com/pt-br/'
    },
    {
      icon: undefined,
      text: 'Api REST',
      link: 'https://pt.wikipedia.org/wiki/REST'
    },
    {
      icon: undefined,
      text: 'TypeORM',
      link: 'https://typeorm.io/'
    },
    {
      icon: SiJsonwebtokens,
      text: '',
      link: 'https://jwt.io/'
    },
    {
      icon: SiJest,
      text: '',
      link: 'https://jestjs.io/pt-BR/'
    },
    {
      icon: SiPostgresql,
      text: '',
      link: 'https://www.postgresql.org/'
    },
    {
      icon: SiMongodb,
      text: '',
      link: 'https://www.mongodb.com/'
    }
  ];
  const studyingTechsList: IconListProps[] = [
    {
      icon: SiPython,
      text: '',
      link: 'https://www.python.org/'
    },
    {
      icon: SiDjango,
      text: '',
      link: 'https://www.djangoproject.com/'
    },
    {
      icon: FaReact,
      text: 'Native',
      link: 'https://reactnative.dev/'
    }
  ];
  const toolsList: IconListProps[] = [
    {
      icon: SiNpm,
      text: '',
      link: 'https://www.npmjs.com/'
    },
    {
      icon: SiYarn,
      text: '',
      link: 'https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable'
    },
    {
      icon: SiGithub,
      text: '',
      link: 'https://github.com/'
    },
    {
      icon: SiHeroku,
      text: '',
      link: 'https://www.heroku.com/'
    },
    {
      icon: SiVercel,
      text: '',
      link: 'https://vercel.com/'
    },
    {
      icon: FaDocker,
      text: '',
      link: 'https://www.docker.com/'
    },
    {
      icon: SiFigma,
      text: '',
      link: 'https://www.figma.com/'
    },
    {
      icon: SiInsomnia,
      text: '',
      link: 'https://insomnia.rest/'
    },
    {
      icon: SiTrello,
      text: '',
      link: 'https://trello.com/'
    },
    {
      icon: SiNotion,
      text: '',
      link: 'https://www.notion.so/'
    },
    {
      icon: SiVisualstudiocode,
      text: '',
      link: 'https://code.visualstudio.com/'
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
      previewUrl: 'https://lol-login-screen-react.vercel.app/',
      githubUrl: 'https://github.com/henriquemarioto/lol-login-screen-react'
    }
  ];

  return (
    <DataBaseContext.Provider
      value={{
        techsList,
        studyingTechsList,
        toolsList,
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
