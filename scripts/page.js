const maximumDescriptionLength = 90;


sessionStorage.setItem("reload", false);
sessionStorage.setItem("greeting_exsit", false);
var email = "Anonynous email address"
var reload = sessionStorage.getItem("reload");
var greeting_exsit = sessionStorage.getItem("greeting_exsit");



$(document).ready( function() {
	// startTime();
    var title = $("#title");
    var price = $("#price");
    var description = $("#description");
	var delivery = $("#delivery");
	var contactInformation = $("#contactInformation");
    var addButton = $("#addButton");
    var PublishButton = $("#PublishButton");
    var CancelButton = $("#CancelButton");
    var DeleteButton = $("#DeleteButton");
    var removeButton = $("#removeButton");
	var operationZone = $("#flexbox");
	var removeNumber = $("#removeNumber");
	var imagestring = $("#image");
	var toggle = $("#toggle");
	var itemIndex = 9;
	var itemButton;


	title.hide();
	price.hide();
	description.hide();
	DeleteButton.hide();
	delivery.hide();
	contactInformation.hide();
	imagestring.hide();
	removeNumber.hide();
	PublishButton.hide();
	CancelButton.hide();



	// Use the template
	$("#myTemplate").tmpl(myData).appendTo("#flexbox");

	$('.imgContainer').click(function() {
		if ($("#addWindow").css("display") == "none") {
			alert("Please sign in to see more information!");
		}

		else {
			// redirect to the buyer page
			window.location.href='buyerPage.html';

			// store the item info in local storage
			var img_src = $(this).find('img').attr('src');
			localStorage.setItem('img_src', img_src);

			var item_name = $(this).find('h1').text();
			localStorage.setItem('item_name', item_name);

			var item_price = $(this).find('.priceClass').eq(0).text();
			localStorage.setItem('item_price', item_price);
			console.log(item_price);

			var item_description = $(this).find('.longDescription').text();
			localStorage.setItem('item_description', item_description);
			console.log(item_description);

			var delivery_option = $(this).find('.deliveryClass').text();
			localStorage.setItem('delivery_option', delivery_option);
			console.log(delivery_option);

			var seller_information = $(this).find('.sellerClass').text();
			localStorage.setItem('seller_information', seller_information);
			console.log(seller_information);
		}
	})


	addButton.click(function(){
		PublishButton.show();
		CancelButton.show();
		DeleteButton.hide();
		imagestring.show();
		addButton.hide();
		removeButton.hide();

		title.show();
		price.show();
		description.show();
		delivery.show();
		contactInformation.show();
	});

	removeButton.click(function(){
		PublishButton.hide();
		CancelButton.show();
		DeleteButton.show();
		addButton.hide();
		removeButton.hide();

		removeNumber.show();
	});

	CancelButton.click(function(){
		PublishButton.hide();
		CancelButton.hide();
		DeleteButton.hide();
		imagestring.hide();
		addButton.show();
		removeButton.show();


		title.hide();
		price.hide();
		description.hide();
		delivery.hide();
		contactInformation.hide();
		removeNumber.hide();
	});

	DeleteButton.click(function(){
		PublishButton.hide();
		CancelButton.hide();
		DeleteButton.hide();
		imagestring.hide();
		addButton.show();
		removeButton.show();

		temp= "#item-" + removeNumber.val();
		temp = $("#item-" + removeNumber.val());
		temp.remove();

		title.hide();
		price.hide();
		description.hide();
		delivery.hide();
		contactInformation.hide();
		removeNumber.hide();
	});

	PublishButton.click(function(){
		PublishButton.hide();
		CancelButton.hide();
		DeleteButton.hide();
		imagestring.hide();
		addButton.show();
		removeButton.show()

		title.hide();
		price.hide();
		description.hide();
		delivery.hide();
		contactInformation.hide();
		var result = createItemDivString(itemIndex, $("#imageString").val(),title.val(),price.val(),description.val(),delivery.val());
		operationZone.append(result);
		$("#item-"+itemIndex).append(createItemDivString1(itemIndex++, $("#imageString").val(),title.val(),price.val(),description.val(),delivery.val()));
	});

	$('#rm').click(function(){
		$(this).parent().remove();
	})

    console.log("Ready!");
    $('#SearchButton').click(()=> {
        console.log("clicked!")
        filterItems();
    });

    $('.descriptionClass').each(function(){
        // console("runned");
        this.innerText = truncateText(this, maximumDescriptionLength);
	})


    $('#Search').keydown(function(event){
          if(event.which == 13) filterItems();
    })
});

  setInterval( function() {

	$('.close').click(function(){
    $(this).parent().remove();
})
  }, 50);

  setInterval(function(){
      if (reload && !greeting_exsit) {
        email = localStorage.getItem("email");
        var name = localStorage.getItem("User_name");
        var greeting = "<h>Welcome " + name + "!</h>";
      	$(".greeting-msg").append(greeting);
        sessionStorage.setItem("greeting_exsit", true);
      }
  }, 1000);

