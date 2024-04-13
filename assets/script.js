const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
const bannerImg = document.querySelector('.banner-img');
const banner = document.querySelector('#banner');
let i = 0;


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


dots.innerHTML = '<span class="dot"></span>'.repeat(slides.length);

arrowLeft.addEventListener('click', () => {
	console.log('click left');
	let tagLine = document.querySelector('.tag-line');
	i--;
	if(i < 0){
		i = slides.length - 1;
	}
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`;
	let texte = document.createElement('p');
	texte.innerHTML = `${slides[i].tagLine}`;
	texte.classList.add('tag-line');
	banner.removeChild(tagLine);
	banner.appendChild(texte);
	console.log(texte);
	
});

arrowRight.addEventListener('click', () => {
	// console.log('click right');
	let tagLine = document.querySelector('.tag-line');
	i++;
	if(i >= slides.length){
		i = 0;
	}
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`;
	let texte = document.createElement('p');
	texte.innerHTML = `${slides[i].tagLine}`;
	texte.classList.add('tag-line');
	// console.log(texte);
	banner.removeChild(tagLine);
	banner.appendChild(texte);
});

