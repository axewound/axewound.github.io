$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".show1"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
                                    // страницу для поиска нужного элемента
    if(windowWidth < 576 || windowWidth > 991){
 
        elem.removeClass('show');
    }

    else{
    
     elem.addClass('show');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });
});