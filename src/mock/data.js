import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Digital Rolling', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my world', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello Europe, this is a",
  name: 'rolling digital studio.',
  subtitle: 'Now, digitization',
  end: 'comes to you.',
  cta: 'get digitized',
};
// export const heroData = {
//   title: "Hello Europe, let's",
//   name: 'get you access',
//   subtitle: 'to the',
//   end: 'digital revolution',
//   cta: 'get to know me',
// };

// ABOUT DATA
export const aboutData = {
  img: 'hi1.jpg',
  paragraphOne: 'This is Lukas in the house!',
  paragraphTwo: 'Boarded with a truck full of equipment and a pool of remote colleagues, he consults small and medium sized companies on how to benefit from the digital revolution.',
  // paragraphTwo: 'I believe in a decentralised !',
  paragraphThree: 'Book your appointment remote or on your site.',
  primaryButton: 'https://drive.google.com/file/d/1HWbQ6a56RyOEk9CG_9oYrrsnhS-oVOT3/view?usp=sharing', // if no resume, the button will not show up
  secondaryButton: 'mailto:lindnerherrero@gmail.com?subject=Topic%3A%20Book%20Appointment', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'service-data-engineering.jpg',
    title: 'Data Engineering & Automization',
    info: 'You already generate data but you can\'t benefit from it? Let\'s make your data work for you!',
    info2: '',
    url: 'mailto:lindnerherrero@gmail.com?subject=Topic%3A%20Data%20Engineering',
  },
  {
    id: nanoid(),
    img: 'service-prototyping.jpg',
    title: 'Digital Prototyping',
    info: 'Prototyping digital ideas',
    info2: 'You have a great idea? Chances are that it will fail due to wrong assumptions and you spend time and money into a dead end. In order to assure you are developing the idea for your clients and not for your bin, you should continously test on your target groups to adapt the development process.',
    url: 'mailto:lindnerherrero@gmail.com?subject=Topic%3A%20Prototyping',
  },
  {
    id: nanoid(),
    img: 'service-webdev.jpg',
    title: 'Web Development',
    info: 'Website, Online Shop, Blog',
    info2: ' ',
    url: 'mailto:lindnerherrero@gmail.com?subject=Topic%3A%20Online%20Shop',
  },
  {
    id: nanoid(),
    img: 'service-printing.jpg',
    title: '3D Printing',
    info: 'You need a screw ',
    info2: ' ',
    url: 'mailto:lindnerherrero@gmail.com?subject=Topic%3A%203D%20Printing',
  },
  {
    id: nanoid(),
    img: 'service-crypto.jpg',
    title: 'Bitcoin Starter Pack',
    info: 'Last but not least, I can show you how to buy cryptocurrencies, and everything you need to get started in the exciting world of cryptos.',
    info2: ' ',
    url: 'mailto:lindnerherrero@gmail.com?subject=Topic%3A%20Bitcoin%20Starter%20Pack',
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
