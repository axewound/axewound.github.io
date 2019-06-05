$(".navbar .nav-item").click(function() {
  $(".navbar .nav-item").removeClass("nav-active").eq($(this).index()).addClass("nav-active");
}).eq(0).addClass("nav-active");