function createItemDivString(itemIndex, imageString, header, p1, p2, p3){
  imageString = imageString.split("\\").pop();
  return "";

}

function createItemDivString1(itemIndex, imageString, header, p1, p2, p3){

	imageString = imageString.split("\\").pop();
	var newData = [
		{
			Thumbnail: "images\\" + imageString,
			itemTitle: header, price: p1,
			description: p2,
			delivery: p3,
			seller: email
		}]
	$("#myTemplate").tmpl(newData).appendTo("#flexbox");
	$(document).on('click','.imgContainer',function() {
		if ($("#addWindow").css("display") == "none") {
			alert("Please sign in to see more information!");
		}

		else {
			// redirect to the buyer page
			window.location.href='buyerPage.html';

			// store the item info in local storage
			var img_src = $(this).find('img').attr('src');
			localStorage.setItem('img_src', img_src);

			var item_name = $(this).find('h1').text();
			localStorage.setItem('item_name', item_name);

			var item_price = $(this).find('.priceClass').eq(0).text();
			localStorage.setItem('item_price', item_price);
			console.log(item_price);

			var item_description = $(this).find('.longDescription').text();
			localStorage.setItem('item_description', item_description);
			console.log(item_description);

			var delivery_option = $(this).find('.deliveryClass').text();
			localStorage.setItem('delivery_option', delivery_option);
			console.log(delivery_option);

			var seller_information = $(this).find('.sellerClass').text();
			localStorage.setItem('seller_information', seller_information);
			console.log(seller_information);
		}
	});
	// myData = Object.assign({}, myData, newData);
  	return "";

}

function filterItems() {
    var input = document.getElementById("Search");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('imgContainer');

    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].innerText.toLowerCase().includes(filter)) {
        nodes[i].parentElement.style.display = "inline-block";
      } else {
        nodes[i].parentElement.style.display = "none";
      }
    }
}

function truncateText(item, maxLength) {
    var truncated = item.innerText;
    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '...';
    }
    return truncated;
}
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  $('clock').val()=h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}


// function onSignIn(googleUser){
// 	var profile = googleUser.getBasicProfile();
// 	var name = profile.getGivenName();
// 	email = profile.getEmail();
//
// 	// $(".signinWindow").css("display", "none");
// 	// // $(".event").css("display", "block");
// 	// $("#addWindow").css("display", "block");
// 	// // $(".searchBox").css("display", "block");
// 	// $(".btn-danger").css("visibility", "visible");
//   window.location.href='index.html';
// }

function signIn() {
  window.location.href='loginPage.html';
  $(".signinWindow").css("display", "none");
  // $(".event").css("display", "block");
  $("#addWindow").css("display", "block");
  // $(".searchBox").css("display", "block");
  $(".btn-danger").css("visibility", "visible");
}

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function(){

		alert("You have been successfully signed out");
		// $(".event").css("display", "none");
		$("#addWindow").css("display", "none");
		// $(".searchBox").css("display", "none");
		$(".btn-danger").css("visibility", "hidden");
		$(".signinWindow").css("display", "block");
		$("h").remove();
    sessionStorage.setItem("greeting_exsit", false);
    sessionStorage.setItem("reload", false);
	})
}
