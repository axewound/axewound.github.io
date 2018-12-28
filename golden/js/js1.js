
    var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  if (n > x.length) {slideIndex3 = 1} 
  if (n < 1) {slideIndex3 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex3-1].style.display = "block"; 
}


    var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) {slideIndex1 = 1} 
  if (n < 1) {slideIndex1 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex1-1].style.display = "block"; 
}

    var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndex2 = 1} 
  if (n < 1) {slideIndex2 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex2-1].style.display = "block"; 
}