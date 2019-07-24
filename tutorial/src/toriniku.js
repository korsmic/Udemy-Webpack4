import Heading from './components/heading/heading.js';
import TorinikuImage from './components/toriniku-image/toriniku-image';

const heading = new Heading;
heading.render();

const torinikuImage = new TorinikuImage();
torinikuImage.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode')
} else if (process.env.NODE_ENV === 'development') {
  console.log('development mode')
}
