const maximumDescriptionLength = 180;


$(document).ready( function() {
    var title = $("#title");
    var price = $("#price");
    var description = $("#description");
    var delivery = $("#delivery");
    var addButton = $("#addButton");
    var PublishButton = $("#PublishButton");
    var CancelButton = $("#CancelButton");
	var operationZone = $("#flexbox");
	var imagestring = $("#image");
	var itemIndex = 6;
	
	title.hide();
	price.hide();
	description.hide();
	delivery.hide();
	imagestring.hide();
	PublishButton.hide();
	CancelButton.hide();
	
	addButton.click(function(){
		PublishButton.show();
		CancelButton.show();
		imagestring.show();
		addButton.hide();
		
		title.show();
		price.show();
		description.show();
		delivery.show();
	});
	
	CancelButton.click(function(){
		PublishButton.hide();
		CancelButton.hide();
		imagestring.hide();
		addButton.show();
		
		title.hide();
		price.hide();
		description.hide();
		delivery.hide();
	});
	
	PublishButton.click(function(){
		PublishButton.hide();
		CancelButton.hide();
		imagestring.hide();
		addButton.show();
		
		title.hide();
		price.hide();
		description.hide();
		delivery.hide();
		var result = createItemDivString(itemIndex++, imagestring.val(),title.val(),price.val(),description.val(),delivery.val());
		operationZone.append(result);
	});
	
    console.log("Ready!");
    $('#SearchButton').click(()=> {
        console.log("clicked!")
        myFunction();
    });

    $('.Description').each(function(){
        // console("runned");
        this.innerText = truncateText(this, maximumDescriptionLength);
    })  


    $('#Search').keydown(function(event){
          if(event.which == 13) myFunction();
    })
});

function createItemDivString(itemIndex, imageString, header, p1, p2, p3){
  return "<div id='i-" + itemIndex + "' class='imgContainer'><img src='img/" + imageString + "'/><h1>" 
			+ header + "</h1><p> Price:" + p1 + "</p><p class = 'Description'> Description:" + p2 + "</p><p> Deliver option:" + p3 + "</p></div>";
}


function myFunction() {
    var input = document.getElementById("Search");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('imgContainer');
  
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].innerText.toLowerCase().includes(filter)) {
        nodes[i].style.display = "inline-block";
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

