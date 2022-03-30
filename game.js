window.onload = function(){
    
  var gameName = {
      beginning: {
          text:"test",
          choices: [["nix_intro", "Play As Nixon"], ["jfk_intro", "Play as JFK"], ["lbj_intro", "Play as LBJ"]],
      },
  };
  
  var variableContainer = ["gameName"];
  var startButton = document.getElementById("startButton");
  var textAndDialogue = document.getElementById("amnesia");
  var choiceButtons = document.getElementById("choiceButtons");
  var resetButton = document.getElementById("resetButton");

  function buttonCreator(btnText, choices) {
var button = document.createElement("button");
button.innerHTML = buttonText;
choiceButtons.appendChild(button);
  }

button.addEventListener("click", function() {
playerChoices.push(choice);
createStory();
window.scrollTo({ top: 0, behavior: 'smooth'});
})
 
function addStory(text){
  playArea.innerHTML = text;
}

function createStory(text){
  let pageNow = playerChoices[playerChoices.length - 1];
  textAndDialogue.innerHTML = "";
  choiceButtons.innerHTML = "";
  for(let idea of playerChoices){
    addStory(story[idea].text)
  }
  for (let idea of story[pageNow].options){
    createButton(idea[1],idea[0]);
  }
}
restart.addEventListener("click", function(){
  location.reload();
})


restart.style.display ='none';

x.addEventListener("click", function(){
  createStory(story.opener.text);
  restart.style.display = '';
});


}