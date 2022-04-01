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
import banner from '../assets/images/banner.jpg';
import book1 from '../assets/images/book1.jpg';
import book2 from '../assets/images/book2.jpg';
import book3 from '../assets/images/book3.jpg';
import book4 from '../assets/images/book4.jpg';
import book5 from '../assets/images/book5.jpg';
import book6 from '../assets/images/book6.jpg';
import book7 from '../assets/images/book7.jpg';
import book8 from '../assets/images/book8.jpg';
import book9 from '../assets/images/book9.jpg';
import course1 from '../assets/images/course1.jpg';
import course2 from '../assets/images/course2.jpg';
import course3 from '../assets/images/course3.jpg';
import course4 from '../assets/images/course4.jpg';
import course5 from '../assets/images/course5.jpg';
import course6 from '../assets/images/course6.jpg';
import course7 from '../assets/images/course7.jpg';
import course8 from '../assets/images/course8.jpg';
import course3full from '../assets/images/course3full.jpg';

export const socialIcon = [
  {
    url: '/',
    icon: 'fa fa-facebook-f',
  },
  {
    url: '/',
    icon: 'fa fa-twitter',
  },
  {
    url: '/',
    icon: 'fa fa-youtube-play',
  },
  {
    url: '/',
    icon: 'fa fa-instagram',
  },
];

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

