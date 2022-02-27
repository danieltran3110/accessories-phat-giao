import slide1 from '../assets/images/slider1.jpg';
import slide2 from '../assets/images/slider2.jpg';
import slide3 from '../assets/images/slider3.jpg';
import proverb1 from '../assets/images/proverb1.jpg';
import signature from '../assets/images/A_R_Rahman_signature.png';
import event3 from '../assets/images/event3.jpg';
import event2 from '../assets/images/event2.jpg';
import event1 from '../assets/images/event1.jpg';
import feature1 from '../assets/images/feature1.jpg';
import feature2 from '../assets/images/feature2.jpg';
import feature3 from '../assets/images/feature3.jpg';
import feature4 from '../assets/images/feature4.jpg';
import vision1 from '../assets/images/vision1.jpg';
import vision2 from '../assets/images/vision2.jpg';
import dharma1 from '../assets/images/dharma1.jpg';
import dharma2 from '../assets/images/dharma2.jpg';

export const dataSwiper = [
  {
    url: slide1,
    title: 'Buddhist Temple',
    subtitle: 'for World Peace',
    titleBtn: 'view all event',
  },
  {
    url: slide2,
    title: 'Samadhi Temple',
    subtitle: 'for World Peace',
    titleBtn: 'learn more',
  },
  {
    url: slide3,
    title: 'Fundamental Wisdom',
    subtitle: 'of The Middle Way',
    titleBtn: 'learn more',
  },
];

export const dataNavbar = [
  {
    menu: 'home',
    subMenu: [
      {
        title: 'home 1',
        href: '/#',
      },
      {
        title: 'home 2',
        href: '/#',
      },
      {
        title: 'home 3',
        href: '/#',
      },
    ],
  },
  {
    menu: 'about',
    subMenu: ['about 1', 'about 2', 'home 3'],
  },
  {
    menu: 'programs',
    subMenu: ['programs 1', 'programs 2', 'programs 3'],
  },
  {
    menu: 'features',
    subMenu: ['features 1', 'features 2', 'features 3'],
  },
  {
    menu: 'teaching&training',
  },
  {
    menu: 'blog',
    subMenu: ['blog 1', 'blog 2'],
  },
  {
    menu: 'shop',
  },
  {
    menu: 'visiting',
  },
];

export const dataProverb = {
  url: proverb1,
  proverb:
    ' World belongs to humanity, not this leader, that leader or that king or prince or religious leader. World belongs to humanity.',
  author: 'DALAI LAMA',
};

export const dataWelcome = {
    place: 'Welcome to Samadhi Buddhist Center',
    intro: 'Our center offers a diverse programme of lessons and training courses in different spheres, such as Buddhism teachings, meditation practices, yoga, concentration and so on. Classes take place in shrine rooms and yoga studio almost every day. You are welcome!',
    author: 'LUIS SHAH',
    signature: signature
}

export const dataMend = [
    {
        iconName: 'fa fa-heart',
        nameMend: 'Buddhism'
    },
    {
        iconName: 'fa fa-handshake-o',
        nameMend: 'Meditation'
    },
    {
        iconName: 'fa fa-leaf',
        nameMend: 'Mindfulness'
    },
    {
        iconName: 'fa fa-hand-rock-o',
        nameMend: 'Retreats'
    },
    {
        iconName: 'fa fa-gratipay',
        nameMend: 'Therapies'
    },
    {
        iconName: 'fa fa-pagelines',
        nameMend: 'Philosophy'
    },
    {
        iconName: 'fa fa-snowflake-o',
        nameMend: 'Comunity'
    },
    {
        iconName: 'fa fa-adjust',
        nameMend: 'Arts'
    },
    
]

export const dataEvent = [
    {
        date: '18',
        month: 'February',
        url: event1,
        title: 'Introduction to Buddhism Courses',
        timeOpen: '8:00AM',
        timeClose: '5:00PM',
        cost: '150',
        content: 'The starting course for Buddhist practices is a great way to try free sessions of meditation practices, yoga lessons, mindfullness lectures and more.'
    },
    {
        date: '09',
        month: 'March',
        url: event2,
        title: 'The Winter Retreat 2019',
        timeOpen: '9:30AM',
        timeClose: '8:00PM',
        cost: 'FREE',
        content: 'An annual meditation meeting for spiritual trainers and practitioners from all over the world. Everyone is welcome. Prior registration is required.'
    },
    {
        date: '13',
        month: 'April',
        url: event3,
        title: 'Annual Vesak Ceremony',
        timeOpen: '9:30AM',
        timeClose: '8:00PM',
        cost: 'FREE',
        content: 'Buddhas birthday, also known as Vesak Day, is celebrated in spring throughout the world. Buddhists celebrate the most important stages in life of Buddha on Vesak'
    }

] 

export const dataFeature = [
    {
        title: 'Art & Culture',
        url: feature1,     
        content: 'Buddhism is not only an abstract philosophy. It considers the emotions as well as the intellect and creates a new understanding of the world through art and culture.',
    },
    {
        title: 'Residency',   
        url: feature2,     
        content: 'The atmosphere of Samadhi Monastery helps to retreat from the anxieties of everyday life and concentrate your mind on spiritual practices.',
    },
    {
        title: 'Philosophy',    
        url: feature3,     
        content: 'Buddhism is a way to wisdom, peace, harmony of mind and soul, an exploration of the life in all its forms.',
    },
    {
        title: 'Meditation',    
        url: feature4,     
        content: 'Meditation is a training to your mind just like sport is training to your body. Different meditation practices require different mental skills.',
    }
]

export const dataVision = {
    title: 'Our Core Vision',
    content: 'Meditation is one of the greatest ways to obtain inner peace and harmony. It is believed that meditation helps to accustom mind to positive thinking and calmness. When our mind is serene, it means that we are free from stress and open to true happiness. Everyone is invited to join our meditation lesson and enjoy the process.',
    urlPic1: vision1,
    urlAudio: 'https://player.vimeo.com/video/45830194?h=2c5541d8bc&color=ffffff&title=0&byline=0&portrait=0&badge=0',
    urlPic2: vision2,
    proverb: 'Meditate… do not delay, lest you later regret it.',
    author: 'GAUTAMA BUDDHA'
}

export const dataDharma = [
    {
        urlPic: dharma1,
        urlAudio: 'https://samadhi.axiomthemes.com/wp-content/uploads/2019/03/sample-melody.mp3',
        title: 'Managing Relationships',
        author: 'ALAN BRAHM'
    },
    {
        urlPic: dharma2,
        urlAudio: 'https://samadhi.axiomthemes.com/wp-content/uploads/2019/03/sample-melody.mp3',
        title: 'Managing Relationships',
        author: 'ALAN BRAHM'
    },
]

export const dataLinksContact = [
    {
        iconName: 'fa fa-facebook-f',
        name: 'Facebook'
    },
    {
        iconName: 'fa fa-twitter',
        name: 'Twitter'
    },
    {
        iconName: 'fa fa-youtube',
        name: 'Youtube'
    },
    {
        iconName: 'fa fa-instagram',
        name: 'Instagram'
    },
]

export const dataBeginningBox = {
  content: 'Samandhi Monastery invites and welcomes every person seeking refuge in the ancient teachings of wisdom and compassion to practice.',
  btnName: 'BEGINNING INSTRUCTION'
}