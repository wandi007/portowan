export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  email = 'email',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@karan_6864',
  site: 'karanpratapsingh.com',
  calendly: 'https://calendly.com/karanpratapsingh',
  links: {
    github: 'https://github.com/wandi007',
    linkedin: 'https://www.linkedin.com/in/wandi-febriandi-809135131/',
    email: 'mailto:wfebriandi@gmail.com',
  },
};
