/* load all images into array */
var detailsImage= new Array(); 
detailsImage[0]="./assets/dog1.jpg";       
detailsImage[1]="./assets/dog2.jpg";       
detailsImage[2]="./assets/dog3.jpg";       
detailsImage[3]="./assets/dog4.jpg";       
detailsImage[4]="./assets/dog5.jpg";       
detailsImage[5]="./assets/dog6.jpg";       
detailsImage[6]="./assets/dog7.jpg";       
detailsImage[7]="./assets/dog8.jpg";       
detailsImage[8]="./assets/dog9.jpg";       
detailsImage[9]="./assets/rabbit1.jpg";       
detailsImage[10]="./assets/rabbit2.jpg";       
detailsImage[11]="./assets/giraffe1.jpg";       

/* counter for what iamge number you are on */
var imageNum = 0;

/* if you click the next arrow, remove all the .selected classes from all images, then move to the next image, and place a .selected class on the next thumbnail */
/* increment image number or set it to the correct number */
/* run checkNum() panel openner and closer */
function next(){
    document.getElementsByClassName("thumbnailImage")[imageNum].classList.remove("selected");
	
    imageNum++;
	if(imageNum == 12){
		document.getElementsByClassName("thumbnailImage")[0].className  = "thumbnailImage selected";
	} else {
		document.getElementsByClassName("thumbnailImage")[imageNum].className  = "thumbnailImage selected";
	}
	
	if(imageNum == 12){
		imageNum = 0;
	}
	
    document.getElementById("detailsImg").src = detailsImage[imageNum];
	checkNum(imageNum);
}

/* if you click the previous arrow, remove all the .selected classes from all images, then move to the previous image, and place a .selected class on the previous thumbnail */
/* decrement image number or set it to the correct number */
/* run checkNum() panel openner and closer */
function previous(){
    imageNum--;
	if(imageNum < 0 ){
		document.getElementsByClassName("thumbnailImage")[0].classList.remove("selected");
		document.getElementsByClassName("thumbnailImage")[11].className  = "thumbnailImage selected";
	} else {
		document.getElementsByClassName("thumbnailImage")[(imageNum+1)].classList.remove("selected");
		document.getElementsByClassName("thumbnailImage")[imageNum].className  = "thumbnailImage selected";
	}
	
	if(imageNum < 0){
		imageNum = 11;
	}
	
    document.getElementById("detailsImg").src = detailsImage[imageNum];
	checkNum(imageNum);
}

/* get all the image elements, cycle through them and when ever one is clicked, remove all the .selected classes from all other elements */
/* then set the image source of the main slider image, then add the .selected class to the selected thumbnail */
/* run checkNum() panel openner and closer */
var elements = document.getElementsByClassName("thumbnailImage");
for (var i = 0; i < elements.length; i++) {
    (function(index){
        elements[i].onclick = function(){
			var removeClassFromAll = document.getElementsByClassName("thumbnailImage");
			var	elem = removeClassFromAll != null ? removeClassFromAll.length : 0;
			var elemNum = 0;
			
			for(elemNum; elemNum < elem; elemNum++){
				removeClassFromAll[elemNum].classList.remove("selected"); 
			}
			var newNum = index;
			imageNum = index;
			document.getElementById("detailsImg").src = detailsImage[newNum];
			document.getElementsByClassName("thumbnailImage")[imageNum].className  = "thumbnailImage selected";
		checkNum(imageNum);
        }
    })(i);
}

/* panel openner and closer */
/* also runs carousel page chapter function*/
function checkNum(imageNum) {
	if(imageNum < 9) {
	openPanel1();
	showSlide(imageNum);
	} else if(imageNum > 10) {
	openPanel3();
	} else {
	openPanel2();
	}
}

/* 3 reusable functions for openning and closing panels */
function openPanel1(){
	document.getElementById("panel-1").className  = "panel-container open-panel";
	document.getElementById("panel-2").className  = "panel-container close-panel";
	document.getElementById("panel-3").className  = "panel-container close-panel";
}

function openPanel2(){
	document.getElementById("panel-1").className  = "panel-container close-panel";
	document.getElementById("panel-2").className  = "panel-container open-panel";
	document.getElementById("panel-3").className  = "panel-container close-panel";
}

function openPanel3(){
	document.getElementById("panel-1").className  = "panel-container close-panel";
	document.getElementById("panel-2").className  = "panel-container close-panel";
	document.getElementById("panel-3").className  = "panel-container open-panel";
}

/* a function that takes an argument of slideNum which is the thumbnail number you are on. */
/* Checks the value of the thubmnail number you are on applies a class depending on that value to display the correct carousel page/slide */
/* This function is called in multiple places, from inside the HTML mark-up when you click on a page chapter dot, or as you cycle through the main image slider*/
function showSlide(slideNum){
	if(slideNum < 3) {
	document.getElementById("slide-1").className  = "body-slide open-slide";
	document.getElementById("slide-2").className  = "body-slide close-slide";
	document.getElementById("slide-3").className  = "body-slide close-slide";
	} else if(slideNum > 5) {
	document.getElementById("slide-1").className  = "body-slide close-slide";
	document.getElementById("slide-2").className  = "body-slide close-slide";
	document.getElementById("slide-3").className  = "body-slide open-slide";
	} else {
	document.getElementById("slide-1").className  = "body-slide close-slide";
	document.getElementById("slide-2").className  = "body-slide open-slide";
	document.getElementById("slide-3").className  = "body-slide close-slide";
	}
}