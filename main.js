/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }

    // new JS, trying to make a play butotn
  var x = document.getElementById("beeg");//start button 
  var restart = document.getElementById("restart");//restart button
  var playArea = document.getElementById("playArea");//refers to play area
  var buttonArea = document.getElementById("buttonArea");//refers to button area
  
  function createButton(btnText, choice) {
	var button = document.createElement("button"); //creates button
	button.innerHTML = btnText;//changes button text according to "options" in array
	buttonArea.appendChild(button);//adds button that has changed name
  
	button.addEventListener("click", function(){//when button that is generated is clicked, add choice to playerChoices and run createStory
	  playerChoices.push(choice);
	  createStory();
	  window.scrollTo({ top: 0, behavior: 'smooth' });//shamelessly stolen from stackOverflow, scrolls to top smoothly on button press
	});
  }
  
  function addStory(text){//changes playArea text to choice
	playArea.innerHTML = text;
  }
  
  function createStory(text){
	let pageNow = playerChoices[playerChoices.length - 1];
	playArea.innerHTML = "";//empties play area
	buttonArea.innerHTML = "";//empties button area
	for(let idea of playerChoices){//creates variable idea and uses with array playerChoices
	  addStory(story[idea].text)//based on button clicked, run addStory with text
	}
  
  }

  x.addEventListener("click", function(){//on start button click
	createStory(story.opener.text);//run createStory
  });