// Logic for header-margin height on reload
$(document).ready(function () {
	const calculatedHeight = $('nav').outerHeight();
	$('.header-margin').css({
		height: calculatedHeight + 'px',
	});
});

// Dark / Light mode toggling

// Application CLOSED alert
const applicationButton = document.getElementById('application-button');
applicationButton.addEventListener('click', () => {
	const textElement = document.getElementById('application-status-text');
	if (textElement.innerHTML.includes('CLOSED')) {
		alert('Sorry!\n Applications are currently closed.');
	}
});
