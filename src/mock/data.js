import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Digital Rolling', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my world', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello Europe, I'm a",
  name: 'rolling digital lab',
  subtitle: 'that can help you become digital',
  cta: 'get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'inner.jpeg',
  paragraphOne: 'Hola Tio',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '508_side.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to know more? Awesome!',
  btn: 'Send me a message',
  email: "mailto:lukas@lindnerherrero.com?subject=Let's%20talk&body=Hi%20Luke%2C%0D%0A%0D%0A",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lindnerherrero/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/herredro',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
