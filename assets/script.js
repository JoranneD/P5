// let arrows = document.querySelectorAll("img.arrow")
// console.log(arrows)

/* SLIDER BUTTONS */
let before_button = document.querySelector("img.arrow_left");
before_button.addEventListener("click", () => {
	alert("Vous avez cliqué sur le bouton precedent")
})

let after_button = document.querySelector("img.arrow_right")
after_button.addEventListener("click", () => {
	alert("Vous avez cliqué sur le bouton suivant")
})

// let dotSlide = document.getElementById("slide").src="./assets/images/slideshow/slide2.jpg";

// imageSlide.setAttribute("src", "./assets/images/slideshow/slide2.jpg")

// "./assets/images/slideshow/slide"+slides[2]+".jpg"

let changeImage = document.querySelector(".banner-img");
changeImage.src ="./assets/images/slideshow/slide2.jpg"
console.log(changeImage)


let changeTagline = document.querySelector("#banner p");

console.log(changeTagline)

let changeDot = document.getElementsByClassName("dot");
console.log(changeDot)

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

//console.log(slides[3])

for (let i = 0; i < slides.length; i++) {
    console.log(slides[i]);
}

