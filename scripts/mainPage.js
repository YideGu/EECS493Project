
$('.close').click(function(){
    $(this).parent().remove();
})

function onSignIn(googleUser){
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
	})
}
