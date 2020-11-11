const $body = document.querySelector('body');
const $popup = document.querySelector('#popup');
const $closePopup = document.querySelector('#close-popup');
const $imageSlider = document.querySelector('#dynamc-slider__image');
const $textSlider = document.querySelector('#dynamc-slider__text');
const $nextImage = document.querySelector('#dynamc-slider__next');
const $prevImage = document.querySelector('#dynamc-slider__prev')
let counter = 0;

const myImages = [
  'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/11/As-20-Melhores-Ferramentas-de-Teste-de-Velocidade-de-Site.png',

  'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/06/Teste-de-Usabilidade-de-Site-Tudo-o-que-Voce-Precisa-Saber.png',

  'https://cdn.digitalks.com.br/wp-content/uploads/2017/10/site-mobile-lento.png',

  'https://static.wixstatic.com/media/636ecb_a83ab11d1bae4021ade4a209a25959cb~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_90,usm_0.66_1.00_0.01/636ecb_a83ab11d1bae4021ade4a209a25959cb~mv2.jpg',
  
  'https://king.host/blog/wp-content/uploads/2019/07/teste-de-conectividade-1-1024x576.jpg',

]


$closePopup.addEventListener('click',() => {
  $body.removeChild($popup);
})

window.addEventListener('DOMContentLoaded',() => {
  $imageSlider.src = myImages[counter];
});
$nextImage.addEventListener('click',nextImage)
$prevImage.addEventListener('click',prevImage)

function nextImage() {
  ++counter;
  if(counter >= myImages.length || counter < 0){
    counter = 0;
  }
  $imageSlider.src = myImages[counter];
}

function prevImage() {
  --counter;
  if(counter >= myImages.length || counter < 0){
    counter = 0;
  }
  $imageSlider.src = myImages[counter];
}