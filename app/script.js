var $status = $('.pagingInfo');
var $slickElement = $('.slideshow');

 
$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text("0"+i + ' /   	' + "0" + slick.slideCount);
});

$slickElement.slick({
  autoplay: false,
  dots: false,
   prevArrow: $('#btn-prev'),
      nextArrow:$("#btn-next")

});
