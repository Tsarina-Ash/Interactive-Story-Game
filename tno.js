window.onload = function(){//encases all code, makes sure all JS is loaded before any code can run

    var story = {//story object
    
    opener: {//properties in object, containing text and options
      text: "1962 Nazi Germany has most of Europe under its control, Japan has its respective empire in Asia controlling a portion of the continent and some ex-American territories such as the Philippines, Hawaii, a port in LA and a port in San Francisco. Italy has created its Mediterranean dream with an alliance between Turkey, the Iberian Union and it’s holdings across the Mediterranean. Russia has been shattered in dozens if not hundreds of warlords with many prominent ones remaining and bidingfor control of their respective territories. With the three ex-allies (Japan, Germany and Italy) being powerhouses they seem to be on top of the world however there are cracks being formed everywhere. Germany’s economic failures of the 50’s and its aging fuher have led to many of his previous loyal commanders fighting over the role of fuhrer while he’s still alive. Germany’s colonies and the SS have been difficult for the federal government to control due to their huge size and the aging administration. Due to this the United States has set up its own alliance of countries still free from Japan and Germany, the Organization of Free Nations (OFN for short).", 
      options: [["nix", "Play As Nixon"], ["jfk", "Play as JFK"], ["lbj", "Play as LBJ"]]
    },
    
    nix: {
      text: `Nixon was born into a poor family of Quakers in a small town in Southern California. He graduated from Duke Law School in 1937, practiced law in California, then moved with his wife Pat to Washington in 1942 to work for the federal government. After active duty in the Naval Reserve during World War II, he was elected to the House of Representatives in 1946. His work on the Alger Hiss Case established his reputation as a leading anti-Communist, which elevated him to national prominence, and in 1950, he was elected to the Senate. Nixon was the running mate of Dwight D. Eisenhower, the Republican Party's presidential nominee in the 1952 election, and served for eight years as the vice president.`,
      options: [["guildAccept", "Sign Up"], ["guildNo", "Don't Sign Up"], ["guildDont", "Decide that Guilds are Dumb"]],
    },
    
    jfk: {
      text: `Born into the prominent Kennedy family in Brookline, Massachusetts, Kennedy graduated from Harvard University in 1940 before joining the U.S. Naval Reserve the following year. During World War II, he commanded a series of PT boats in the Pacific theater. Kennedy's survival of the sinking of PT-109 and rescue of his fellow sailors made him a war hero for which he earned the Navy and Marine Corps Medal, but left him with serious injuries. After a brief stint in journalism, Kennedy represented a working-class Boston district in the U.S. House of Representatives from 1947 to 1953. He was subsequently elected to the U.S. Senate and served as the junior senator for Massachusetts from 1953 to 1960. While in the Senate, Kennedy published his book, Profiles in Courage, which won a Pulitzer Prize.`,
      options: [["guildAccept", "Sign Up"], ["guildNo", "Don't Sign Up"], ["guildDont", "Decide that Guilds are Dumb"]],
    },
    
    lbj:{
      text: `Born in a farmhouse in Stonewall, Texas, to a local political family, Johnson worked as a high school teacher and a congressional aide before winning election to the U.S. House of Representatives in 1937. He won election to the United States Senate in 1948 after narrowly winning the Democratic Party's nomination.[2] He was appointed to the position of Senate Majority Whip in 1951. He became the Senate Democratic leader in 1953 and majority leader in 1954. In 1960 Johnson ran for the Democratic nomination for president. During the convention he came into conflict with the Democratic front-runner, fellow senator John F. Kennedy. The two men compromised and the Kennedy-Johnson ticket won in the 1960 presidential election.`,
      options: [["guildMan", "Exit the Guild Hall"]],
    },
    

    };
    
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
      for (let idea of story[pageNow].options){//creates variable idea and used with story.options
        createButton(idea[1],idea[0]);//creates buttons using options text
      }
    
    }
    
    restart.addEventListener("click", function(){
      location.reload();//reloads page on click, resetting game
    });
    
    restart.style.display = 'none';//hides restart button
    
    x.addEventListener("click", function(){//on start button click
      createStory(story.opener.text);//run createStory
      restart.style.display = '';//unhide restart button
    });
    
    }//end of window.onload, do NOT put any JS after this
    