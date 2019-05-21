import { IContactDetails } from './model/contact';
import { IEducationPayload } from './model/education';
import { IExperiancePayload } from './model/experiance';
import { IFolio } from './model/folio';
import { IProfile } from './model/profile';

export const contactDetails: IContactDetails[] = [
  {
    icon: 'http://oflisback.github.io/react-favicon/public/img/github.ico',
    isLink: false,
    text: 'hi@fandanzle.co.uk'
  },
  {
    icon: 'http://oflisback.github.io/react-favicon/public/img/github.ico',
    link: 'https://github.com/stump201',
    isLink: true,
    text: 'Github'
  },
  {
    icon: 'http://oflisback.github.io/react-favicon/public/img/github.ico',
    isLink: true,
    link: 'https://github.com/stump201',
    text: 'Docker Hub'
  }
];

export const educationPayload: IEducationPayload[] = [
  {
    year: '2007 - 2010',
    institute: 'Brighton University',
    subject: 'FDSC Software engineering & networked system’s',
    description: ['-']
  },
  {
    year: '2000 - 2007',
    institute: 'The Howard Secondary',
    subject: "GCSE's & A-levels",
    description: ['3 A-Levels', '17 A-C GCSE']
  }
];

export const experiancePayload: IExperiancePayload[] = [
  {
    year: '2019 - Present',
    company: 'Photobox',
    title: 'Engineering Manager',
    description: ['Engineering Manager for the shopping experience team']
  },
  {
    year: '2017 - 2019',
    company: 'Kingfisher Digital',
    title: 'Lead developer / Full Stack Developer',
    description: [
      'Over my two year tenure I was 1 of 5 lead developer’s within Kingfisher Digital’s  digital Hub, managing up to 50 developer’s across a shared hierarchy.',
      'The projects were varied; my primary focus was expanding the React/Typescript & Express/Typescript oriented stack’s we had deployed across our various front and backend estates. The most interesting project was when my team was tasked with implementing Augmented reality using ARKIT within the core B&Q IOS app.',
      'I have also been involved in all levels of conversation across the digital platform; Solution design, Systems architecture, Staffing, Tooling, Vendor sign offs & System operation’s.'
    ]
  },
  {
    year: '2013 - 2017',
    company: 'SecureData Europe',
    title: 'Full Stack Developer',
    description: [
      'This was a broad role, Initially the team was small with only three members; but over the course of 4 years it expanded to seven developers. My team was focused on software to secure customer’s estates along side internal system. Unofficially I undertook a hybrid development & Devops role.',
      'For the first year in the role I was the lead for our entire technology stack and allocation of team projects before a dedicated development manage was brought it to assist with the team’s continued expansion.'
    ]
  },
  {
    year: '2012 - 2013',
    company: 'Gaming Media Group',
    title: 'Web developer ',
    description: [
      'A PHP and JavaScript oriented role, I developed numerous systems and vendor integration’s.'
    ]
  }
];

export const folioPayload: IFolio[] = [
  {
    image: 'http://media.fandanzle.co.uk/diy.png',
    title: 'Kingfisher digital'
  },
  {
    image: 'http://media.fandanzle.co.uk/secdata.png',
    title: 'SecureData'
  }
];

export const profilePayload: IProfile = {
  image: 'media.fandanzle.co.uk/avatar.png',
  title: 'My name is Alex and im a developer',
  subTitle:
    'With a passion for web development, security, networking and microservices.'
};

export const aboutPayload: string[] = [
  'From an early age I was always interested in computing, with age this interest has evolved into a genuine passion. Building software/stuff that solves a genuine problem is the main criteria for any project I undertake.',
  'I would describe myself as keen, open to ideas and hungry for knowledge; When I’m not at work trying to build/fix something you will probably find me reading up on how to build better software; That or developing upon personal projects. I have been very lucky with all of my positions to date; I have been exposed to every level of application development & delivery. I feel this has given me what I would consider to be an advantage over most. Luckily I realised early on in my carer that programming is only one segment of a project’s pipeline, Good communication and co-ordination can elevate a good project into greatness.'
]