
$('.imgContainer').click(function() {
	window.location.href='buyerPage.html';	
	// store the img source in local storage
	var img_src = $(this).find('img').attr('src');
	console.log(img_src);
	localStorage.setItem('img_src', img_src);
})



$('.close').click(function(){
    $(this).parent().remove();
})