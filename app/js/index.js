var current_active, next_active, previous_active; 

$(".button").click(function(event){
	event.preventDefault();
	
	current_active = $(this).parent();
	next_active = $(this).parent().next();
	previous_active = $(this).parent().prev();

	$(".steps li").eq($(".form-wrapper_section").index(next_active)).addClass("active");
	$(".steps li").eq($(".form-wrapper_section").index(previous_active)+1).addClass("active-min");
	
	next_active.show(); 
	current_active.animate({opacity: 0}, {
	
		duration: 0, 
		complete: function(){
			current_active.hide();
		}, 
	});
});

