//Header parallax

//HOME HEADER

window.addEventListener('scroll', function (event) {
	var top = this.pageYOffset;

	var layers = document.getElementsByClassName('parallax');
	var layer, speed, yPos;
	for (var i = 0; i < layers.length; i++) {
		layer = layers[i];
		speed = layer.getAttribute('data-speed');
		var yPos = -((top * speed) / 100);
		layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
	}
});

// MOUSE TRACK
document.addEventListener('DOMContentLoaded', function () {
	// Select all elements with the class 'parallax-track'
	var moveables = document.querySelectorAll('.parallax-track');

	// Get the initial position of each '.parallax-track' element
	var initialPositions = Array.from(moveables).map(moveable => ({
		element: moveable,
		rectPosY: parseInt(window.getComputedStyle(moveable).top, 10),
		rectPosX: parseInt(window.getComputedStyle(moveable).left, 10),
	}));

	// Add mousemove event listener to the '.section-hero' element
	document.querySelector('.section-hero').addEventListener('mousemove', function (e) {
		// Calculate the center of the viewport
		var viewportCenterX = window.innerWidth / 2;
		var viewportCenterY = window.innerHeight / 2;

		// Calculate the mouse position relative to the viewport center
		var mouseX = e.pageX - viewportCenterX;
		var mouseY = e.pageY - viewportCenterY;

		initialPositions.forEach(({ element, rectPosY, rectPosX }) => {
			var elementSpeed = element.getAttribute('data-track');
			elementSpeed = elementSpeed ? parseFloat(elementSpeed) : 1; // Default to 1 if no data-speed attribute

			// Adjust element position based on mouse movement relative to viewport center
			element.style.top = rectPosY - mouseY / elementSpeed + 'px';
			element.style.left = rectPosX - mouseX / elementSpeed + 'px';
		});
	});
});