export const navigationData = {
  menuItems: [
    {
      title: 'Home',
      submenu: [
        {
          title: 'Homepage one',
          url: '/',
          id: 'homepage1',
        },
        {
          title: 'Homepage two',
          url: '#',
          id: 'homepage2',
        },
        {
          title: 'Homepage three',
          id: 'homepage3',
          submenu: [
            {
              title: 'Homepage one',
              url: '#',
              id: 'homepage31',
            },
            {
              title: 'Homepage two',
              url: '#',
              id: 'homepage32',
            },
            {
              title: 'Homepage three',
              id: 'homepage33',
              // url: '#',
              submenu: [
                {
                  title: 'Homepage one',
                  url: '#',
                  id: 'homepage331',
                },
                {
                  title: 'Homepage two',
                  url: '#',
                  id: 'homepage332',
                },
                {
                  title: 'Homepage three',
                  url: '#',
                  id: 'homepage333',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'About',
      url: '/',
    },
    {
      title: 'Programs',
      url: '/',
    },
    {
      title: 'features',
      submenu: [
        {
          title: 'Tools',
          id: 'tools',
          submenu: [
            {
              title: 'Typography',
              url: '/',
              id: 'typography',
            },
            {
              title: 'Shortcodes',
              url: '/',
              id: 'shortcodes',
            },
          ],
        },
        {
          title: 'Leadership',
          id: 'leadership',
          url: '/',
        },
        {
          title: 'Donation Cause',
          url: '/',
          id: 'donation',
        },
        {
          title: 'Privacy Policy',
          url: '/',
          id: 'privacy',
        },
        {
          title: 'Services Plus',
          url: '/',
          id: 'services',
        },
      ],
    },
    {
      title: 'teaching&training',
      url: 'teachingtraining',
    },
    {
      title: 'Blog',
      submenu: [
        {
          title: 'Gallery',
          url: '/',
          id: 'gallery',
        },
        {
          title: 'All Post',
          url: '/',
          id: 'blog2',
        },
        {
          title: 'Classic',
          id: 'classic',
          submenu: [
            {
              title: 'Classic 2',
              url: '/',
              id: 'classic2',
            },
            {
              title: 'Classic 3',
              url: '/',
              id: 'classic3',
            },
          ],
        },
        {
          title: 'Portfolios',
          id: 'portfolios',
          submenu: [
            {
              title: 'Portfolios 2',
              url: '/',
              id: 'portfolios2',
            },
            {
              title: 'Portfolios 3',
              url: '/',
              id: 'portfolios3',
            },
          ],
        },
        {
          title: 'Chess',
          id: 'chess',
          submenu: [
            {
              title: 'chess 2',
              url: '/',
              id: 'chess2',
            },
            {
              title: 'chess 3',
              url: '/',
              id: 'chess3',
            },
          ],
        },
      ],
    },
    {
      title: 'Shop',
      url: '/shop'
    },
    {
      title: 'Visiting',
      url: '/',
    },
  ],
};

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
  signature: signature,
};

export const dataMend = [
  {
    iconName: 'fa fa-heart',
    nameMend: 'Buddhism',
  },
  {
    iconName: 'fa fa-handshake-o',
    nameMend: 'Meditation',
  },
  {
    iconName: 'fa fa-leaf',
    nameMend: 'Mindfulness',
  },
  {
    iconName: 'fa fa-hand-rock-o',
    nameMend: 'Retreats',
  },
  {
    iconName: 'fa fa-gratipay',
    nameMend: 'Therapies',
  },
  {
    iconName: 'fa fa-pagelines',
    nameMend: 'Philosophy',
  },
  {
    iconName: 'fa fa-snowflake-o',
    nameMend: 'Comunity',
  },
  {
    iconName: 'fa fa-adjust',
    nameMend: 'Arts',
  },

];

export const dataEvent = [
  {
    date: '18',
    month: 'February',
    url: event1,
    title: 'Introduction to Buddhism Courses',
    timeOpen: '8:00AM',
    timeClose: '5:00PM',
    cost: '150',
    content: 'The starting course for Buddhist practices is a great way to try free sessions of meditation practices, yoga lessons, mindfullness lectures and more.',
  },
  {
    date: '09',
    month: 'March',
    url: event2,
    title: 'The Winter Retreat 2019',
    timeOpen: '9:30AM',
    timeClose: '8:00PM',
    cost: 'FREE',
    content: 'An annual meditation meeting for spiritual trainers and practitioners from all over the world. Everyone is welcome. Prior registration is required.',
  },
  {
    date: '13',
    month: 'April',
    url: event3,
    title: 'Annual Vesak Ceremony',
    timeOpen: '9:30AM',
    timeClose: '8:00PM',
    cost: 'FREE',
    content: 'Buddhas birthday, also known as Vesak Day, is celebrated in spring throughout the world. Buddhists celebrate the most important stages in life of Buddha on Vesak',
  },

];

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
  },
];

export const dataVision = {
  title: 'Our Core Vision',
  content: 'Meditation is one of the greatest ways to obtain inner peace and harmony. It is believed that meditation helps to accustom mind to positive thinking and calmness. When our mind is serene, it means that we are free from stress and open to true happiness. Everyone is invited to join our meditation lesson and enjoy the process.',
  urlPic1: vision1,
  urlAudio: 'https://player.vimeo.com/video/45830194?h=2c5541d8bc&color=ffffff&title=0&byline=0&portrait=0&badge=0',
  urlPic2: vision2,
  proverb: 'Meditate… do not delay, lest you later regret it.',
  author: 'GAUTAMA BUDDHA',
};

export const dataDharma = [
  {
    urlPic: dharma1,
    urlAudio: 'https://samadhi.axiomthemes.com/wp-content/uploads/2019/03/sample-melody.mp3',
    title: 'Managing Relationships',
    author: 'ALAN BRAHM',
  },
  {
    urlPic: dharma2,
    urlAudio: 'https://samadhi.axiomthemes.com/wp-content/uploads/2019/03/sample-melody.mp3',
    title: 'Managing Relationships',
    author: 'ALAN BRAHM',
  },
];

export const dataLinksContact = [
  {
    iconName: 'fa fa-facebook-f',
    name: 'Facebook',
  },
  {
    iconName: 'fa fa-twitter',
    name: 'Twitter',
  },
  {
    iconName: 'fa fa-youtube',
    name: 'Youtube',
  },
  {
    iconName: 'fa fa-instagram',
    name: 'Instagram',
  },
];

export const dataBeginningBox = {
  content: 'Samandhi Monastery invites and welcomes every person seeking refuge in the ancient teachings of wisdom and compassion to practice.',
  btnName: 'BEGINNING INSTRUCTION',
};

export const dataBanner = {
  title: 'Shop',
  src: banner,
  alt: 'banner',
};

export const dataCategories = [
  {
    item: 'book',
    href: '/',
  },
  {
    item: 'buddhism',
    href: '/',
  },
  {
    item: 'inspiration',
    href: '/',
  },
  {
    item: 'meditation',
    href: '/',
  },
  {
    item: 'other',
    href: '/',
  },
  {
    item: 'philosophy',
    href: '/',
  },
  {
    item: 'teaching',
    href: '/',
  },
];


export const dataTags = [
  {
    item: 'buddhism',
    href: '#',
  },
  {
    item: 'happiness',
    href: '#',
  },
  {
    item: 'meditation',
    href: '#',
  },
  {
    item: 'religion',
    href: '#',
  },
  {
    item: 'soul',
    href: '#',
  },
];

export const dataProducts = [
  {
    name: 'The Buddha’s Way of Happiness',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book1,
    alt: 'book1',
    money: '15.00',
    numStars: 5,
  },
  {
    name: 'The Four Noble Truths of Love',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book2,
    alt: 'book2',
    money: '11.00',
    numStars: 4,
  },
  {
    name: 'Meditations from the Mat',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book3,
    alt: 'book3',
    money: '10.00',
  },
  {
    name: 'The Buddha’s Way of Happiness',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book4,
    alt: 'book4',
    money: '12.00',
  },
  {
    name: 'The Four Noble Truths of Love',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book5,
    alt: 'book5',
    money: '11.00',
    numStars: 4,
  },
  {
    name: 'Meditations from the Mat',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book6,
    alt: 'book6',
    money: '10.00',
  },
  {
    name: 'The Buddha’s Way of Happiness',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book7,
    alt: 'book7',
    money: '15.00',
    numStars: 5,
  },
  {
    name: 'The Four Noble Truths of Love',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book8,
    alt: 'book8 ',
    money: '11.00',
    numStars: 4,
  },
  {
    name: 'Meditations from the Mat',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book9,
    alt: 'book9',
    money: '10.00',
  },
  {
    name: 'Meditations from the Mat',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book6,
    alt: 'book6',
    money: '10.00',
  },
  {
    name: 'The Four Noble Truths of Love',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book2,
    alt: 'book2',
    money: '11.00',
    numStars: 4,
  },
  {
    name: 'Meditations from the Mat',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book3,
    alt: 'book3',
    money: '10.00',
  },
  {
    name: 'The Buddha’s Way of Happiness',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book1,
    alt: 'book1',
    money: '15.00',
    numStars: 5,
  },
  {
    name: 'The Four Noble Truths of Love',
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur. magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    src: book3,
    alt: 'book3 ',
    money: '11.00',
    numStars: 4,
  },
];

export const dataCourses = [
  {
    src: course1,
    title: 'Art & Culture',
    content: 'It is believed that art is a form of meditation. Creative practices help to relieve stress and bring peace to one heart and mind.',
    beginning: 'SEPTEMBER 12, 2022',
    duration: '3 WEEKS',
    cost: 'FREE',
    urlLearn: '/course'
  },
  {
    src: course2,
    title: 'Tibetan Language',
    content: 'You have a chance to learn the language of the Dalai Lama and the language of dharma to understand buddhist teaching in depth.',
    beginning: 'JUNE 2, 2022',
    duration: '3 WEEKS',
    cost: '$150',
    urlLearn: '/course'
  },
  {
    src: course3,
    title: 'Meditation School',
    content: 'You’ll be a full-time part of Samadhi Monastery to support your training, practice, and spiritual life. Find the way to inner harmony.',
    beginning: 'APRIL 8, 2022',
    duration: '2 WEEKS',
    cost: 'FREE',
    urlLearn: '/course'
  },
  {
    src: course4,
    title: 'Cooking Classes',
    content: 'Throw your dreams into space like a kite, and you do not know what it will bring back, a new life, a new friend, a new love, a new country.',
    beginning: 'APRIL 15, 2022',
    duration: '1 MONTH',
    cost: '$130',
    urlLearn: '/course'
  },
  {
    src: course5,
    title: 'Dreams and Reality',
    content: 'Throw your dreams into space like a kite, and you do not know what it will bring back, a new life, a new friend, a new love, a new country.',
    beginning: 'JULY 4, 2022',
    duration: '4 WEEKS',
    cost: '$100',
    urlLearn: '/course'
  },
  {
    src: course6,
    title: 'Find Happiness',
    content: 'Throw your dreams into space like a kite, and you do not know what it will bring back, a new life, a new friend, a new love, a new country.',
    beginning: 'JULY 15, 2022',
    duration: '3 WEEKS',
    cost: 'FREE',
    urlLearn: '/course'
  },
  {
    src: course7,
    title: 'Transform Your Life',
    content: 'Throw your dreams into space like a kite, and you do not know what it will bring back, a new life, a new friend, a new love, a new country.',
    beginning: 'AUGUST 9, 2022',
    duration: '3 WEEKS',
    cost: '$150',
    urlLearn: '/course'
  },
  {
    src: course8,
    title: 'Yoga School',
    content: 'Throw your dreams into space like a kite, and you do not know what it will bring back, a new life, a new friend, a new love, a new country.',
    beginning: 'SEPTEMBER 3, 2022',
    duration: '3 MONTHS',
    cost: '$200',
    urlLearn: '/course'
  },
]

export const dataAlsoLike = {
  src: course3full,
  title: 'Meditation School',
  content: 'You’ll be a full-time part of Samadhi Monastery to support your training, practice, and spiritual life. Find the way to inner harmony.',
  fullContent: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
  beginning: 'APRIL 8, 2022',
  duration: '2 WEEKS',
  cost: 'FREE',
  urlLearn: '/'
}

export const dataReaction = [
  {
    className: 'fa fa-heart',
    count: 0,
    title: 'COOL'
  },
  {
    className: 'fa fa-heartbeat',
    count: 0,
    title: 'BAD'
  },
  {
    className: 'fa fa-smile-o',
    count: 2,
    title: 'HAPPY'
  },
  {
    className: 'fa fa-frown-o',
    count: 0,
    title: 'SAD'
  },
]


export const dataMayLike = [
  {
    src: course1,
    title: 'Art & Culture',
    content: 'It is believed that art is a form of meditation. Creative practices help to relieve stress and bring peace to one heart and mind.',
    beginning: 'SEPTEMBER 12, 2022',
    duration: '3 WEEKS',
    cost: 'FREE',
    urlLearn: '/'
  },
  {
    src: course2,
    title: 'Tibetan Language',
    content: 'You have a chance to learn the language of the Dalai Lama and the language of dharma to understand buddhist teaching in depth.',
    beginning: 'JUNE 2, 2022',
    duration: '3 WEEKS',
    cost: '$150',
    urlLearn: '/'
  },
  {
    src: course3,
    title: 'Meditation School',
    content: 'You’ll be a full-time part of Samadhi Monastery to support your training, practice, and spiritual life. Find the way to inner harmony.',
    beginning: 'APRIL 8, 2022',
    duration: '2 WEEKS',
    cost: 'FREE',
    urlLearn: '/'
  }
]