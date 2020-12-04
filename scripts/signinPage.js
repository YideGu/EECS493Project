$(document).ready(function() {
  function onSignIn(googleUser){
  	var profile = googleUser.getBasicProfile();
  	var name = profile.getGivenName();
  	var email = profile.getEmail();
    localStorage.setItem("User_name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("reload", "true");

    window.location.href='index.html';
  }
})
