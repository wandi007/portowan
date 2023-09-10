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
    link: 'https://www.hackerrank.com/certificates/99d92a7641b4',
  },
  {
    title: 'SQL Certification HackerRank',
    slug: 'system-design',
    banner: '/static/courses/Harckerrank-SQL.jpg',
    description: '',
    link: 'https://www.hackerrank.com/certificates/fc5587983b33',
  },
  {
    title: 'JavaScript Certification HackerRank',
    slug: 'system-design',
    banner: '/static/courses/javascript-basic-certificate.jpg',
    description: '',
    link: 'https://www.hackerrank.com/certificates/d1382ab17f1f',
  },
  {
    title: 'Belajar Dasar Pemprograman Web',
    slug: 'system-design',
    banner: '/static/courses/dasar-pemrograman-web.jpg',
    description: '',
    link: 'https://www.dicoding.com/certificates/JLX1G458GZ72',
  },
  {
    title: 'Belajar Dasar Pemprograman JavaScript',
    slug: 'go',
    banner: '/static/courses/belajar-js.png',
    description: '',
    link: 'https://www.dicoding.com/certificates/NVP7K5ODGZR0',
  },
  {
    title: 'Belajar Jaringan Komputer untuk Pemula',
    slug: 'go',
    banner: '/static/courses/jaringan-komputer-untuk-pemula.jpg',
    description: '',
    link: 'https://www.dicoding.com/certificates/81P2G76WYPOY',
  },
  {
    title: 'Belajar Dasar - Dasar DevOps',
    slug: 'go',
    banner: '/static/courses/dasar-devops.jpg',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
    link: 'https://www.dicoding.com/certificates/81P2GGM2QPOY',
  },
  {
    title: 'BC400 - Introduction to the Abap Workbench',
    slug: 'go',
    banner: '/static/courses/SAP-BC400.jpg',
    description: '',
    link: 'http://check.upp-sap.com:88/validasi%20sertifikat/hasil%20query.php?id=30303030303038353030303030313131&view=V',
  },
  {
    title: 'IC3 GS5 Computing Fundamentals Office 2016',
    slug: 'go',
    banner: '/static/courses/Computing-Fundamentals-Office-2016.jpg',
    description: '',
    link: '#',
  },
];
