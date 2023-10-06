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
//console.log(slides[1].tagLine)
//console.log(slides[0])

// Je creer les enfants(div .dot) de mon parent(div .dots)
let dotContainer = document.querySelector(".dots")
for (let dot_counter = 0; dot_counter < slides.length; dot_counter++) {
	let dot = document.createElement("div");
	dotContainer.appendChild(dot);
	dot.classList.add("dot");
	//console.log(slides[dot_counter])
}

// Je definis mes variables
let img_index = 0;
let tag_index = 0;
let dot_index = 0 ;
let pathString = "./assets/images/slideshow/";
let dotSelectionOn = dotContainer.firstElementChild.classList.add("dot_selected");


// Je définis mes fonctions
function changeSlideAfter(){
	// Je change la source de l'image
	let changeImage = document.querySelector(".banner-img");
	img_index = img_index + 1;
	changeImage.src = pathString + slides[img_index].image;

	// Je change la légende 
	let changeTag = document.querySelector("#banner p");
	tag_index = tag_index + 1;
	changeTag.innerHTML = slides[tag_index].tagLine;
	
	// Je vais à l'enfant/dot suivant
	let changeDot = document.querySelector(".dot");
	dot_index = dot_index + 1;
	changeDot = dotContainer.children[dot_index];
	
	// J'ajoute la classe selected au dot actuel et l'enleve au precedent
	let dotSelectionOn = dotContainer.children[dot_index].classList.add("dot_selected");
	let dotSelectionOff = dotContainer.children[dot_index - 1].classList.remove("dot_selected");
	//console.log(dot_index)

	//TEST 2 -----------------------------------------------
	// Si (on est à la dernière image) (et) que l’on (clique à droite) alors : on affiche la première image

	let slidesLength = slides.length;
	let firstSlide = slides[0].image;
	let lastSlide = slides[slidesLength - 1].image;
	let endSlider = slides.length - 1;

	if (slides[img_index].image === lastSlide){
		for (let img_index = 0; img_index === slides.length; img_index--) {
		slides[img_index].image = firstSlide;
		//changeImage.src = pathString + slides[img_index].image;
		}
	}


	//console.log(img_index)
	//console.log(firstSlide)
	console.log(slides[img_index].image)
	console.log(lastSlide)
	
	//console.log(slides.length)
	
	// if (slides[img_index].image === lastSlide){
	// 	for (let img_index = 0; img_index === slides.length; img_index--) {
	// 	slides[img_index].image = firstSlide;
	// 	//changeImage.src = pathString + slides[img_index].image;
	// 	 }
	// }
//changeImage.src = pathString + slides[0].image;
//&& document.querySelector("img.arrow_right").click())
//for (let i = 0; i < slides.length; i++) {

// let endSlider = slides.length - 1;
// 	if (img_index === endSlider && tag_index === endSlider)  {
// 		img_index = 0;
// 		tag_index = 0;
// 		//changeImage.src = pathString + slides[img_index].image;
// 	}

}

function changeSlideBefore(){
	let changeImage = document.querySelector(".banner-img");
	img_index = img_index - 1;
	changeImage.src = pathString + slides[img_index].image;

	let changeTag = document.querySelector("#banner p");
	tag_index = tag_index - 1;
	changeTag.innerHTML = slides[tag_index].tagLine;

	let changeDot = document.querySelector(".dot");
	dot_index = dot_index - 1;
	changeDot = dotContainer.children[dot_index];

	let dotSelectionOn = dotContainer.children[dot_index].classList.add("dot_selected");
	let dotSelectionOff = dotContainer.children[dot_index + 1].classList.remove("dot_selected");
	console.log(dot_index)
}


// J'applique mon écouteur sur mon element et lui atttribut une(ou plusieurs) fonction.
let after_button = document.querySelector("img.arrow_right");
after_button.addEventListener("click", () => {
	changeSlideAfter();
})

let before_button = document.querySelector("img.arrow_left")
before_button.addEventListener("click", () => {
	changeSlideBefore()
})











// IDEES

//AUTRE -----------------------------------------------
	//let dotPathString = "dotContainer.children[";
	//let dot_index = dotContainer.children[0];

	//let dot_index = dotContainer.firstElementChild;

	//let changeDot = document.querySelector(".dot");
	//console.log(dotContainer.children);
	//console.log(dotContainer.childElementCount);
	//console.log(dotContainer.length); sert à rien
	//console.log(dotContainer.firstChild);
	//console.log(dotContainer.firstElementChild);
	//console.log(dotContainer.childNodes);
	//console.log(dotContainer.firstElementChild.nextElementSibling);
	//console.log(dotContainer.children[0])
	//console.log(changeDot)

	//dotSelected = dotContainer.firstElementChild.classList.add("dot_selected");
	//let changeDotSelected = dotContainer.firstElementChild;
	//dotSelected = dotContainer.firstElementChild.classList.remove("dot_selected") && dotContainer.nextElementSibling.classList.add("dot_selected");

//let dot_index = dotContainer.firstElementChild.classList.add("dot_selected");
//let test = dotContainer.firstElementChild.nextElementSibling;

//console.log(test)

// on va à l'enfant suivant
	// let dot_index = dotContainer.firstElementChild.nextElementSibling;
	// console.log(dot_index)

	// let dot_indexx = dotContainer.children[1]
	// console.log(dot_indexx)

	// changedot.innerHTML = slides[dot_index].dotLine;

	//si slides[0] == dotContainer.children[0] alors let dotContainer.firstElementChild.classList.add(".dot_selected");
	//sinon si 

	// let dotContainer = document.querySelector(".dots");
	// let changeDot = 
	// dot_index = dotContainer.length + 1;
	// changedot.innerHTML = slides[dot_index].dotLine;


	// si dotContainer.firstchild == slides[0]  alors dotContainer.firstchild prend la classe dot_selected
	// for (let dot of dotContainer.children) {
	// 	dot.classList.add("dot_selected");
	// 	console.log(dot.classList);
	// }
	// si 
	//childElementCount
	//console.log(dotContainer.classList);


	//let first child

//TEST -----------------------------------------------

// let changeDot = document.querySelector(".dot");
// let selectedDot = document.querySelector(".dot_selected");

// 	if (selectedDot.next('dots').length) {
// 		selectedDot.removeClass('dot_selected').next('dot').addClass('dot_selected');
// 	  } else {
// 		selectedDot.removeClass('dot-selected');
// 		$('.dots').find('dot').first().addClass('dot_selected');
// 	}

// 	//selectedDot.classList.add("dot_selected");
// 	console.log(changeDot)


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