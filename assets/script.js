const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
const bannerImg = document.querySelector('.banner-img');
const banner = document.querySelector('#banner');
let index = 0;


const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


dots.innerHTML = `<span class="dot"></span>`.repeat(slides.length);
dots.children[index].classList.add('dot_selected');


arrowLeft.addEventListener('click', () => {
	let tagLine = document.querySelector('.tag-line');
	dots.children[index].classList.remove('dot_selected');
	index--;
	if(index < 0){
		index = slides.length - 1;
	}
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	let texte = document.createElement('p');
	texte.innerHTML = `${slides[index].tagLine}`;
	texte.classList.add('tag-line');
	banner.removeChild(tagLine);
	banner.appendChild(texte);
	dots.children[index].classList.add('dot_selected');
});

arrowRight.addEventListener('click', () => {
	let tagLine = document.querySelector('.tag-line');
	dots.children[index].classList.remove('dot_selected');
	index++;
	if(index >= slides.length){
		index = 0;
	}
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	let texte = document.createElement('p');
	texte.innerHTML = `${slides[index].tagLine}`;
	texte.classList.add('tag-line');
	banner.removeChild(tagLine);
	banner.appendChild(texte);
	dots.children[index].classList.add('dot_selected');
});

