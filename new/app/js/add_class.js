// section third add active class
$(".s3 .tab_item").not(":first").hide();
$(".s3 .wrapper .tab").click(function() {
  $(this).find('img').addClass('active_rotate');
  $(".s3 .wrapper .tab").removeClass("active").find('img').removeClass('active_rotate').eq($(this).addClass("active").find('img').addClass('active_rotate').index());
  $(".s3 .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active").find('img').addClass('active_rotate');



// section fourth add active class
$(".s4 .tab_item").not(":first").hide();
$(".s4 .wrapper .tab").click(function() {
  $(".s4 .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(" .s4 .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");



