window.onload = function(){
    
  var gameName = {
      beginning: {
          text:"",
          choices: ""
      },
  };
  
  var variableContainer = ["gameName"];
  var startButton = document.getElementById("startButton");
  var textAndDialogue = document.getElementById("amnesia");
  var choiceButtons = document.getElementById("choiceButtons");
  var resetButton = document.getElementById("resetButton");
  var amnesiaWasHerName = document.getElementById("sheHadBeautifulEyes")
  var andEveryWordSheSaid = document.getElementById("itWasALittleSurprise")

  function buttonCreator(btnText, choices) {
var button = document.createElement("button");
button.innerHTML = buttonText;
choiceButtons.appendChild(button);
  }


  
}

//   button.addEventListener("click", function(){//when button that is generated is clicked, add choice to playerChoices and run createStory
//     playerChoices.push(choice);
//     createStory();
//     window.scrollTo({ top: 0, behavior: 'smooth' });//shamelessly stolen from stackOverflow, scrolls to top smoothly on button press
//   });
// }

// function addStory(text){//changes playArea text to choice
//   playArea.innerHTML = text;
// }

// function createStory(text){
//   let pageNow = playerChoices[playerChoices.length - 1];
//   playArea.innerHTML = "";//empties play area
//   buttonArea.innerHTML = "";//empties button area
//   for(let idea of playerChoices){//creates variable idea and uses with array playerChoices
//     addStory(story[idea].text)//based on button clicked, run addStory with text
//   }
//   for (let idea of story[pageNow].options){//creates variable idea and used with story.options
//     createButton(idea[1],idea[0]);//creates buttons using options text
//   }

// }

// restart.addEventListener("click", function(){
//   location.reload();//reloads page on click, resetting game
// });

// restart.style.display = 'none';//hides restart button

// x.addEventListener("click", function(){//on start button click
//   createStory(story.opener.text);//run createStory
//   restart.style.display = '';//unhide restart button
// });

// }//end of window.onload, do NOT put any JS after this
