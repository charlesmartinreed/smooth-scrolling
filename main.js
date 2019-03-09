// OPTION 2 - SMOOTH SCROLL WITH JQUERY
// BONUS for using this method? Better cross-platform ability.
$('.nav-bar a').on('click', function(e) {
	//check for a hash
	if(this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;

		// target body
		$('html, body').animate({
			// scroll down from the top, over 800ms
			scrollTop: $(hash).offset().top
		}, 400)
	}
});
