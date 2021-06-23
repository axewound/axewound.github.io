      $('.left-Click').on('click', function (e) {
        e.preventDefault();


        $('.nav').slick('slickPrev');
      });

      $('.right-click').on('click', function (e) {
        e.preventDefault();


        $('.nav').slick('slickNext');
      });


       var slickPrimarySecondary = {
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   infinite: true
 };
 var slickNavigator = {
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: '.nav',
   speed: 500,
   dots: true,
   focusOnSelect:true,

 };

 $('.primary').slick(slickPrimarySecondary);
 $('.secondary').slick(slickPrimarySecondary);