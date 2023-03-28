// Wait for the page to load before showing the content
window.addEventListener('load', function() {
	// Get a reference to the preloader element
	var preimg = document.querySelector('.preloader');
	// Set a timeout to hide the preloader after 2 seconds (2000 milliseconds)
	setTimeout(function() {
		// Hide the preloader
		preimg.style.display = 'none';
		// Show the content
		var content = document.querySelector('#hero');
		content.style.display = 'block';
	}, 2000);
});
