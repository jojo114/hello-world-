const open = document.getElementById('open');

const close = document.getElementById('close');

const side = document.querySelector('.sidenav');



open.addEventListener('click',function(){
		side.style.width = "50%";
	});



close.addEventListener('click',function(){
		side.style.width = "0";
	});