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

console.log(before_button)
console.log(after_button)



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

console.log(slides[3])