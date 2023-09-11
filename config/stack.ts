import { Colors } from './colors';

export enum Stack {
  // Languages
  go,
  typescript,
  javascript,
  python,
  php,
  cshap,

  // Frontend
  react,
  reactnative,
  nextjs,
  css,
  bootstrap,
  tailwind,

  // Backend
  graphql,
  node,
  django,
  aspnet,
  laravel,
  codeigniter,
  vue,

  // Cloud
  aws,
  gcp,

  // Messaging
  nats,
  kafka,

  // Databases
  arangodb,
  redis,
  postgres,
  mongo,
  oracle,
  mysql,

  // Tools
  docker,
  kubernetes,
  terraform,
}

export const WorkStack = [
  //back end
  Stack.cshap,
  Stack.aspnet,
  Stack.javascript,
  Stack.php,
  Stack.laravel,
  Stack.codeigniter,

  //front end
  Stack.typescript,
  Stack.react,
  Stack.nextjs,
  Stack.css,
  Stack.bootstrap,
  Stack.tailwind,
  Stack.vue,

  Stack.postgres,
  Stack.oracle,
  Stack.mysql,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.go]: {
    value: 'Go',
    color: Colors.go,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: Colors.reactnative,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
  [Stack.nats]: {
    value: 'NATS',
    color: Colors.nats,
  },
  [Stack.kafka]: {
    value: 'Kafka',
    color: Colors.kafka,
  },
  [Stack.arangodb]: {
    value: 'ArangoDB',
    color: Colors.arangodb,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.terraform]: {
    value: 'Terraform',
    color: Colors.terraform,
  },
  [Stack.nextjs]: {
    value: 'Next.JS',
    color: Colors.nextjs,
  },
  [Stack.php]: {
    value: 'PHP',
    color: Colors.php,
  },
  [Stack.cshap]: {
    value: 'C#',
    color: Colors.cshap,
  },
  [Stack.css]: {
    value: 'CSS',
    color: Colors.css,
  },
  [Stack.bootstrap]: {
    value: 'Boostrap',
    color: Colors.bootstrap,
  },
  [Stack.tailwind]: {
    value: 'Tailwind',
    color: Colors.tailwind,
  },
  [Stack.aspnet]: {
    value: '.NET',
    color: Colors.aspnet,
  },
  [Stack.laravel]: {
    value: 'Laravel',
    color: Colors.laravel,
  },
  [Stack.codeigniter]: {
    value: 'CodeIgniter',
    color: Colors.codeigniter,
  },
  [Stack.oracle]: {
    value: 'Oracle',
    color: Colors.oracle,
  },
  [Stack.mysql]: {
    value: 'MySql',
    color: Colors.mysql,
  },
  [Stack.vue]: {
    value: 'Vue.Js',
    color: Colors.vue,
  },
};
