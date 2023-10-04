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

// Je modifie mon DOM en creant une liste parent/enfants
let dotContainer = document.querySelector(".dots")
for (let dot_counter = 0; dot_counter < slides.length; dot_counter++) {
	let dot = document.createElement("div");
	dotContainer.appendChild(dot);
	dot.classList.add("dot");
	//console.log(slides[dot_counter])
}

// 1-Je definis mes variables
let pathString = "./assets/images/slideshow/";
let img_index = 0;
let tag_index = 0;
let dot_index = 0;



// Je définis mes fonctions
function changeSlideAfter(){
	let changeImage = document.querySelector(".banner-img");
	img_index = img_index + 1;
	changeImage.src = pathString + slides[img_index].image;

	let changeTag = document.querySelector("#banner p");
	tag_index = tag_index + 1;
	changeTag.innerHTML = slides[tag_index].tagLine;

	//TEST -----------------------------------------------
	
	let dotChild = document.querySelector(".dot");
	console.log(dotContainer.children);
	console.log(dotContainer.childElementCount);
	console.log(dotContainer.length);
	console.log(dotContainer.firstChild);
	console.log(dotContainer.firstElementChild);
	console.log(dotContainer.childNodes);
	console.log(dotContainer.firstElementChild.nextElementSibling);



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
})

/* BEFORE BUTTON */
let before_button = document.querySelector("img.arrow_left")
before_button.addEventListener("click", () => {
	changeSlideBefore()
})

// 2-J'applique mon écouteur et definis ma cible.










// IDEES
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