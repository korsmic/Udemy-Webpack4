import toriniku from './toriniku.jpg';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'toriniku';
  img.width = 640;
  img.src = toriniku;

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;
