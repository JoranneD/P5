// Je déclare mon tableau
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

// Je déclare mes variables
let index = 0;
const pathString = "./assets/images/slideshow/";

const changeImage = document.querySelector(".banner-img");
const changeTag = document.querySelector("#banner p");
const after_button = document.querySelector("img.arrow_right");
const before_button = document.querySelector("img.arrow_left")
const dotContainer = document.querySelector(".dots")


// Je creer mes bullets points
slides.forEach(() => {
	let dot = document.createElement("div");
	dotContainer.appendChild(dot);
	dot.classList.add("dot");
})

// J'applique mon écouteur sur mon element
after_button.addEventListener("click", () => {
	index = index + 1
	if(index === slides.length){
		index = 0
	}

	document.querySelector(".dot_selected").classList.remove("dot_selected")
	updateSlide();
	updateDots();
})

before_button.addEventListener("click", () => {
	index = index - 1
	if(index === -1){
		index = slides.length -1;
	}

	let aDiv = document.querySelector(".dot_selected")
	aDiv.classList.remove("dot_selected")
	updateSlide();
	updateDots();
})

// Je définis mes fonctions
function updateSlide(){
	// Je change la source de l'image
	changeImage.src = pathString + slides[index].image

	// Je change la légende 
	changeTag.innerHTML = slides[index].tagLine
}

function updateDots(){
	// Je vais à l'enfant/dot suivant
	const dots = document.querySelectorAll(".dot")
	dots[index].classList.add("dot_selected")
}

updateDots();
updateSlide();

// Navigation : console.log(slides[1].tagLine) ou console.log(slides[0])
//(les enfants(div .dot) de mon parent(div .dots))
// parcours ce tableau et pour chaque objet que tu compte, creer un bullet point