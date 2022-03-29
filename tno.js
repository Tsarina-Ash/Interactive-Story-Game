window.onload = function(){

  let element = document.getElementById("dynamic-image"),
  imgElem = document.getElementById("dynamic-image");

function updateImage(source){
  imgElem.src = source
}

function republicDominican(){ 
updateImage(story[part].imgElem);}

    var story = {
    opener: {
      text: "1962 Nazi Germany has most of Europe under its control, Japan has its respective empire in Asia controlling a portion of the continent and some ex-American territories such as the Philippines, Hawaii, a port in LA and a port in San Francisco. Italy has created its Mediterranean dream with an alliance between Turkey, the Iberian Union and it’s holdings across the Mediterranean. Russia has been shattered in dozens if not hundreds of warlords with many prominent ones remaining and biding for control of their respective territories. With the three ex-allies (Japan, Germany and Italy) being powerhouses they seem to be on top of the world however there are cracks being formed everywhere. Germany’s economic failures of the 50’s and its aging fuher have led to many of his previous loyal commanders fighting over the role of fuhrer while he’s still alive. Germany’s colonies and the SS have been difficult for the federal government to control due to their huge size and the aging administration. Due to this the United States has set up its own alliance of countries still free from Japan and Germany, the Organization of Free Nations (OFN for short).", 
      options: [["nix_intro", "Play As Nixon"], ["jfk_intro", "Play as JFK"], ["lbj_intro", "Play as LBJ"]],
      imgElem: "images/TNO/TNOmap.jpg"
    },
 
//nixon    

    nix_intro: {
      text: `Nixon was born into a poor family of Quakers in a small town in Southern California. He graduated from Duke Law School in 1937, practiced law in California, then moved with his wife Pat to Washington in 1942 to work for the federal government. After active duty in the Naval Reserve during World War II, he was elected to the House of Representatives in 1946. His work on the Alger Hiss Case established his reputation as a leading anti-Communist, which elevated him to national prominence, and in 1950, he was elected to the Senate. Nixon was the running mate of Dwight D. Eisenhower, the Republican Party's presidential nominee in the 1952 election, and served for eight years as the vice president.`,
      options: [["nix_watergate_event", "Papers Stolen from Republican-Democrat Headquaters"]],
      imgElem: "images/TNO/jfk.png"
    },
    
    nix_watergate_event: {
      text: `Papers Stolen from Republican-Democrat headquarters in Washington DC confirming the President Of The United States has asked his staff and fellow government agencies to assist him in spying on his political opponents and possibly incriminating/damning evidence against the Nixon presidency linking it to possible war crimes and obstruction of justice in the United States. A speech by the president will be made soon regarding this matter.`,
      options: [["nix_resign", "Resign From Presidency"], ["nix_fight", "Fight The Rumors"]],
      imgElem: "images/TNO/Baw/watergate.jpg"
    },

    nix_resign: {
      text: `"In the past few days, however, it has become evident to me that I no longer have a strong enough political base in the Congress to justify continuing that effort. As long as there was such a base, I felt strongly that it was necessary to see the constitutional process through to its conclusion, that to do otherwise would be unfaithful to the spirit of that deliberately difficult process and a dangerously destabilizing precedent for the future."`,
      imgElem: "images/TNO/BaW/nixonspeech.jpg"
    },

    nix_fight: {
      text: `"...In recent months, members of my Administration and officials of the Committee for the Re-Election of the President including some of my closest friends and most trusted aides—have been charged with involvement in what has come to be known as the Watergate affair. These include charges of illegal activity during and preceding the 1960 Presidential election and charges that responsible officials participated in efforts to cover up that illegal activity..."`,
      options: [["nix_blame_communists", "Blame The Germans"], ["nix_cooperate", "Co-operate With Democrats"]],
     imgElem: "images/TNO/BaW/nixonspeech.jpg"
    },

    nix_blame_communists: {
      text: `"...With the logistical support of Hitler's Germany and Tojo's Japan, they launched a campaign to impose a fascist puppet government on the United States by instigating and supporting a revolution and framing the president... Inorder To destabilize the country they have released these papers however false they are, the threat from them exists..."`,
      imgElem: "images/TNO/Baw/nixonresign.jpg"
    },

    nix_cooperate: {
      text: `Letting Out A Deep Sigh, "Mister Kennedy ? What will your party take to end this parade and celebration against me ?"`,
      options: [["nix_south_african_war", "The African Adventure"]],
     imgElem: "images/TNO/Baw/nixonjfkcompromise.jpg"
    },

    nix_south_african_war: {
      text: `"After full consultation with the National Security Council, Ambassador Bunker, General Westmoreland, and my other advisors, I have concluded that the actions of the enemy in the last 10 days clearly endanger the lives of American citizens and American interests in Southern Africa and this would constitute an unacceptable risk to those who will be there after withdrawaling of 150,000 sailors, airforcemen and American citizens. This danger spurred by the German agression to expand their reach of terror, the South African nations fighting the Nazis cannot fight alone and require our assistance, if we're driven from the field we can no longer have the confidence put in our trust." You turn off the TV and pick up the phone "Justine ? give me a phone line to the CIA director now."`,
      options: [["nix_full_military_escalation", "Begin A Light Intervention"]],
     imgElem: "images/TNO/Baw/nixonstaffarmy.jpg"
    },

    nix_full_military_escalation: {
      text: `"The full escalation of military troops by deploying 7,000 marines should assist and in certain instances engage in combat against the German forces in Southern Africa and be assisted with American naval and aerial forces to prevent forces from which came from the territories to expand." *Turns Off TV* "General ? What are our current proposed operations ?" The General replies, "Nix, we have 3 main operations for you to approve, Operation Rolling Tunder, Operation Ranch Hand, Operation Jungle Run and as proposed by the CIA director Operation Angal. Which one will you Approve ?"`,
      options: [["nix_operation_ranch_hand", "Operation Ranch Hand"], ["nix_operation_rolling_thunder", "Operation Rolling Thunder"], ["nix_operation_angal", "Operation Angal"], ["nix_operation_jungle_run", "Operation Jungle Run"]],
     imgElem: "images/TNO/BaW/safmarines.jpg"
    },

    nix_operation_ranch_hand: {
      text: `"We as Americans and as the free world must take all necessary measures to repel any armed attack against the forces of the United States and to prevent further aggression by the German puppet states of Middle-Africa. Our forces must be large enough in the region to find out some solution in the region. Another 100,000 troops will be assigned and redeployed to the region. This operation, Ranch Hand it will not be a clean operation, it will not be the most flashy operation nor the most powerful one but it will prevent the most amount of American casualites as the Africans get their papers in order. We are simply there to contain the German states until the South Africans can push back by themselves."`,
      options: [["nix_watergate_resurfaced", "Begin Drafting Soldiers and Mobilizing"], ["nix_watergate_resurfaced", "Begin Withdrawling Troops"]],
     imgElem: "images/TNO/BaW/ranchhand.jpg"
    },

    nix_operation_rolling_thunder: {
      text: `"We as Americans and as the free world must take all necessary measures to repel any armed attack against the forces of the United States and to prevent further aggression by the German puppet states of Middle-Africa. Our forces must be large enough in the region to find out some solution in the region. Another 100,000 troops will be assigned and redeployed to the region and alonsides this development Rolling thunder is an operation to begin an aerial bombardment campaign enmasse targetting civilian areas with such force not seen since the second world war and will be devastating to the German's economic and political manueverability in the region and will demoralize our enemy greatly. With this the first major run will be run on Luanda hopefully devastating the Angolan's strategic capabilities."`,
      options: [["nix_watergate_resurfaced", "Begin Drafting Soldiers and Mobilizing"], ["nix_watergate_resurfaced", "Begin Withdrawling Troops"]],
     imgElem: "images/TNO/Baw/bombing.jpg"
    },

    nix_operation_angal: {
      text: `"We as Americans and as the free world must take all necessary measures to repel any armed attack against the forces of the United States and to prevent further aggression by the German puppet states of Middle-Africa. Our forces must be large enough in the region to find out some solution in the region. Another 100,000 troops will be assigned and redeployed to the region. With this new reion under attack that has not seen combat in decades a new method to warfare will be tested and trialed. Thank you that will be all for tonight."`,
      options: [["nix_watergate_resurfaced", "Begin Drafting Soldiers and Mobilizing"], ["nix_watergate_resurfaced", "Begin Withdrawling Troops"]],
      imgElem: "images/TNO/BaW/vietnamdropping.jpg"
    },

    nix_operation_jungle_run: {
      text: `"We as Americans and as the free world must take all necessary measures to repel any armed attack against the forces of the United States and to prevent further aggression by the German puppet states of Middle-Africa. Our forces must be large enough in the region to find out some solution in the region. Another 100,000 troops will be assigned and redeployed to the region. Alongsides this our staff has alternatively decided to launch multiple simotaneous invasions in many different capacities here, this will be a prolonged and expensive war hitting American's pockets deep, however it is something that must happen to contain and push back the Germans. Through this I will ask the United States congress to declare war on the German sattilite states and for the military high command to take full control with what we call Operation Jungle Run."`,
      options: [["nix_watergate_resurfaced", "Begin Drafting Soldiers and Mobilizing"]],
     imgElem: "images/TNO/BaW/ustanks.jpg"
    },

    nix_watergate_resurfaced: {
      text: `"I regret that these events took place and I do not question the right of a Senate committee to investigate charges made against the president to the extent that this is relevant to legislative duties. However, it is my constitutional responsibility to defend the integrity of this great office against false charges. Many have urged that in order to help prove the truth of what I have said, I should turn over to the special prosecutor and the Senate committee recordings of conversations that I held in my office or on my telephone. However, a much more important principle is involved in this question than what the tapes might prove about Watergate. Each day, a president of the United States is required to make difficult decisions on grave issues. It is absolutely necessary, if the president is to be able to do his job as the country expects, that he be able to talk openly and candidly with his advisers about issues and individuals. This kind of frank discussion is only possible when those who take part in it know that what they say is in strictest confidence."`,
      options: [["nix_watergate_resurfaced_resign", "Girls, pack your bags, We're going back to California..."], ["nix_watergate_resurfaced_fight", "Fight The Impeachment"]],
     imgElem: "images/TNO/BaW/nixon.jpg"
    },

    nix_watergate_resurfaced_resign: {
      text: `"In the past few days, however, it has become evident to me that I no longer have a strong enough political base in the Congress to justify continuing that effort. As long as there was such a base, I felt strongly that it was necessary to see the constitutional process through to its conclusion, that to do otherwise would be unfaithful to the spirit of that deliberately difficult process and a dangerously destabilizing precedent for the future."`,
      imgElem: "images/TNO/BaW/nixonresign.jpg"
    },

    nix_watergate_resurfaced_fight: {
      text: `"...With the logistical support of Hitler's Germany and Tojo's Japan, they launched a campaign to impose a fascist puppet government on the United States by instigating and supporting a revolution and framing the president... Inorder To destabilize the country they have released these papers however false they are, the threat from them exists..."`,
      options: [["nix_watergate_resurfaced_impeached", "Victory ?"]],
     imgElem: "images/TNO/nixonspeech.jpg"
    },

    nix_watergate_resurfaced_impeached: {
      text: `"As of noon today, President Richiard Nixon has resigned from his office, the President Of The United States. Being the first to do so since the country's inception. Being accused of wiretapping his rivals in the NPP during the 1960 Election as well as obstruction of justice for covering up the deed. The country is now in the hands of the Vice President, John F. Kennedy, being America's first Catholic president. Whether he can step out of Nixon's administration's Shadow and forge his own legacy is yet to be seen."`,
      imgElem: "images/TNO/BaW/nixon.jpg"
    },

//jfk

    jfk_intro: {
      text: `Born into the prominent Kennedy family in Brookline, Massachusetts, Kennedy graduated from Harvard University in 1940 before joining the U.S. Naval Reserve the following year. During World War II, he commanded a series of PT boats in the Pacific theater. Kennedy's survival of the sinking of PT-109 and rescue of his fellow sailors made him a war hero for which he earned the Navy and Marine Corps Medal, but left him with serious injuries. After a brief stint in journalism, Kennedy represented a working-class Boston district in the U.S. House of Representatives from 1947 to 1953. He was subsequently elected to the U.S. Senate and served as the junior senator for Massachusetts from 1953 to 1960. While in the Senate, Kennedy published his book, Profiles in Courage, which won a Pulitzer Prize.`,
      options: [["jfk_watergate_event", "Papers Stolen from Republican-Democrat Headquaters"]],
     imgElem: "images/TNO/nixon.png"
    },
  
    jfk_watergate_event: {
      text: `Papers Stolen from Republican-Democrat headquaters in Washington DC confirming the President Of The United States has asked his staff and fellow government agencies to assist him in spying on his political oppenents and possibly incriminating/damning evidence against the Nixon presidency linking it to possible warcrimes and obstruction of justice in the United States. A speech by the president will be made soon regarding this matter.`,
      options: [["jfk_discredit_pres", "Discredit The President"], ["jfk_support_pres", "Support The President"]],
      imgElem: "images/TNO/Baw/watergate.jpg"
    },

    jfk_discredit_pres: {
      text: `"I'm not satisfied, when we have over $9 billion dollars worth of food, some of it rotting even though there is a hungry world and even though 4 million Americans wait every month for a food package from the Government, which averages 5 cents a day per individual. Meanwhile The president, rather than spend tax dollars fixing this spends it on needless meddling in politics with taxpayer money."`,
      options: [["jfk_candidacy", "I think it's time America started moving again"]],
      imgElem: "images/TNO/Baw/jfkcritnix.jpg"
    },

    jfk_support_pres: {
      text: `"This is a great country, but I think it could be a greater country; and this is a powerful country but I think it could be a more powerful country. A great country cannot have the press chasing our leaders, we could be a greater country in that regard."`,
      options: [["jfk_candidacy", "I think it's time America started moving again"]],
      imgElem: "images/TNO/Baw/nixonjfkcompromise.jpg"
    },
    
    jfk_candidacy: {
      text: `"I am announcing today my candidacy for the Presidency of the United States. The Presidency is the most powerful office in the Free World. Through its leadership can come a more vital life for our people. In it are centered the hopes of the globe around us for freedom and a more secure life. For it is in the Executive Branch that the most crucial decisions of this century must be made in the next four years--how to end or alter the burdensome arms race, where Nazi gains already threaten our very existence--how to maintain freedom and order in the newly emerging nations--how to rebuild the stature of American science and education--how to prevent the collapse of our farm economy and the decay of our cities--how to achieve, without further inflation or unemployment, expanded economic growth benefiting all Americans--and how to give direction to our traditional moral purpose, awakening every American to the dangers and opportunities that confront us..."`,
      options: [["jfk_support_impeachment", "Endorse Impeachment"], ["jfk_dont_support_impeachment", "Speak Out Against Impeachment"]],
      imgElem: "images/TNO/Baw/jfkspeech.jpg"
    },
    
    jfk_support_impeachment: {
      text: `"President Nixon, while not having been the best moral character nor a president that is for everyone, for the people has forgotten that while in the most important office in the world he is not immune to the law and he must be made aware of this fact. Through this we will send him a message he wont forget anytime soon."`,
      options: [["jfk_lobby_for_war_effort", "Begin Lobbying For The War Effort"], ["jfk_saf_ignore_war", "Crtiticize Military Intervention In South Africa"]],
      imgElem: "images/TNO/Baw/jfkcongress.jpg"
    },

    jfk_dont_support_impeachment: {
      text: `"President Nixon, while not having been the best moral character nor a president that is for everyone, for the people has forgotten that while in the most important office in the world he is not immune to the law and he must be made aware of this fact. Through this we will send him a message he wont forget anytime soon."`,
      options: [["jfk_lobby_for_war_effort", "Begin Lobbying For The War Effort"], ["jfk_saf_ignore_war", "Crtiticize Military Intervention In South Africa"]],
      imgElem: "images/TNO/Baw/jfkcongress.jpg"
    },

//jfk hist

    jfk_lobby_for_war_effort: {
      text: `"...It is the arena where German expansionism is most aggressively at work in the world today—where it is crossing international frontiers in violation of international agreements; where it is killing and kidnaping; where it is ruthlessly attempting to bend free people to its will..."`,
      options: [["jfk_visit_troops", "Propose A Light Intervention"]],
     imgElem: "images/TNO/Baw/jfkcongress.jpg"
    },

    jfk_visit_troops: {
      text: `"Soldiers... The forgotten men and women of the United States armed forces, GI's; General Enlisted soldiers are the backbone of any great nation on this planet, you will lead the offensive against the black tide of Nazism back into its roots back to the void of which it had escaped from and has concealed itself."`,
      options: [["jfk_propose_full_escalation", "Propose Full Escalation"]],
     imgElem: "images/TNO/Baw/jfktroops.jpg"
    },

    jfk_propose_full_escalation: {
      text: `"Strategically, South Africa's capitulation would close the shutters on all who dream of freedom from the German regimes in the region. The remaining free nations on the continent would be left stranded and surrounded on all sides by a tide of tyranny and destruction. More than half a billion people will be trapped behind a tidal wave of destruction and it would set in stone the dissolvement of democracy in the free world."`,
      options: [["jfk_interview_with_reporter", "Accept An Interview With Reporter"]],
     imgElem: "images/TNO/Baw/jfkwithdrawl.jpg"
    },

    jfk_interview_with_reporter: {
      text: `"But the responsibility of the United States for Africa does not conclude, obviously, with a review of what has been accomplished thus far with our help. Much more needs to be done; much more, in fact, than we have been doing up to now. Military alliances in all of Africa are necessary but not enough. Atomic superiority and the development of new ultimate weapons are not enough. Informational and propaganda activities, warning of the evils of Nazism and the blessings of the American way of life, are not enough in a country where concepts of free enterprise and capitalism are meaningless, where poverty and hunger are not enemies across the border but enemies within their midst. As Ambassador Chuong has recently said: 'People cannot be expected to fight for the Free World unless they have their own freedom to defend, their freedom from foreign domination as well as freedom from misery, oppression, corruption."`,
      options: [["jfk_nixon_impeachment", "Nixon Resigns From Presidency"]],
     imgElem: "images/TNO/Baw/jfkwithdrawl.jpg"
    },

//end of jfk hist

//jfk pacifist 

    jfk_saf_ignore_war: {
      text: `"Americans dying in South Africa is a deliberate and serious national security issue to the United States whether we realize it or not however our reaction to this situation can change HOW damaging this minor conflict is."`,
      options: [["jfk_saf_speech", "American Friends Of South Africa"]],
     imgElem: "images/TNO/Baw/jfkwithdrawl.jpg"
    },

    jfk_saf_speech: {
      text: `"It is a genuine pleasure to be here today at this vital Conference on the future of South Africa, and America's stake in that new nation, sponsored by the American Friends of South Africa, an organization of which I am proud to be a member. Your meeting today at a time when political events concerning South Africa are approaching a climax, both in that country and in our own Congress, is most timely. Your topic and deliberations, which emphasize the promise of the future more than the failures of the past, are most constructive. I can assure you that the Congress of the United States will give considerable weight to your findings and recommendations; and I extend to all of you who have made the effort to participate in this Conference my congratulations and best wishes."`,
      options: [["pacifist_jfk_nixon_impeachment", "Nixon Resigns From Presidency"]],
     imgElem: "images/TNO/Baw/jfkcivilrights.jpg"
    },

    pacifist_jfk_nixon_impeachment: {
      text: `"As of noon today, President Richard Nixon has resigned from his office, the President Of The United States. Being the first to do so since the country's inception. Being accused of wiretapping his rivals in the NPP during the 1960 Election as well as obstruction of justice for covering up the deed. The country is now in the hand of the Vice President, John F. Kennedy, being America's first Catholic president. Whether he can step out of Nixon's administration's Shadow and forge his own legacy is yet to be seen."`,
      options: [["pacifist_jfk_supported_impeachment", "'Welcome To The Stage- President John F Kennedy!'"]],
     imgElem: "images/TNO/Baw/nixonresign.jpg"
    },
    
    pacifist_jfk_supported_impeachment: {
      text: `"...we shall pay any price, bear any burden, meet any hardship, support any friend, oppose any foe to assure the survival and success of liberty..."`,
      options: [["jfk_dallas", "Do A Cross-Country Tour"]],
     imgElem: "images/TNO/Baw/jfkinnaugaration.jpg"
    },
    
    jfk_dallas: {
      text: `Static Hisses On the TV "Sorry for this interruption my fellow Americans, I'm Walker Crocknite here to give you an emergency broadcast I hadn't wished to ever have to say but President Kennedy has been shot in Dallas... The country has yet to be identified... We will keep you updated when a new development breaks through, stay safe" TV set hisses`,
     imgElem: "images/TNO/Baw/jfkdeath.jpg"
    },
        

//end of jfk pacifist


jfk_nixon_impeachment: {
  text: `"As of noon today, President Richard Nixon has resigned from his office, the President Of The United States. Being the first to do so since the country's inception. Being accused of wiretapping his rivals in the NPP during the 1960 Election as well as obstruction of justice for covering up the deed. The country is now in the hand of the Vice President, John F. Kennedy being America's first Catholic president. Whether he can step out of Nixon's administration's Shadow and forge his own legacy is yet to be seen."`,
  options: [["jfk_supported_impeachment", "'Welcome To The Stage- President John F Kennedy!'"]],
 imgElem: "images/TNO/Baw/nixonresign.jpg"
},

jfk_supported_impeachment: {
  text: `"...we shall pay any price, bear any burden, meet any hardship, support any friend, oppose any foe to assure the survival and success of liberty..."`,
  options: [["jfk_deescalate_malaysian_war", "De-Escalate Tensions In Malaysia"]],
 imgElem: "images/TNO/Baw/jfkinnaugaration.jpg"
},

//death//

jfk_deescalate_malaysian_war: {
  text: `"...So let us begin anew--remembering on both sides that civility is not a sign of weakness, and sincerity is always subject to proof. Let us never negotiate out of fear. But let us never fear to negotiate..."`,
  options: [["jfk_visit_singapore", "Visit Singapore To Lower Tensions"], ["jfk_visit_rebels", "Visit Rebels To Broker Truce"]],
 imgElem: "images/TNO/Baw/jfkhayato.jpg"
},

jfk_visit_singapore: {
  text: `Static Hisses On the TV "Sorry for this interruption my fellow Americans, I'm Walker Crocknite here to give you an emergency broadcast I hadn't wished to ever have to say but President Kennedy has been found deceased from visiting some freedom fighters trying to broker a peace agreement after a bombing raid... The country has yet to be identified but is suspected to be of Imperial Japanese Origin... We will keep you updated when a new development breaks through, stay safe" TV set hisses`,
 imgElem: "images/TNO/Baw/jfkdeath.jpg"
},

jfk_visit_rebels: {
  text: `Static Hisses On the TV "Sorry for this interruption my fellow Americans, I'm Walker Crocknite here to give you an emergency broadcast I hadn't wished to ever have to say but President Kennedy has been found deceased from visiting some freedom fighters trying to broker a peace agreement after a bombing raid... The country has yet to be identified but is suspected to be of Imperial Japanese Origin... We will keep you updated when a new development breaks through, stay safe" TV set hisses`,
 imgElem: "images/TNO/Baw/jfkdeath.jpg"
},

//lbj

    lbj_intro:{
      text: `Born in a farmhouse in Stonewall, Texas, to a local political family, Johnson worked as a high school teacher and a congressional aide before winning election to the U.S. House of Representatives in 1937. He won election to the United States Senate in 1948 after narrowly winning the Democratic Party's nomination.[2] He was appointed to the position of Senate Majority Whip in 1951. He became the Senate Democratic leader in 1953 and majority leader in 1954. In 1960 Johnson ran for the Democratic nomination for president. During the convention he came into conflict with the Democratic front-runner, fellow senator John F. Kennedy. The two men compromised and the Kennedy-Johnson ticket won in the 1960 presidential election.`,
      options: [["lbj_papers_stolen", "Papers Stolen from Republican-Democrat Headquaters"]],
      imgElem: "images/TNO/lbj.png"
    },
    
    lbj_papers_stolen:{
      text: `Papers Stolen from Republican-Democrat headquarters in Washington DC confirming the President Of The United States has asked his staff and fellow government agencies to assist him in spying on his political opponents and possibly incriminating/damning evidence against the Nixon presidency linking it to possible war crimes and obstruction of justice in the United States. A speech by the president will be made soon regarding this matter.`,
      options: [["lbj_discredit_pres", "Discredit President Nixon"], ["lbj_support_pres", "Support President Nixon"]],
      imgElem: "images/TNO/Baw/watergate.jpg"
    },

    lbj_discredit_pres:{
      text: `"The president, he who has committed crimes that are not only immoral but go against the very freedoms and ideals we have here in these United States, not only go against those but go against our founding fathers' wishes of a free and fair election system."`,
      options: [["lbj_candidacy", "It's Time We Got Off Our Seats"]],
     imgElem: "images/TNO/Baw/lbjspeech.jpg"
    },

    lbj_support_pres:{
      text: `"An ineffective president will occur when an indecisive nation divides the base of these Americas. When the public deceives the president, the country loses a national platform that congress cannot replace nor try to create in these United States."`,
      options: [["lbj_candidacy", "It's Time We Got Off Our Seats"]],
     imgElem: "images/TNO/BaW/lbjspeech2.jpg"
    },
    
    lbj_candidacy:{
      text: `"For my part, I pledge a progressive administration which is efficient, honest and frugal. This prosperous people, this land of reasonable men, has no place for petty partisanship or peevish prejudice. The needs of all can never be met by parties of the few. The needs of all cannot be met by a business party or a labor party, not by a war party or a peace party, not by a southern party or a northern party."`,
      options: [["lbj_support_impeachment", "Pledge Support Towards Impeaching Nixon"], ["lbj_dont_support_impeachment", "Criticize Those Impeaching Nixon"]],
     imgElem: "images/TNO/BaW/lbjcandidacy.jpg"
    },

    lbj_support_impeachment:{
      text: `"President Nixon, has not been the best moral character nor a president that is for everyone, for the people has forgotten that while in the most important office in the world he is not immune to the law and he must be made aware of this fact. Through this we will send him a message he wont forget anytime soon."`,
      options: [["lbj_papers_stolen", "It's Time We Got Off Our Seats"]],
     imgElem: "images/TNO/BaW/lbjaggressive.jpg"
    },

    lbj_dont_support_impeachment:{
      text: `"President Nixon, he's saved us from a full-on global nuclear conflict with the Empire Of Japan and has staved off Fascism from the Americas successfully preventing a takeover. He has always had the county's best interests in mind regardless of what the media has gone out on a full on blitz against him and his administration."`,
      options: [["lbj_papers_stolen", "It's Time We Got Off Our Seats"]],
     imgElem: "images/TNO/BaW/lbjnixonhappy.jpg"
    },





    
    };
  

    var playerChoices = ["opener"];
  

    var x = document.getElementById("beeg");
    var restart = document.getElementById("restart");
    var playArea = document.getElementById("playArea");
    var buttonArea = document.getElementById("buttonArea");
    var topmidimage = document.getElementById("dynamic-im");

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
      updateImage(story[pageNow].imgElem);
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