const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
const bannerImg = document.querySelector('.banner-img');
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
	i--;
	if(i < 0){
		i = slides.length - 1;
	}
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`;
});

arrowRight.addEventListener('click', () => {
	console.log('click right');
	i++;
	if(i >= slides.length){
		i = 0;
	}
	src="./assets/images/slideshow/slide1.jpg";
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`;

});

