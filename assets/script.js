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
//console.log(slides[1].tagLine)



// 1-Je definis mes variables

let pathString = "./assets/images/slideshow/";
let img_index = 0;
let tag_index = 0;

// Mes fonctions
function changeSlideAfter(){
	let changeImage = document.querySelector(".banner-img");
	img_index = img_index + 1;
	changeImage.src = pathString + slides[img_index].image;

	let changeTag = document.querySelector("#banner p");
	tag_index = tag_index + 1;
	changeTag.innerHTML = slides[tag_index].tagLine;

}

function changeSlideBefore(){
	let changeImage = document.querySelector(".banner-img");
	img_index = img_index - 1;
	changeImage.src = pathString + slides[img_index].image;

	let changeTag = document.querySelector("#banner p");
	tag_index = tag_index - 1;
	changeTag.innerHTML = slides[tag_index].tagLine;
}




// 2-J'applique mon écouteur et definis ma cible.
/* AFTER BUTTON */
let after_button = document.querySelector("img.arrow_right");
after_button.addEventListener("click", () => {
	changeSlideAfter();
	changetagLine()
	
})


/* BEFORE BUTTON */
let before_button = document.querySelector("img.arrow_left")
before_button.addEventListener("click", () => {
	changeSlideBefore()
})





let changeDot = document.getElementsByClassName("dot");






// IDEES

// function changetagLine(){
// 	let changeTag = document.querySelector("#banner p");
// 	position = position + 1;
// 	changeTag.innerHTML = slides[position].tagLine;
// }


// let arrows = document.querySelectorAll("img.arrow")
// console.log(arrows)

// let dotSlide = document.getElementById("slide").src="./assets/images/slideshow/slide2.jpg";

// imageSlide.setAttribute("src", "./assets/images/slideshow/slide2.jpg")

// "./assets/images/slideshow/slide"+slides[2]+".jpg"

// for (let i = 0; i < slides.length; i++) {
//     console.log(slides[i]);
// }

// alert("Vous avez cliqué sur le bouton suivant")

// for (let counter = 0; counter < slides.length; counter++) {
// changeImage = slides[counter].image;
// }

//function changeImagePath(path,imageExtension){
//let newPath = path + imageExtension;
//}

//let imageExtension = slides[1].image;

// let pathString = "./assets/images/slideshow/slide";
// let pathNumber = 1;
// let pathExtension = ".jpg"

// 2-J'applique mon écouteur et definis ma cible.
// let after_button = document.querySelector("img.arrow_right");
// after_button.addEventListener("click", () => {
// 	let changeImage = document.querySelector(".banner-img");
// 	changeImage.src = pathString + pathNumber + pathExtension;
	
	
// 	// J'applique ma condition
// 	for (let i = 0; i < slides.length; i++) {
// 	let pathNumber = pathNumber + 1;
// 	}
	
	
// })