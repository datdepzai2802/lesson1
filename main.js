var iconbar = document.getElementById("iconbar");
var close = document.getElementById("close");
var navbar = document.getElementById("navbar");

function navOpen() {
  navbar.style.width = "50%";
  navbar.style.display = "block";
}
function navClose() {
  navbar.style.width = 0;
  navbar.style.display = "none";
}

const arrImg = [
  "img/slide-tieng-han-pc.jpg",
  "img/slide-tieng-trung-pc.jpg",
  "img/slide-tieng-anh-pc.jpg",
];
let slides = document.querySelector(".slideImg");

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}