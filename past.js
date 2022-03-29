window.onload = function(){

    var story = {
    
    opener: {
      text: "oh my god this finally works im so happy jesus christ", 
      options: [["FordF150", "Ford F150"], ["leave", "Leave the Game"], ["home", "Call it Quits"], ["helpWoman", "Help the Old Lady"]]
    },
    
    leave: {
      text: "This isn’t Death Stranding! This is just some generic RPG! You pull your Full Dive™ VR headset off your head in frustration.\n\nYou delete the game off of your PC. That’s the last time you torrent some random 200 gigabyte .exe file.",
    },
    
    FordF150: {
      text: `You bolt off in the direction of the guild hall. Old ladies can wait—the world needs saving.\n\nAs you arrive at the guild hall, you meet a few greeters leading a pack of adventurers into the crowded halls of the building. The sound of a hundred voices pierce your ears as you walk into the main hall.\n\nYou crawl through a sea of people to reach the front of the crowd where a burly, rugged man stands behind an elevated podium. You assume that the man is the leader of the guild hall, a retired adventurer with years of experience under his belt.\n\n“SILENCE!” the man yells.\n\nThe guild hall turns silent. He clears his throat and continues to speak.\n\n“Welcome everybody here. As many of you know, there has been an issue with a demon king at the top of Mount Ecathia. It has been terrorizing the realm and I am afraid it will do a full-scale attack soon. So, I am requesting the help of adventurers around the country slay the demon before any future harm is done. You can sign up for the quest at one of the guild tables where a worker will qualify you for the quest. That is all.”`,
      options: [["guildAccept", "Sign Up"], ["guildNo", "Don't Sign Up"], ["guildDont", "Decide that Guilds are Dumb"]],
    },
    
    guildAccept:{
      text: `You walk up to the quest giver and sign the papers to officially receive the quest from the guild. The guild worker then asks you to do a strength test. You have to lift a 250kg bag from the ground and hold it for 5 minutes. You try to lift the bag but it does not even come to an inch off the ground. You have failed the test and you cannot continue the quest.`,
      options: [["guildMan", "Exit the Guild Hall"]],
    },
    

    };
    
    var playerChoices = ["opener"];
    
    
    var x = document.getElementById("beeg");
    var restart = document.getElementById("restart");
    var playArea = document.getElementById("playArea");
    var buttonArea = document.getElementById("buttonArea");
    
    function createButton(btnText, choice) {
      var button = document.createElement("button"); 
      button.innerHTML = btnText;
      buttonArea.appendChild(button);
    
      button.addEventListener("click", function(){
        playerChoices.push(choice);
        createStory();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    
    function addStory(text){
      playArea.innerHTML = text;
    }
    
    function createStory(text){
      let pageNow = playerChoices[playerChoices.length - 1];
      playArea.innerHTML = "";
      buttonArea.innerHTML = "";
      for(let idea of playerChoices){
        addStory(story[idea].text)
      }
      for (let idea of story[pageNow].options){
        createButton(idea[1],idea[0]);
      }
    
    }
    
    restart.addEventListener("click", function(){
      location.reload();
    });
    
    restart.style.display = 'none';
    
    x.addEventListener("click", function(){
      createStory(story.opener.text);
      restart.style.display = '';
    });
    
    }
    