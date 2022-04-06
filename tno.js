window.onload = function(){

  let element = document.getElementById("dynamic-image"),
  imgElem = document.getElementById("dynamic-image");

function updateImage(source){
  imgElem.src = source
}

function republicDominican(){ 
updateImage(story[part].imgElem);}

    var story = {/*the communist manifasto*/
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
      text: `"As of noon today, President Richard Nixon has resigned from his office, the President Of The United States. Being the first to do so since the country's inception. Being accused of wiretapping his rivals in the NPP during the 1960 Election as well as obstruction of justice for covering up the deed. The country is now in the hands of the Vice President, John F. Kennedy, being America's first Catholic president. Whether he can step out of Nixon's administration's Shadow and forge his own legacy is yet to be seen."`,
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
      options: [["lbj_south_african_war", "Intervention in South Africa"]],
     imgElem: "images/TNO/BaW/lbjaggressive.jpg"
    },

    lbj_dont_support_impeachment:{
      text: `"President Nixon, he's saved us from a full-on global nuclear conflict with the Empire Of Japan and has staved off Fascism from the Americas successfully preventing a takeover. He has always had the county's best interests in mind regardless of what the media has gone out on a full on blitz against him and his administration."`,
      options: [["lbj_south_african_war", "Intervention in South Africa"]],
     imgElem: "images/TNO/BaW/lbjnixonhappy.jpg"
    },

    lbj_south_african_war:{
      text: `"After full consultation with the National Security Council, Ambassador Bunker, General Abrams, and my other advisers, I have concluded that the actions of the enemy in the last 10 days clearly endanger the lives of American citizens and American interests in Southern Africa and this would constitute an unacceptable risk to those who will be there after withdrawaling of 150,000 sailors, airforcemen and American citizens. This danger spurred by the German agression to expand their reach of terror, the South African nations fighting the Nazis cannot fight alone and require our assistance, if we're driven from the field we can no longer have the confidence put in our trust. JFK Turns off the TV Lyndon ? "Yes ?"" Get me the phone to the defense secretary now."`,
      options: [["lbj_criticize_intervention", "Criticize Intervention"], ["lbj_support_intervention", "Give A Speech In Congress To Shift Towards Pro-War Opinions"]],
     imgElem: "images/TNO/BaW/nixonstaffarmy.jpg"
    },

    lbj_criticize_intervention:{
      text: `"A war, what is a war good for in these trying times, why spend billions of dollars in fruitless endevors across the oceans in conflicts that are strictly European and only for Europeans. Why spend money and send your sons to die for some territory that has little value when we have millions in these Untied States that wish to eat more than once a day, why do we choose to impoverish more people rather than reduce poverty ?"`,
      options: [["lbj_visit_the_troops", "Visit The Troops"], ["lbj_interview", "Attend An Interview With A Reporter"]],
     imgElem: "images/TNO/BaW/angrylbj.jpg"
    },

    lbj_support_intervention:{
      text: `"Armed raider teams in very large numbers have been sent into South Africa to engage in sabotage and assassination. On January 19th, a 31-man team of German raiders invaded Cape Town with the object of murdering the President of the Dominion Of South Africa. In many of these aggressive actions, Korean and American soldiers have been killed and wounded. The Germans and their African subjects are apparently attempting to intimidate the South Africans and are trying to interrupt the growing spirit of confidence and progress in South Africa..."`,
      options: [["lbj_visit_the_troops", "Visit The Troops"]],
     imgElem: "images/TNO/BaW/malaysiansoldiers.jpg"
    },

    lbj_visit_the_troops:{
      text: `"..The enemy has met their match here with us here, there will be no retreat, there will be no losses, there will be no defeat on our side with the enemy advancing and threathening our very way of life in the United States. You are now engaged in a vital mission for humanity's and democracy's survival across the globe, the fate of the world lays on your shoulders and the hundreds of future generations of your children and wives."`,
      options: [["lbj_interview", "Attend An Interview With A Reporter"]],
     imgElem: "images/TNO/BaW/lbjtroops.jpg"
    },

    lbj_interview:{
      text: `The reporter clears their throat "So, Senator Lyndon as you know, President Nixon has decided to intervene and send almost a full hundred thousand American soldiers to South Africa and in his words 'This danger spurred by the German agression to expand their reach of terror, the South African nations fighting the Nazis cannot fight alone and require our assistance' Does this have anything to do with investments made by American businessmen and what will happen to those businesses, is this a war of war profiteering ? What is Nixon's plan for the war ? So in a short question, what about American civilians and businesses there in Africa, what will happen to them ?"`,
      options: [["lbj_they_will_be_evacuated", "They will both be evacuated with the Navy keeping them secure"], ["lbj_they_will_be_protected", "They will all be protected and they will be kept secure"]],
     imgElem: "images/TNO/BaW/lbjinterview.jpg"
    },
    
    lbj_they_will_be_evacuated:{
      text: `"South Africa has now been overrun and is now a lost cause for American foreign interests and with this American businesses and the everyday people are ht emost affected by this loss, however all Americans within Africa will now be evacuated with the navy keeping them safe from any possible enemy ships and planes. They will both be evacuated with the Navy, keeping them secure."`,
      options: [["lbj_nixon_impeachment", "Nixon Resigns From Presidency"]],
     imgElem: "images/TNO/BaW/vietnamnavy.jpg"
    },

    lbj_they_will_be_protected:{
      text: `"South Africa is now a beacon, a bastion of light on a black continent of darkness. It is a matter that with all America's might we must inquire a victory in the lands that are far-away. I repeat, we wil defend our ground until the last bullet has been fired, we are also considering all possible options for weapons to use against the Germans, currently there is nothing off the table. These Americans will be protected through steel and blood within the safety of these United States, they will be protected and they will be kept secure. The invading Germans will be thrown back across the ocean with a heavy handed blow."`,
      options: [["lbj_nixon_impeachment", "Nixon Resigns From Presidency"]],
     imgElem: "images/TNO/BaW/production.jpg"
    },
    
    lbj_nixon_impeachment:{
      text: `"As of noon today, President Richard Nixon has resigned from his office, the President Of The United States. Being the first to do so since the country's inception. Being accused of wiretapping his rivals in the NPP during the 1960 Election as well as obstruction of justice for covering up the deed. The country is now in the hand of the Vice President, John F. Kennedy being America's first Catholic president. Whether he can step out of Nixon's administration's Shadow and forge his own legacy is yet to be seen."`,
      options: [["lbj_begin_campaign", "Begin Campaign For Vice-Presidency"]],
     imgElem: "images/TNO/BaW/nixonspeech.jpg"
    },

    lbj_begin_campaign:{
      text: `"...We are members together of such a party, the Republican-Democrat Party of 1964. We have written a proud record of accomplishments for all Americans. If any ask what we have done, just let them look at what we promised to do. For those promises have become our deeds. And the promises of tonight I can assure you will become the deeds of tomorrow. We are in the midst of the largest and the longest period of peacetime prosperity in our history. And almost every American listening to us tonight has seen the results in his own life. But prosperity for most has not brought prosperity to all. And those who have received the bounty of this land--who sit tonight secure in affluence and safe in power-must not now turn from the needs of their neighbors..."`,
      options: [["lbj_campaining_for_nasa", "Campaign Cross-Country With President For The New Frontier"]],
     imgElem: "images/TNO/BaW/lbforjvp.jpg"
    },

    lbj_campaining_for_nasa:{
      text: `"Someone Knocks On The Door 'We've arrived in Dallas now Vice President, should I tell the president yet ?' 'Go, i'll be out soon, ill tell him myself' You walk down a tight hallway 'John, we're here'"`,
      options: [["lbj_visit_nasa", "Visit NASA Headquarters"]],
     imgElem: "images/TNO/BaW/secretservice.jpg"
    },

    lbj_visit_nasa:{
      text: `"Hey driver turn off the radio, or i'll have you get into another car-" You get loudly interrupted as the escort motorcycles stop your car and tell you to quickly get back on the plane as your security detail fights until you all hear a massive amount of sirens go off heading towards the city center, "Lyndon- We have to get to the airport now, something's happening and its not good" You quickly run over to the airport as you get put onto Airforce One and into the air`,
      options: [["lbj_whats_happening", "What In- Whats Going On Here ?"]],
     imgElem: "images/TNO/BaW/secretservice.jpg"
    },

    lbj_whats_happening:{
      text: `Someone turns on a television set and Static Hisses "Sorry for this interruption my fellow Americans, I'm Walker Crocknite here to give you an emergency broadcast I hadn't wished to ever have to say but President Kennedy has been shot and is being escorted to the Dallas hosptial getting medical treatment... The shooter has yet to be identified... We will keep you updated when a new development breaks through, stay safe..." the TV set hisses and goes back to a show as someone turns it off`,
      options: [["lbj_sad_innaugaration", "This Is A Sad Time For All People"]],
     imgElem: "images/TNO/BaW/lbjemergency.jpg"
    },

    lbj_sad_innaugaration:{
      text: `"This is a sad time for all people. We have suffered a loss that cannot be weighed. For me, it is a deep personal tragedy. I know that the world shares the sorrow that Mrs. Kennedy and her family bear. I will do my best. That is all I can do. I ask for your help—and God's."`,
      options: [["lbj_the_fillipino_situation", "A Defense Minister, A CIA Director, A Veteran and a Japanese Soldier Walk Into a Bar"]],
     imgElem: "images/TNO/BaW/lbjsadinnaug.jpg"
    },

    lbj_the_fillipino_situation:{
      text: `"Lyndon, Mister President ? The CIA director is here to see you", "Great, let him in", the CIA director walks in with multiple people, one having a noticeable sunburn and looking half starved to death while the other being a Japanese soldier and behind him a secret agent. "What in the- Jim- Who and why did you bring these people into the white house and tell me why you have a Japan-" You get rudely interrupted as the director shushes you and you slam your fists on table and sit down "Lyndon, this soldier here was under MacAurthur's command in the Phillipines- This Japanese soldier is from the Phillipines or atleast thats what his story is and the operative behind him is the minister of defense in the Bengal Government. Now he tells us that the Japanese are planning on doing something soon in the Phillipines and it would be a massive win if OUR soldiers won that conflict however as you can see he briefly points towards the worn down soldier you can imagine they're not excactly in the best shape to fight back at the momment. They could seriously use some reinforcements, now you can help them if you want or not but you know the risks and the payouts."`,
      options: [["lbj_public_lend_lease", "Alright, ill sign some shipments of equipment your way"], ["lbj_use_operatives", "Use All Our Available Agents In South-East Asia To Assist Them"]],
     imgElem: "images/TNO/BaW/lbjfbi.jpg"
    },

    lbj_public_lend_lease:{
      text: `"We applaud this evidence of determination on the part of the South Africans, Fillipinos, our long lost soldiers, and Malaysians. Our first priority will be to support their effort. We shall accelerate the re-equipment of these nations's armed forces in order to meet the enemy's increased aggresiveness. And this will enable them progressively to undertake a larger share of offensive combat operations against the enemy invaders. On many occasions I have told the American people that we would send to them, those forces that are required to accomplish our mission there. So with that as our guide we have previously authorized a force level of approximately 725,000. Some weeks ago to help meet the enemy's new offensive we sent to South Africa about 37,000 additional Marines and airborne troops. They were deployed by air in 48 hours on an emergency basis. But the artillery and the tank and the aircraft and medical and other units that were needed to work with and support these infantry troops in combat could not then accompany them by air on that short notice. So I ask the congress and the American people of these United States to assist me in passing a bill to send a massive amount of our rotting stockpile to our forgotten soldiers in the Phillipines, your sons numbering in the hundreds of thousands all stranded on the Phillipines. MacArthur promised to his soldiers and the civilians that he would be back but he not only spoke for himself but spoke for Uncle Sam coming to save them in anyway possible. Malaysia used to be our best location for our former ally's navy and can be taken out of Japanese hand with the support of the common-folk. The South African war has had excelent results especialy in recent months with now more than 710,000 American combat personal now staged there."`,
      options: [["lbj_the_malay_situation", "The Asian Giblraltar Situation"]],
     imgElem: "images/TNO/BaW/lbjspeech3.jpg"
    },
    
    lbj_use_operatives:{
      text: `"Use all our available agents in South-East Asia to assist them in anyway possible, I don't want a trace of American involvment in this, tell me anything you need and I'll get it to you, simply tell me what you need and what you want and when."`,
      options: [["lbj_the_malay_situation", "The Asian Giblraltar Situation"]],
     imgElem: "images/TNO/BaW/vietnamcia.jpg"
    },
    
    lbj_the_malay_situation:{
      text: `"Malaysian rebels having fought off the Japanese since the beginning of their occupation have risen up enmasse and are mounting a strong resistance. The Gibraltar of Asia has now appeared to dislike having Japanese overlords, now its up to what the world will do if they do anything at all, fight for freedom and liberty or simple leave the masses to die yearning for freedom huddled as bombs fall on them."`,
      options: [["lbj_use_all_tools", "Let's Open Our Toolbox Shall We ?"]],
     imgElem: "images/TNO/BaW/malaysiansoldiers.jpg"
    },

    lbj_use_all_tools:{
      text: `"Lets open our toolbox and use all our tools available here, shall we ?' You slowly pick up the phone and ask your secretary to phone multiple generals, the defense minister of South Africa alongsides multiple rebel leaders from Malaysia and the Fillipino rebel representative. for a meeting tommorow."`,
      options: [["lbj_whatre_our_options", "Now Then What're Our Options Here Against The Menace ?"]],
     imgElem: "images/TNO/BaW/lbjtoolbox.jpg"
    },
    
    lbj_whatre_our_options:{
      text: `"Now then what're our options here against the menace-' You get rudely interrupted as you pick up the phone 'Sir, Madagascar's Obergruppenfuhrer is here to talk to you alongsides Albert Speer."`,
      options: [["lbj_let_them_in", "Let Them In"], ["lbj_tell_them_to_wait", "Tell Them To Wait"]],
     imgElem: "images/TNO/BaW/lbjfrustratedphone.jpg"
    },

    lbj_let_them_in:{
      text: `"Let them in quickly and get the FBI director here now, something big is happening now, its go time."`,
      options: [["lbj_lobby_for_support", "Its Go Time"]],
     imgElem: "images/TNO/BaW/albertspeer.jpg"
    },

    lbj_tell_them_to_wait:{
      text: `"Tell them to wait 20 minutes im in a quick meeting"`,
      options: [["lbj_let_them_in", "Alright Let Them In"], ["lbj_lobby_for_support", "I Said To Wait"]],
     imgElem: "images/TNO/BaW/lbjfrustratedphone.jpg"
    },

//lbj finale

    lbj_lobby_for_support:{
      text: `"Mr. Speaker, Mr. Vice President, Members of the Congress: I speak tonight for the dignity of man and the destiny of democracy. I urge every member of both parties, Americans of all religions and of all colors, from every section of this country, to join me in that cause. At times history and fate meet at a single time in a single place to shape a turning point in man's unending search for freedom. So it was at Lexington and Concord. So it was a century ago at Appomattox. So it was last week in Selma, Alabama. There, long-suffering men and women peacefully protested the denial of their rights as Americans. Many were brutally assaulted. One good man, a man of God, was killed. There is no cause for pride in what has happened in Selma. There is no cause for self-satisfaction in the long denial of equal rights of millions of Americans. But there is cause for hope and for faith in our democracy in what is happening here tonight. For the cries of pain and the hymns and protests of oppressed people have summoned into convocation all the majesty of this great Government—the Government of the greatest Nation on earth..."`,
      options: [["lbj_great_society", "Begin Great Society Programs"], ["lbj_final_words", "Good evening, my fellow Americans..."]],
     imgElem: "images/TNO/BaW/lbjspeechtocongress.jpg"
    },   


//lbj great society programs

lbj_great_society:{
  text: `"But most of all, the Great Society is not a safe harbor, a resting place, a final objective, a finished work. It is a challenge constantly renewed, beckoning us toward a destiny where the meaning of our lives matches the marvelous products of our labor. So I want to talk to you today about three places where we begin to build the Great Society — in our cities, in our countryside, and in our classrooms..."`,
  options: [["lbj_unexpected_visitor", "An Unexpected Visitor"]],
 imgElem: "images/TNO/BaW/lbjgreatsociety.jpg"
}, 

lbj_unexpected_visitor:{
  text: `"I don't see how President Johnson can send troops to South Africa-I don't see how he can send troops to India-I don't see how he can send troops to Asia and can't send troops to Selma Alabama."`,
  options: [["lbj_mlk_civil_rights_act", "Bible Belt On Fire"], ["lbj_bloody_sunday", "Can't Help Right Now"]],
 imgElem: "images/TNO/BaW/lbjmlk2.jpg"
}, 

lbj_bloody_sunday:{
  text: `"I don't see how President Johnson can send troops to South Africa-I don't see how he can send troops to India-I don't see how he can send troops to Asia and can't send troops to Selma Alabama."`,
  options: [["lbj_mlk_civil_rights_act", "Civil Rights Act Of 1965"], ["lbj_war_on_poverty", "War On Poverty"]],
 imgElem: "images/TNO/BaW/selma.jpg"
}, 

//prioritization of civil rights//

lbj_mlk_civil_rights_act:{
  text: `"One hundred and eighty-eight years ago this week a small band of valiant men began a long struggle for freedom. They pledged their lives, their fortunes, and their sacred honor not only to found a nation, but to forge an ideal of freedom—not only for political independence, but for personal liberty—not only to eliminate foreign rule, but to establish the rule of justice in the affairs of men. That struggle was a turning point in our history. Today in far corners of distant continents, the ideals of those American patriots still shape the struggles of men who hunger for freedom. This is a proud triumph. Yet those who founded our country knew that freedom would be secure only if each generation fought to renew and enlarge its meaning. From the minutemen at Concord to the soldiers in Viet-Nam, each generation has been equal to that trust. Americans of every race and color have died in battle to protect our freedom. Americans of every race and color have worked to build a nation of widening opportunities. Now our generation of Americans has been called on to continue the unending search for justice within our own borders. We believe that all men are created equal. Yet many are denied equal treatment. We believe that all men have certain unalienable rights. Yet many Americans do not enjoy those rights. We believe that all men are entitled to the blessings of liberty. Yet millions are being deprived of those blessings—not because of their own failures, but because of the color of their skin."`,
  options: [["lbj_voting_rights_act", "The Question Of Education"], ["lbj_war_on_poverty2", "Begin A War On Poverty"], ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/lbjspeech3.jpg"
}, 

lbj_voting_rights_act:{
  text: `"This afternoon, as we gather here in this historic room in the White House, I think we can all take some heart that democracy's work is being done. In the Civil Rights Act of 1966 America does move forward and the bell of freedom rings out a little louder. We have come some of the way, not near all of it. There is much yet to do. If the Congress sees fit to act upon these twenty messages and some fifteen appropriations bills, I assure you that what remains to be done will be recommended in ample time for you to do it after you have completed what is already before you. Thank you very much."`,
  options: [["lbj_fair_housing_act", "Fair Housing For Americans"], ["lbj_war_on_poverty2", "Begin A War On Poverty"], ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/lbjspeech4.jpg"
}, 

lbj_fair_housing_act:{
  text: `"Members of the Congress, Members of the Cabinet, distinguished Americans, and guests. On an April afternoon in the year 1966, I asked a distinguished group of citizens who were interested in human rights to meet me in the Cabinet Room in the White House. In their presence that afternoon, I signed a message to the Congress. That message called for the enactment of "the first effective federal law against discrimination in the sale and the rental of housing" in the United States of America. Few in the Nation--and the record will show that very few in that room that afternoon--believed that fair housing would--in our time--become the unchallenged law of this land. And indeed, this bill has had a long and stormy trip. We did not get it in 1966. We pleaded for it again in 1965. But the Congress took no action that year. We asked for it again this year. And now--at long last this afternoon--its day has come."`,
  options: [["lbj_war_on_poverty2", "Begin A War On Poverty"], ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/lbjspeech2.jpg"
}, 

//prioritization of civilrights POVERTY PROGRAMS//

lbj_war_on_poverty2:{
  text: `"On similar occasions in the past we have often been called upon to wage war against foreign enemies which threatened our freedom. Today we are asked to declare war on a domestic enemy which threatens the strength of our nation and the welfare of our people. If we now move forward against this enemy—if we can bring to the challenges of peace the same determination and strength which has brought us victory in war—then this day and this Congress will have won a secure and honorable place in the history of the nation and the enduring gratitude of generations of Americans yet to come."`,
  options: [["lbj_economic_opportunity_act2", "Poverty Has Been His Curse"], ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/lbjwaronpoverty.jpg"
}, 

lbj_economic_opportunity_act2:{
  text: `"My fellow Americans, on this occasion the American people and our American system are making history. For so long as man has lived on this earth poverty has been his curse. On every continent in every age men have sought escape from poverty's oppression. Today for the first time in all the history of the human race, a great nation is able to make and is willing to make a commitment to eradicate poverty among its people. Whatever our situation in life, whatever our partisan affiliation, we can be grateful and proud that we are able to pledge ourselves this morning to this historic course. We can be especially proud of the nature of the commitments that we are making. This is not in any sense a cynical proposal to exploit the poor with a promise of a handout or a dole. We know--we learned long ago--that answer is no answer.The measure before me this morning for signature offers the answer that its title implies--the answer of opportunity. For the purpose of the Economic Opportunity Act of 1966 is to offer opportunity, not an opiate. For the million young men and women who are out of school and who are out of work, this program will permit us to take them off the streets, put them into work training programs, to prepare them for productive lives, not wasted lives."`,
  options: [["lbj_vista2", "The First Frontline Volunteers In Our War Against Poverty"],  ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/greatsociety2.jpg"
}, 

lbj_vista2:{
  text: `"I want to welcome you here today, the first frontline volunteers in our war against poverty. You have come from every part of this country, from every age group, from every background. You have come to serve the poor and the unfortunate of American society, and to open the door of American opportunity to all of our American people. Your pay will be low; the conditions of your labor will often be difficult. But you will have the satisfaction of leading a great national effort, and you will have the ultimate reward which comes to those who serve their Nation and who serve their fellow man."`,
  options: [["lbj_headstart_program2", "Poverty Has Been His Curse"],  ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/lbjvista.jpg"
}, 

lbj_headstart_program2:{
  text: `"Today we are able to announce that we will have open, and we believe operating this summer, coast-to-coast, some 2,000 child development centers serving as many as possibly a half million children. This means that nearly half the preschool children of poverty will get a head start on their future. These children will receive preschool training to prepare them for regular school in September. They will get medical and dental attention that they badly need, and parents will receive counseling on improving the home environment."`,
  options: [["lbj_education_reform", "Open A New Front In Education Against Impoverishment"],  ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/headstartprogram.jpg"
}, 

//prioritization of war on poverty POVERTY PROGRAMS//

lbj_war_on_poverty:{
  text: `"On similar occasions in the past we have often been called upon to wage war against foreign enemies which threatened our freedom. Today we are asked to declare war on a domestic enemy which threatens the strength of our nation and the welfare of our people. If we now move forward against this enemy—if we can bring to the challenges of peace the same determination and strength which has brought us victory in war—then this day and this Congress will have won a secure and honorable place in the history of the nation and the enduring gratitude of generations of Americans yet to come."`,
  options: [["lbj_mlk_civil_rights_act_pov_1", "Bible Belt On Fire"], ["lbj_economic_opportunity_act", "Poverty Has Been His Curse"], ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/lbjwaronpoverty.jpg"
}, 

lbj_economic_opportunity_act:{
  text: `"My fellow Americans, on this occasion the American people and our American system are making history. For so long as man has lived on this earth poverty has been his curse. On every continent in every age men have sought escape from poverty's oppression. Today for the first time in all the history of the human race, a great nation is able to make and is willing to make a commitment to eradicate poverty among its people. Whatever our situation in life, whatever our partisan affiliation, we can be grateful and proud that we are able to pledge ourselves this morning to this historic course. We can be especially proud of the nature of the commitments that we are making. This is not in any sense a cynical proposal to exploit the poor with a promise of a handout or a dole. We know--we learned long ago--that answer is no answer.The measure before me this morning for signature offers the answer that its title implies--the answer of opportunity. For the purpose of the Economic Opportunity Act of 1966 is to offer opportunity, not an opiate. For the million young men and women who are out of school and who are out of work, this program will permit us to take them off the streets, put them into work training programs, to prepare them for productive lives, not wasted lives."`,
  options: [["lbj_mlk_civil_rights_act_pov_1", "Bible Belt On Fire"], ["lbj_vista", "The First Frontline Volunteers In Our War Against Poverty"],  ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/greatsociety2.jpg"
}, 

lbj_vista:{
  text: `"I want to welcome you here today, the first frontline volunteers in our war against poverty. You have come from every part of this country, from every age group, from every background. You have come to serve the poor and the unfortunate of American society, and to open the door of American opportunity to all of our American people. Your pay will be low; the conditions of your labor will often be difficult. But you will have the satisfaction of leading a great national effort, and you will have the ultimate reward which comes to those who serve their Nation and who serve their fellow man."`,
  options: [["lbj_mlk_civil_rights_act_pov_1", "Bible Belt On Fire"], ["lbj_headstart_program", "Poverty Has Been His Curse"],  ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/lbjvista.jpg"
}, 

lbj_headstart_program:{
  text: `"Today we are able to announce that we will have open, and we believe operating this summer, coast-to-coast, some 2,000 child development centers serving as many as possibly a half million children. This means that nearly half the preschool children of poverty will get a head start on their future. These children will receive preschool training to prepare them for regular school in September. They will get medical and dental attention that they badly need, and parents will receive counseling on improving the home environment."`,
  options: [["lbj_mlk_civil_rights_act_pov_1", "Bible Belt On Fire"],  ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/headstartprogram.jpg"
}, 

//prioritzation of war on poverty CIVIL RIGHTS PROGRAMS//

lbj_mlk_civil_rights_act_pov_1:{
  text: `"One hundred and eighty-eight years ago this week a small band of valiant men began a long struggle for freedom. They pledged their lives, their fortunes, and their sacred honor not only to found a nation, but to forge an ideal of freedom—not only for political independence, but for personal liberty—not only to eliminate foreign rule, but to establish the rule of justice in the affairs of men. That struggle was a turning point in our history. Today in far corners of distant continents, the ideals of those American patriots still shape the struggles of men who hunger for freedom. This is a proud triumph. Yet those who founded our country knew that freedom would be secure only if each generation fought to renew and enlarge its meaning. From the minutemen at Concord to the soldiers in Viet-Nam, each generation has been equal to that trust. Americans of every race and color have died in battle to protect our freedom. Americans of every race and color have worked to build a nation of widening opportunities. Now our generation of Americans has been called on to continue the unending search for justice within our own borders. We believe that all men are created equal. Yet many are denied equal treatment. We believe that all men have certain unalienable rights. Yet many Americans do not enjoy those rights. We believe that all men are entitled to the blessings of liberty. Yet millions are being deprived of those blessings—not because of their own failures, but because of the color of their skin."`,
  options: [["lbj_voting_rights_act_pov_1", "The Question Of Education"], ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/lbjspeech3.jpg"
}, 

lbj_voting_rights_act_pov_1:{
  text: `"This afternoon, as we gather here in this historic room in the White House, I think we can all take some heart that democracy's work is being done. In the Civil Rights Act of 1966 America does move forward and the bell of freedom rings out a little louder. We have come some of the way, not near all of it. There is much yet to do. If the Congress sees fit to act upon these twenty messages and some fifteen appropriations bills, I assure you that what remains to be done will be recommended in ample time for you to do it after you have completed what is already before you. Thank you very much."`,
  options: [["lbj_fair_housing_act_pov_1", "Fair Housing For Americans"],["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/lbjspeech.jpg"
}, 

lbj_fair_housing_act_pov_1:{
  text: `"Members of the Congress, Members of the Cabinet, distinguished Americans, and guests. On an April afternoon in the year 1966, I asked a distinguished group of citizens who were interested in human rights to meet me in the Cabinet Room in the White House. In their presence that afternoon, I signed a message to the Congress. That message called for the enactment of "the first effective federal law against discrimination in the sale and the rental of housing" in the United States of America. Few in the Nation--and the record will show that very few in that room that afternoon--believed that fair housing would--in our time--become the unchallenged law of this land. And indeed, this bill has had a long and stormy trip. We did not get it in 1966. We pleaded for it again in 1965. But the Congress took no action that year. We asked for it again this year. And now--at long last this afternoon--its day has come."`,
  options: [["lbj_education_reform", "Open A New Front In Education Against Impoverishment"], ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/lbjspeech2.jpg"
}, 


//generic lbj laws ONLY CAN BE ENACTED AFTER SPECIAL LAWS ARE DONE//

lbj_education_reform:{
  text: `"But more classrooms and more teachers are not enough. We must seek an educational system which grows in excellence as it grows in size. This means better training for our teachers. It means preparing youth to enjoy their hours of leisure as well as their hours of labor. It means exploring new techniques of teaching, to find new ways to stimulate the love of learning and the capacity for creation. These are three of the central issues of the Great Society. While our Government has many programs directed at those issues, I do not pretend that we have the full answer to those problems. But I do promise this: We are going to assemble the best thought and the broadest knowledge from all over the world to find those answers for America. I intend to establish working groups to prepare a series of White House conferences and meetings — on the cities, on natural beauty, on the quality of education, and on other emerging challenges. And from these meetings and from this inspiration and from these studies we will begin to set our course toward the Great Society."`,
  options: [["lbj_safety_nets", "Nixon Resigns From Presidency"], ["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/medicare.jpg"
}, 

lbj_safety_nets:{
  text: `"Because of social security, tens of millions of Americans have been able to stand straighter and taller unafraid of their future ... Measured in dollars of insurance benefits, the bill enacted into law today is the greatest stride forward since social security was launched in 1935"`,
  options: [["lbj_final_words", "Good evening, my fellow Americans..."]],
 imgElem: "images/TNO/BaW/lbjpoverty.jpg"
}, 

//ending the game finally

lbj_final_words:{
  text: `"Mr. Speaker, Mr. Vice President, Members of the Congress: I speak tonight for the dignity of man and the destiny of democracy. I urge every member of both parties, Americans of all religions and of all colors, from every section of this country, to join me in that cause. At times history and fate meet at a single time in a single place to shape a turning point in man's unending search for freedom. So it was at Lexington and Concord. So it was a century ago at Appomattox. So it was last week in Selma, Alabama. There, long-suffering men and women peacefully protested the denial of their rights as Americans. Many were brutally assaulted. One good man, a man of God, was killed. There is no cause for pride in what has happened in Selma. There is no cause for self-satisfaction in the long denial of equal rights of millions of Americans. But there is cause for hope and for faith in our democracy in what is happening here tonight. For the cries of pain and the hymns and protests of oppressed people have summoned into convocation all the majesty of this great Government—the Government of the greatest Nation on earth. With America's sons in the fields far away, with America's future under challenge right here at home, with our hopes and the world's hopes for peace in the balance every day, I do not believe that I should devote an hour or a day of my time to any personal partisan causes or to any duties other than the awesome duties of this office--the Presidency of your country. Accordingly, I shall not seek, and I will not accept, the nomination of my party for another term as your President. But let men everywhere know, however, that a strong, a confident, and a vigilant America stands ready tonight to seek an honorable peace--and stands ready tonight to defend an honored cause--whatever the price, whatever the burden, whatever the sacrifice that duty may require. Thank you for listening. Good night and God bless all of you."`,
 imgElem: "images/TNO/BaW/lbjcowboy.jpg"
},  

    };
  

    var playerChoices = ["opener"];
  

    var x = document.getElementById("TNOstart");
    var restart = document.getElementById("TNOrestart");
    var playArea = document.getElementById("playArea");
    var buttonArea = document.getElementById("TNObuttonArea");
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