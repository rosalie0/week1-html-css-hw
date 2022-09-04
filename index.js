// Logic
$(document).ready(function () {
	const calculatedHeight = $('nav').outerHeight();
	$('.header-margin').css({
		height: calculatedHeight + 'px',
	});
});

const applicationButton = document.getElementById('application-button');
applicationButton.addEventListener('click', () => {
	const textElement = document.getElementById('application-status-text');
	if (textElement.innerHTML.includes('CLOSED')) {
		alert('Sorry!\n Applications are currently closed.');
	}
});
