var slideIndex = 1;
showSlidesCircle(slideIndex);

// Next/previous controls
function plusSlidesCircle(n) {
  showSlidesCircle(slideIndex += n);
}

// Thumbnail image controls
function currentSlideCircle(n) {
  showSlidesCircle(slideIndex = n);
}

function showSlidesCircle(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesCircle");
  var dots = document.getElementsByClassName("dotCircle");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


showSlides1(slideIndex);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex += n);
}

// Thumbnail image controls
function currentSlideCircle1(n) {
  showSlides1(slideIndex = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
var dots = document.getElementsByClassName("dotCircle1");

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
 for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
 dots[slideIndex-1].className += " active";
}


showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlideCircle2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
var dots = document.getElementsByClassName("dotCircle2");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
 for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block"; 
dots[slideIndex-1].className += " active";
}