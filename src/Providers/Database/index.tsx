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
  SiVite,
  SiJsonwebtokens,
  SiMongodb,
  SiNpm,
  SiYarn,
  SiFigma,
  SiInsomnia,
  SiTrello,
  SiNotion,
  SiTailwindcss,
  SiNestjs,
  SiMysql,
  SiRedis,
  SiTypeorm,
  SiSequelize,
  SiPrisma,
  SiGooglecloud,
  SiPostman,
  SiJira,
  SiUbuntu
} from 'react-icons/si';
import { TbBrandAzure, TbBrandNextjs } from 'react-icons/tb';
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaWindows
} from 'react-icons/fa';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { createContext, useContext } from 'react';
import { IconType } from 'react-icons/lib';
import Borarachar from '../../assets/borarachar.png';
import LolLogin from '../../assets/lol-login.jpg';
import Opencred from '../../assets/opencred.gif';

export interface IconListProps {
  icon: IconType | undefined;
  name: string;
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
  codeList: IconListProps[];
  databaseList: IconListProps[];
  deployList: IconListProps[];
  toolsList: IconListProps[];
  projectsList: ProjectsProps[];
}

const DEFAULT_ICONS_VALUE = [
  {
    icon: undefined,
    name: '',
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
  codeList: DEFAULT_ICONS_VALUE,
  databaseList: DEFAULT_ICONS_VALUE,
  deployList: DEFAULT_ICONS_VALUE,
  toolsList: DEFAULT_ICONS_VALUE,
  projectsList: DEFAULT_PROJECT_VALUE
});

