const maximumDescriptionLength = 200;


$(document).ready( function() {
    console.log("Ready!");
    $('#SearchButton').click(()=> {
        console.log("clicked!")
        myFunction();
    });

    $('.Description').each(function(){
        // console("runned");
        this.innerText = truncateText(this, maximumDescriptionLength);
    })  
});




function myFunction() {
    var input = document.getElementById("Search");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('imgContainer');
  
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].innerText.toLowerCase().includes(filter)) {
        nodes[i].style.display = "block";
      } else {
        nodes[i].style.display = "none";
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
//You can then call the function with something like what i have below.
// document.querySelector('p').innerText = truncateText('p', 107);
