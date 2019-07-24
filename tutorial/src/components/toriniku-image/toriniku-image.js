import toriniku from './toriniku.jpg';
import './toriniku-image.scss';

class TorinikuImage {
  render () {
    const img = document.createElement('img');
    img.alt = 'toriniku';
    img.src = toriniku;
    img.classList.add('toriniku-image');

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default TorinikuImage;