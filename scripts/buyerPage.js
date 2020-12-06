$(document).ready(function() {
	// get the img source from the local storage
	var item_name = localStorage.getItem('item_name');
	var img_src = localStorage.getItem('img_src');
	var item_price = localStorage.getItem('item_price');
	var item_description = localStorage.getItem('item_description');
	var delivery_option = localStorage.getItem('delivery_option');
	var seller_information = localStorage.getItem('seller_information');
	seller_information = seller_information.split(": ").pop();
	
	console.log('item name:', item_name);
	console.log('item image source:',img_src);
	
	$('#item-img').attr('src', img_src);
	$('#item-name').text(item_name);
	$('#item-price').text(item_price);
	$('#item-description').text(item_description);
	$('#delivery-option').text(delivery_option);
	$('#seller-information').text(seller_information);
	$("#seller-information").attr("href", "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=" + seller_information);
	
//	$('#header').load('index.html header');
})