export const DataBaseProvider = ({ children }) => {
  const codeList: IconListProps[] = [
    {
      icon: ImHtmlFive,
      name: 'HTML',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
    },
    {
      icon: SiCss3,
      name: 'CSS',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
    },
    {
      icon: SiJavascript,
      name: 'Javascript',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
    },
    {
      icon: SiTypescript,
      name: 'Typescript',
      link: 'https://www.typescriptlang.org/'
    },
    {
      icon: FaNodeJs,
      name: 'Nodejs',
      link: 'https://nodejs.org/en/'
    },
    {
      icon: FaReact,
      name: 'Reactjs',
      link: 'https://pt-br.reactjs.org/'
    },
    {
      icon: SiVite,
      name: 'Vite',
      link: 'https://vitejs.dev/'
    },
    {
      icon: TbBrandNextjs,
      name: 'Nextjs',
      link: 'https://nextjs.org/'
    },
    {
      icon: SiStyledcomponents,
      name: 'Styled-components',
      link: 'https://styled-components.com/'
    },
    {
      icon: SiTailwindcss,
      name: 'Tailwindcss',
      link: 'https://tailwindcss.com/'
    },
    {
      icon: SiExpress,
      name: 'Express',
      link: 'https://expressjs.com/pt-br/'
    },
    {
      icon: SiNestjs,
      name: 'Nestjs',
      link: 'https://nestjs.com/'
    },
    {
      icon: SiJest,
      name: '',
      link: 'https://jestjs.io/pt-BR/'
    },
    {
      icon: SiJsonwebtokens,
      name: 'JWT',
      link: 'https://jwt.io/'
    }
  ];
  const databaseList: IconListProps[] = [
    {
      icon: SiMysql,
      name: 'Mysql',
      link: 'https://www.mysql.com/'
    },
    {
      icon: SiPostgresql,
      name: 'Postgresql',
      link: 'https://www.postgresql.org/'
    },
    {
      icon: SiMongodb,
      name: 'Mongodb',
      link: 'https://www.mongodb.com/'
    },
    {
      icon: SiRedis,
      name: 'Redis',
      link: 'https://redis.io/'
    },
    {
      icon: SiTypeorm,
      name: 'TypeORM',
      link: 'https://typeorm.io/'
    },
    {
      icon: SiSequelize,
      name: 'Sequelize',
      link: 'https://sequelize.org/'
    },
    {
      icon: SiPrisma,
      name: 'Prisma',
      link: 'https://www.prisma.io/'
    }
  ];
  const deployList: IconListProps[] = [
    {
      icon: SiGooglecloud,
      name: 'Google Cloud',
      link: 'https://cloud.google.com/?hl=pt-BR'
    },
    {
      icon: SiVercel,
      name: 'Vercel',
      link: 'https://vercel.com/'
    },
    {
      icon: SiHeroku,
      name: 'Vercel',
      link: 'https://vercel.com/'
    }
  ];
  const toolsList: IconListProps[] = [
    {
      icon: FaGitAlt,
      name: 'Git',
      link: 'https://git-scm.com/'
    },
    {
      icon: SiGithub,
      name: 'Github',
      link: 'https://github.com/'
    },
    {
      icon: SiNpm,
      name: 'Npm',
      link: 'https://www.npmjs.com/'
    },
    {
      icon: SiYarn,
      name: 'Yarn',
      link: 'https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable'
    },
    {
      icon: FaDocker,
      name: 'Docker',
      link: 'https://www.docker.com/'
    },
    {
      icon: BiLogoVisualStudio,
      name: 'Visual Studio Code',
      link: 'https://code.visualstudio.com/'
    },
    {
      icon: SiPostman,
      name: 'Postman',
      link: 'https://www.postman.com/'
    },
    {
      icon: SiInsomnia,
      name: 'Insomnia',
      link: 'https://insomnia.rest/'
    },
    {
      icon: SiNotion,
      name: 'Notion',
      link: 'https://www.notion.so/'
    },
    {
      icon: SiFigma,
      name: 'Figma',
      link: 'https://www.figma.com/'
    },
    {
      icon: SiTrello,
      name: 'Trello',
      link: 'https://trello.com/'
    },
    {
      icon: TbBrandAzure,
      name: 'Azure Boards',
      link: 'https://azure.microsoft.com/pt-br/products/devops/boards'
    },
    {
      icon: SiJira,
      name: 'Jira',
      link: 'https://www.atlassian.com/br/software/jira'
    },
    {
      icon: SiUbuntu,
      name: 'Ubuntu',
      link: 'https://ubuntu.com/'
    },
    {
      icon: FaWindows,
      name: 'Windows',
      link: 'https://www.microsoft.com/pt-br/windows'
    }
  ];
  const projectsList: ProjectsProps[] = [
    {
      img: '',
      title: 'Bilhetezada',
      inProgress: true,
      description:
        'Bilhetezada is an application designed to simplify the creation, management, and sale of event tickets. Our goal is to provide a complete platform for organizers and attendees, streamlining the experience from event creation to access control.',
      technologies: ['Nodejs', 'Typescript', 'Nestjs', 'Next'],
      previewUrl: '',
      githubUrl: 'https://github.com/henriquemarioto/bilhetezada'
    },
    {
      img: Borarachar,
      title: 'Borarachar',
      inProgress: false,
      description:
        'Borarachar is a website to share streaming services with other people, such as Netflix, Spotify, among others',
      technologies: [
        'React',
        'React-router-dom',
        'Styled-components',
        'React-hook-form',
        'Yup',
        'Axios'
      ],
      previewUrl:
        'https://capstone-m3-borarachar-git-master-henriquemarioto.vercel.app/',
      githubUrl: 'https://github.com/henriquemarioto/capstone-m3-borarachar'
    },
    {
      img: LolLogin,
      title: 'League of Legends Login',
      inProgress: false,
      description:
        'A clone of the League of Legends login screen, it was my first time using Typescript and I really enjoyed the experience',
      technologies: ['React', 'ViteJS', 'Typescript', 'Styled-components'],
      previewUrl: 'https://lol-login-screen-react.vercel.app/',
      githubUrl: 'https://github.com/henriquemarioto/lol-login-screen-react'
    },
    {
      img: Opencred,
      title: 'OpenCred',
      inProgress: false,
      description:
        'A farm management screen, using dynamic charts with ChartJS',
      technologies: [
        'React',
        'ViteJS',
        'Typescript',
        'Styled-components',
        'React-chartjs-2'
      ],
      previewUrl: 'https://open-cred-demo.vercel.app/',
      githubUrl: 'https://github.com/henriquemarioto/open-cred-demo'
    }
  ];

  return (
    <DataBaseContext.Provider
      value={{
        codeList,
        databaseList,
        deployList,
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
