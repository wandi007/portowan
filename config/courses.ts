export type CourseContent = {
  name: string;
  slug?: string;
  description?: string;
  content?: CourseContent[];
};

export interface Course {
  title: string;
  slug: string;
  banner: string;
  description: string;
  link: string;
}

export const courseSlugMap = {
  go: 'Learn Go',
  'system-design': 'System Design',
};

export const courses: Course[] = [
  {
    title: 'Problem Solving Certification HackerRank',
    slug: 'system-design',
    banner: '/static/courses/problem-solving-basic-certificate.jpg',
    description: '',
    link: '#',
  },
  {
    title: 'SQL Certification HackerRank',
    slug: 'system-design',
    banner: '/static/courses/Harckerrank-SQL.jpg',
    description: '',
    link: '#',
  },
  {
    title: 'JavaScript Certification HackerRank',
    slug: 'system-design',
    banner: '/static/courses/javascript-basic-certificate.jpg',
    description: '',
    link: '#',
  },
  {
    title: 'Belajar Dasar Pemprograman Web',
    slug: 'system-design',
    banner: '/static/courses/dasar-pemrograman-web.jpg',
    description: '',
    link: '#',
  },
  {
    title: 'Belajar Dasar Pemprograman JavaScript',
    slug: 'go',
    banner: '/static/courses/belajar-js.png',
    description: '',
    link: '#',
  },
  {
    title: 'Belajar Jaringan Komputer untuk Pemula',
    slug: 'go',
    banner: '/static/courses/jaringan-komputer-untuk-pemula.jpg',
    description: '',
    link: '#',
  },
  {
    title: 'Belajar Dasar - Dasar DevOps',
    slug: 'go',
    banner: '/static/courses/dasar-devops.jpg',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
    link: '#',
  },
  {
    title: 'BC400 - Introduction to the Abap Workbench',
    slug: 'go',
    banner: '/static/courses/SAP-BC400.jpg',
    description: '',
    link: '#',
  },
  {
    title: 'IC3 GS5 Computing Fundamentals Office 2016',
    slug: 'go',
    banner: '/static/courses/Computing-Fundamentals-Office-2016.jpg',
    description: '',
    link: '#',
  },
];
