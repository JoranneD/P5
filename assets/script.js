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
//console.log(slides[1].image)


/* SLIDER BUTTONS */
// Je definis mes variables
let before_button = document.querySelector("img.arrow_left");
let path = "./assets/images/slideshow/";
let slidesImage = slides[1].image;

// Je definis mon écouteur
before_button.addEventListener("click", () => {
	let changeImage = document.querySelector(".banner-img");
	

	changeImage.src = path + slidesImage;
	
})
console.log(path)
console.log(slidesImage)
console.log(changeImage)

let after_button = document.querySelector("img.arrow_right")
after_button.addEventListener("click", () => {
	let changeImage = document.querySelector(".banner-img");
	changeImage.src ="./assets/images/slideshow/slide1.jpg"
	//console.log(changeImage)
	// alert("Vous avez cliqué sur le bouton suivant")
})





let changeTagline = document.querySelector("#banner p");


let changeDot = document.getElementsByClassName("dot");






// IDEES
// let arrows = document.querySelectorAll("img.arrow")
// console.log(arrows)

// let dotSlide = document.getElementById("slide").src="./assets/images/slideshow/slide2.jpg";

// imageSlide.setAttribute("src", "./assets/images/slideshow/slide2.jpg")

// "./assets/images/slideshow/slide"+slides[2]+".jpg"

// for (let i = 0; i < slides.length; i++) {
//     console.log(slides[i]);
// }

// alert("Vous avez cliqué sur le bouton precedent")

// for (let counter = 0; counter < slides.length; counter++) {
	// changeImage = slides[counter].image;
	// }