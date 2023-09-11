import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Web Sumba',
    slug: 'web-sumba',
    banner: '/static/projects/sumba.png',
    website: '#',
    description:
      'Sumba tourism website, to see the natural beauty of Sumba Island.',
    shortDescription:
      'Ready to deploy, distributed cryptocurrency trading bot.',
    repository: 'https://github.com/karanpratapsingh/HyperTrade',
    stack: [Stack.react, Stack.tailwind],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/sumba.png',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fcharts.png?alt=media&token=62c42939-9371-4413-b85d-f2dd3b4534ca',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fdataframe.png?alt=media&token=f2e6523c-c9de-4fde-8fb3-434c74eb20d8',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fportfolio.png?alt=media&token=8f4e3da1-2dc2-4382-9fc8-1fbc18a98146',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fconfig.png?alt=media&token=f619b1da-47d5-4c33-b4d0-368adaead1c8',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fconfig-strategy.png?alt=media&token=68693230-4fce-420b-b419-d211a9568dc5',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fcharts-indicators.png?alt=media&token=21c7875f-5abe-4ceb-8057-4d7a70b67d33',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Ftelegram.png?alt=media&token=110874dd-fb96-4dd2-b299-12a62b092a04',
    ],
    deployment: {
      web: '#',
    },
    subProjects: [],
  },
  {
    title: 'Futsal Field Booking Application',
    slug: 'peapods',
    banner: '/static/projects/aplikasi-booking-futsal.png',
    website: '#',
    description: `Book a futsal field easily without having to come in person. Payment system that has been integrated with a payment gateway.`,
    shortDescription:
      'Peapods is a new type of decentralized social network that values real human interaction.',
    repository: null,
    stack: [Stack.javascript, Stack.bootstrap, Stack.codeigniter, Stack.mysql],
    screenshots: [],
    deployment: {
      web: 'https://peapods.com',
    },
    subProjects: [],
  },
  {
    title: 'Food ordering API',
    slug: 'kcards',
    banner: '/static/projects/go-makan.png',
    description: 'Food ordering API created using ASP.NET Core Web API.',
    repository: 'https://github.com/karanpratapsingh/KCards',
    stack: [Stack.cshap, Stack.aspnet],
    dimensions: [450, 270],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
    ],
    deployment: {
      web: 'https://kcards-server.herokuapp.com',
      android: 'https://play.google.com/store/apps/details?id=com.kcards',
      ios: 'https://itunes.apple.com/us/app/kcards/id1461733524',
    },
    website: 'https://github.com/wandi007/web_gomakan',
    subProjects: [],
  },
  {
    title: 'Movie News',
    slug: 'proximity',
    website: '#',
    banner: '/static/projects/movie-news.png',
    description:
      'News about the latest films, presented in a user friendly manner and fast performance.',
    repository: 'https://github.com/karanpratapsingh/Proximity',
    stack: [Stack.tailwind, Stack.vue],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=a9b5a094-8a16-4c84-af16-65bf2378d7d9',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fca4c07e-c922-445e-a259-a06c038e0974',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=31dafec8-fc20-4d6f-96e7-312a4c847ac5',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-4-.png?alt=media&token=4067a226-5b7b-4ffa-859e-401323a864c4',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=c349a959-ab54-4e2d-8f8e-2393466bb5c0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=f2c25e34-38e8-4886-b247-dc6f270c36d0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=2af284b0-4266-4072-a900-cc9ef8521f74',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=e041e4bd-50fc-49a7-8a22-f6e98d3e1bc6',
    ],
    deployment: {
      web: 'https://proximity-mobile.web.app',
      android:
        'https://play.google.com/store/apps/details?id=com.proximity.app',
      ios: 'https://apps.apple.com/us/app/proximity-app/id1489041006',
    },
    subProjects: [],
  },
  {
    title: 'Point of Sales',
    slug: 'velvet-live',
    banner: '/static/projects/point-of-sales.png',
    website: '#',
    description: `Sales application accompanied by a cashier system with sales receipts and reports.`,
    repository: null,
    stack: [Stack.javascript, Stack.laravel, Stack.bootstrap],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=b9b044ce-a3af-402f-a1db-1ae61621bb18',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=f551d87b-4f74-4d06-b81e-50ea8bf7feba',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=4f68239e-db81-43cc-b3a4-1a8642cfe4eb',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=5655d6e8-99d4-4c40-9782-ce12efeab256',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=32c12b1e-8e32-4d45-9001-9482d26bdaaf',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=609b7e74-8349-48ec-bcc0-4b0071dfb9b6',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=91880856-7288-420c-abb9-c1923f7ccd57',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=3dcdc3bd-cbb7-4d8e-9368-306158cce40d',
    ],
    deployment: {
      web: 'https://boom.london',
      android: 'https://play.google.com/store/apps/details?id=app.boom.mobile',
    },
    subProjects: [],
  },
];
