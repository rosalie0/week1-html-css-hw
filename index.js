// Logic for header-margin height on reload
$(document).ready(function () {
	const calculatedHeight = $('nav').outerHeight();
	$('.header-margin').css({
		height: calculatedHeight + 'px',
	});
});

// Dark / Light mode toggling
const colormodeDiv = document.getElementById('colormode-div');
const allSections = document.getElementsByTagName('section');
const pageTitle = document.getElementsByTagName('h1')[0];

colormodeDiv.addEventListener('click', (event) => {
	const elementsToGetDarkBackground = [...allSections];
	elementsToGetDarkBackground.push(pageTitle);

	elementsToGetDarkBackground.forEach((elem) => {
		elem.classList.toggle('darkMode');
	});

	// Toggle the icon
	if (event.target.src.includes('sun')) {
		event.target.src = './images/moon.svg';
	} else {
		event.target.src = './images/sun.svg';
	}
});

// Application CLOSED alert
const applicationButton = document.getElementById('application-button');
applicationButton.addEventListener('click', () => {
	const textElement = document.getElementById('application-status-text');
	if (textElement.innerHTML.includes('CLOSED')) {
		alert('Sorry!\n Applications are currently closed.');
	}
});
