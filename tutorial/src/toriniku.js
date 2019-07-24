import Heading from './components/heading/heading.js';
import TorinikuImage from './components/toriniku-image/toriniku-image';
import _ from 'lodash';
// import React from 'react';

const heading = new Heading;
heading.render(_.upperFirst('toriniku'));

const torinikuImage = new TorinikuImage();
torinikuImage.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode')
} else if (process.env.NODE_ENV === 'development') {
  console.log('development mode')
}
