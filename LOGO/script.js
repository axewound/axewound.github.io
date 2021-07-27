	document.addEventListener( 'DOMContentLoaded', function () {
		new Splide( '#card-slider', {
			type   : 'loop',
			arrows     : false,
			perPage      : 1,
			autoplay     : true,
			interval     : 1000,
			autoWidth: true,
			focus    : 'center',
			perPage: 3,
			perMove: 1,

		} ).mount();
	} );










