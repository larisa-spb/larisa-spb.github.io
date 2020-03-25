var close = document.getElementsByClassName('close');
var openBtn = document.getElementsByClassName('js__btn');

Array.from(close, closeButton => {
	closeButton.addEventListener('click', e => e.target.parentNode.parentNode.style.display = 'none');
});

Array.from(openBtn, openButton => {
	openButton.addEventListener('click', e => {
		let modalId = e.target.getAttribute('data-id');
		document.getElementById(modalId).style.display = 'block';
	});
});
