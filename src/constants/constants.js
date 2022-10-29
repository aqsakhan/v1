import P1 from './assets/1.PNG';
import P2 from './assets/5.PNG';
import P3 from './assets/3.png';
import P4 from './assets/4.PNG';

export const projects = [
  {
    title: 'BEATS - Ecommerce Store',
    description: "Made using React, Node.js, Sanity for backend & Stripe for payments. This is a Fullstack Ecommerce Application with fuctionalities such as add to cart, remove and checkout/payments using stripe payments",
    image: P1,
    tags: ['ReactJs', 'NextJs', 'Sanity', 'Stripe'],
    source: 'https://github.com/aqsakhan/ecommerce_sanity',
    visit: 'https://ecommerce-with-sanity-stripe.vercel.app/',
    id: 0,
  },
  {
    title: 'Weather App',
    description: "This is a Weather App made possible using the OpenWeatherMap API, which allows to fetch the real time weather of cities all across the world. Also this app has a unique and responsive design and UI.",
    image: P2,
    tags: ['JavaScript', 'HTML', 'CSS'],
    source: 'https://github.com/aqsakhan/weather-app',
    visit: 'https://aqsakhan.github.io/weather-app/',
    id: 1,
  },
  {
    title: 'Quote Generator',
    description: "Displays a Quote along with the author, generated from an API. This also has a cool Tweet feature which will take the quote an set up a tweet on your twitter account. Also the new quote feature allows you to get a new quote.",
    image: P3,
    tags: ['JavaScript', 'HTML', 'CSS'],
    source: 'https://github.com/aqsakhan/quote-generator',
    visit: 'https://aqsakhan.github.io/quote-generator/',
    id: 2,
  },
  {
    title: 'SunnySide Landing Page',
    description: "This is a Landing page design challenge from FrontEndMentor.io. Made using only-",
    image: P4,
    tags: ['JavaScript', 'HTML', 'CSS'],
    source: 'https://github.com/aqsakhan/sunnyside-a-landing-page',
    visit: 'https://aqsakhan.github.io/sunnyside-a-landing-page/',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started Job', },
];