/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }

//     // new JS, trying to make a play butotn
//   var x = document.getElementById("beeg");//start button 
//   var restart = document.getElementById("restart");//restart button
//   var playArea = document.getElementById("playArea");//refers to play area
//   var buttonArea = document.getElementById("buttonArea");//refers to button area
  
//   function createButton(btnText, choice) {
// 	var button = document.createElement("button"); //creates button
// 	button.innerHTML = btnText;//changes button text according to "options" in array
// 	buttonArea.appendChild(button);//adds button that has changed name
  
// 	button.addEventListener("click", function(){//when button that is generated is clicked, add choice to playerChoices and run createStory
// 	  playerChoices.push(choice);
// 	  createStory();
// 	  window.scrollTo({ top: 0, behavior: 'smooth' });//shamelessly stolen from stackOverflow, scrolls to top smoothly on button press
// 	});
//   }
  
//   function addStory(text){//changes playArea text to choice
// 	playArea.innerHTML = text;
//   }
  
//   function createStory(text){
// 	let pageNow = playerChoices[playerChoices.length - 1];
// 	playArea.innerHTML = "";//empties play area
// 	buttonArea.innerHTML = "";//empties button area
// 	for(let idea of playerChoices){//creates variable idea and uses with array playerChoices
// 	  addStory(story[idea].text)//based on button clicked, run addStory with text
// 	}
  
//   }

//   x.addEventListener("click", function(){//on start button click
// 	createStory(story.opener.text);//run createStory
//   });
window.onload = function(){//encases all code, makes sure all JS is loaded before any code can run

    var story = {//story object
    
    opener: {//properties in object, containing text and options
      text: "test", 
      options: [["guild", "Go to the Guild Meeting"], ["leave", "Leave the Game"], ["home", "Call it Quits"], ["helpWoman", "Help the Old Lady"]]
    },
	   
    leave: {
		text: "This isn’t Death Stranding! This is just some generic RPG! You pull your Full Dive™ VR headset off your head in frustration.\n\nYou delete the game off of your PC. That’s the last time you torrent some random 200 gigabyte .exe file.",
	  },
	  
	  guild: {
		text: `You bolt off in the direction of the guild hall. Old ladies can wait—the world needs saving.\n\nAs you arrive at the guild hall, you meet a few greeters leading a pack of adventurers into the crowded halls of the building. The sound of a hundred voices pierce your ears as you walk into the main hall.\n\nYou crawl through a sea of people to reach the front of the crowd where a burly, rugged man stands behind an elevated podium. You assume that the man is the leader of the guild hall, a retired adventurer with years of experience under his belt.\n\n“SILENCE!” the man yells.\n\nThe guild hall turns silent. He clears his throat and continues to speak.\n\n“Welcome everybody here. As many of you know, there has been an issue with a demon king at the top of Mount Ecathia. It has been terrorizing the realm and I am afraid it will do a full-scale attack soon. So, I am requesting the help of adventurers around the country slay the demon before any future harm is done. You can sign up for the quest at one of the guild tables where a worker will qualify you for the quest. That is all.”`,
		options: [["guildAccept", "Sign Up"], ["guildNo", "Don't Sign Up"], ["guildDont", "Decide that Guilds are Dumb"]],
	  },
	  
	  guildAccept:{
		text: `You walk up to the quest giver and sign the papers to officially receive the quest from the guild. The guild worker then asks you to do a strength test. You have to lift a 250kg bag from the ground and hold it for 5 minutes. You try to lift the bag but it does not even come to an inch off the ground. You have failed the test and you cannot continue the quest.`,
		options: [["guildMan", "Exit the Guild Hall"]],
	  },
	}

    var playerChoices = ["opener"];//array containing variables
    
    
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
    
    }//end of window.onload, do NOT put any JS after this
    