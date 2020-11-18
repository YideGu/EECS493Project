$(document).ready(function() {
	// get the img source from the local storage
	var img_src = localStorage.getItem('img_src');
	console.log(img_src);
	
	$('#item-img').attr('src', img_src);
})