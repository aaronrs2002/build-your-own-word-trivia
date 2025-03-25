let words = [
    { "5A": "Seinfeld trivia -  What was Jerry Seinfeld's apartment number?" },
    { "Cosmo": "Seinfeld trivia -  What is Kramer's first name?" },
    { "Assistant to the Traveling Secretary": "Seinfeld trivia -  What job does George Costanza pretend to have at the Yankees?" },
    { "The Sponge": "Seinfeld trivia -  What is Elaine's favorite contraceptive that gets discontinued?" },
    { "Jambalaya": "Seinfeld trivia -  What kind of soup does the Soup Nazi refuse to serve George?" },
    { "Susan Ross": "Seinfeld trivia -  What was the name of George's fiancée who died from licking envelopes?" },
    { "Make Your Own Pizza Pie": "Seinfeld trivia -  What was the name of Kramer's entrepreneur invention for pizza?" },
    { "Newman": "Seinfeld trivia -  What is the name of Jerry's nemesis and neighbor?" },
    { "The Little Kicks": "Seinfeld trivia -  What is Elaine's go-to dance move called?" },
    { "The Human Fund": "Seinfeld trivia -  What is the title of George's fake charity?" },
    { "Saab": "Seinfeld trivia -  What kind of car does Jerry drive?" },
    { "Monk's Café": "Seinfeld trivia -  What is the name of the coffee shop the gang frequently visits?" },
    { "Jackie Chiles": "Seinfeld trivia -  What was the name of Kramer's lawyer friend?" },
    { "The Drake's Wedding Cake": "Seinfeld trivia -  What item did Elaine's boss, J. Peterman, eat that was worth $29,000?" },
    { "Art Vandelay": "Seinfeld trivia -  What is the name of George's alter ego?" },
    { "Festivus": "Seinfeld trivia -  What holiday does Frank Costanza invent?" },
    { "Superman": "Seinfeld trivia -  What is Jerry's favorite superhero?" },
    { "Jujyfruits": "Seinfeld trivia -  What does Elaine get banned for eating at Puddy's priest's church?" },
    { "Marble Rye": "Seinfeld trivia -  What type of bread does Jerry steal from an old lady?" },
    { "Rochelle, Rochelle": "Seinfeld trivia -  What is the name of the movie that Jerry and Elaine keep missing?" },
    { "Patrick Warburton": "Seinfeld trivia -  Who plays Elaine's on-again, off-again boyfriend David Puddy?" },
    { "Donald": "Seinfeld trivia -  What is the name of the bubble boy?" },
    { "Yev Kassem": "Seinfeld trivia -  What is the real name of the Soup Nazi?" },
    { "Chess": "Seinfeld trivia -  What game do George and his father play together?" },
    { "Junior Mint": "Seinfeld trivia -  What type of candy does Kramer drop in the operating room?" },
    { "President of the condo association": "Seinfeld trivia -  What does Jerry's father Morty Seinfeld do in Florida?" },
    { "J. Peterman": "Seinfeld trivia -  What is the name of Elaine's boss at the J. Peterman catalog?" },
    { "The Manzier (or Bro)": "Seinfeld trivia -  What does George wear to the beach that becomes famous?" },
    { "The Kramerica Industries": "Seinfeld trivia -  What is Kramer's first business idea on the show?" },
    { "Leslie": "Seinfeld trivia -  Who is the low-talker that convinces Jerry to wear the puffy shirt?" },
    { "Twix": "Seinfeld trivia -  What kind of candy does George buy from the vending machine that gets stuck?" },
    { "Lt. Bookman": "Seinfeld trivia -  What is the name of the library cop who investigates Jerry?" },
    { "Champion": "Seinfeld trivia -  What was the name of the pony Elaine insults?" },
    { "Uncle Leo": "Seinfeld trivia -  What is the name of Jerry's uncle?" },
    { "Get out!": "Seinfeld trivia -  What does Elaine scream to get out of awkward situations?" },
    { "Scrooge": "Seinfeld trivia -  What character does Kramer play in his community theater production?" },
    { "Mr. Wilhelm": "Seinfeld trivia -  What is the name of George's boss at the Yankees?" },
    { "An antique toy": "Seinfeld trivia -  What does Jerry accidentally break that belongs to his girlfriend?" },
    { "Jerry": "Seinfeld trivia -  What is the title of the pilot Jerry and George pitch to NBC?" },
    { "A rooster": "Seinfeld trivia -  What animal does Kramer accidentally release in the hospital?" },
    { "The Party Dip Incident": "Seinfeld trivia -  What is the name of George's famous double-dip incident?" },
    { "A chocolate éclair from the trash": "Seinfeld trivia -  What does Elaine eat that is deemed taboo?" },
    { "The Pieman": "Seinfeld trivia -  What is the nickname of the woman who refuses to share her pie with Jerry?" },
    { "Crazy Joe Davola": "Seinfeld trivia -  What is the name of the street tough who terrorizes Kramer and Newman?" },
    { "Under his desk at work": "Seinfeld trivia -  What does George call the perfect nap spot?" },
    { "White socks with loafers": "Seinfeld trivia -  What type of shoes does Elaine's boss Mr. Pitt insist on wearing?" },
    { "Vandelay Industries": "Seinfeld trivia -  What is the name of the fictitious import/export company George claims to work for?" },
    { "Two-Face": "Seinfeld trivia -  What is the name of the woman Jerry dates who looks different in different lighting?" },
    { "The Soup Nazi": "Seinfeld trivia -  What is the name of the person who runs the soup kitchen?" },
    { "Beehive": "Seinfeld trivia -  What type of hairstyle does Jerry's mom have?" },
    { "The Yankees": "Seinfeld trivia -  What job does George get fired from for sleeping with the cleaning lady?" },
    { "Friends": "What popular TV show featured six friends living in New York City?" },
    { "The Fresh Prince of Bel-Air": "What TV show starred Will Smith as a teenager sent to live with his wealthy relatives?" },
    { "Titanic": "What 1997 film became one of the highest-grossing movies of all time and featured the song 'My Heart Will Go On'?" },
    { "Nirvana": "What band, led by Kurt Cobain, helped popularize grunge music in the 90s?" },
    { "Michael Jordan": "Who led the Chicago Bulls to six NBA championships in the 90s?" },
    { "Beavis and Butt-Head": "What animated MTV show featured two dimwitted teenagers making fun of music videos?" },
    { "The X-Files": "What sci-fi TV show followed FBI agents Mulder and Scully investigating paranormal cases?" },
    { "Goosebumps": "What series of children's horror books was written by R.L. Stine?" },
    { "Spice Girls": "What British girl group popularized the phrase 'Girl Power'?" },
    { "Boy Meets World": "What coming-of-age sitcom followed Cory Matthews from middle school to marriage?" },
    { "Home Alone": "What 1990 Christmas movie starred Macaulay Culkin as a kid defending his house from burglars?" },
    { "Rugrats": "What Nickelodeon cartoon featured babies named Tommy, Chuckie, Phil, Lil, and Angelica?" },
    { "Saved by the Bell": "What TV show followed a group of high school students at Bayside High?" },
    { "Furby": "What electronic toy, released in 1998, resembled a small owl and could 'learn' to speak?" },
    { "TRL": "What MTV show, hosted by Carson Daly, featured a daily countdown of music videos?" },
    { "Pogs": "What 90s collectible game involved stacking and flipping small cardboard discs?" },
    { "Super Nintendo": "What gaming console, released in 1991, was the successor to the NES?" },
    { "The Macarena": "What dance craze, based on a Spanish song, swept the U.S. in the mid-90s?" },
    { "The Backstreet Boys": "What boy band had hits like 'I Want It That Way' and 'Larger Than Life'?" },
    { "Blockbuster": "What video rental chain was a staple of Friday nights in the 90s?" },
    { "Beanie Babies": "What stuffed animal collectibles were a massive craze in the 90s?" },
    { "Pokémon": "What Japanese franchise, introduced in the 90s, featured creatures like Pikachu and Charizard?" },
    { "Tamagotchi": "What digital pet required feeding, cleaning, and playing to keep it alive?" },
    { "The Matrix": "What 1999 sci-fi film starred Keanu Reeves as a hacker who discovers reality is a simulation?" },
    { "Jerry Springer": "What talk show became infamous for its fights and dramatic confrontations?" },
    { "O.J. Simpson": "Whose 1995 murder trial became one of the most-watched television events of the decade?" },
    { "Seinfeld": "What sitcom, known as 'a show about nothing,' starred Jerry Seinfeld and ran from 1989 to 1998?" },
    { "Y2K": "What feared computer bug was expected to cause chaos on January 1, 2000?" },
    { "Troll dolls": "What small, colorful-haired figurines were a popular toy in the 90s?" },
    { "Dunkaroos": "What 90s snack consisted of cookies that you dipped into frosting?" },
    { "Nintendo 64": "What gaming console, released in 1996, featured games like GoldenEye 007 and Super Mario 64?" },
    { "Power Rangers": "What kids' TV show featured teenagers transforming into color-coded superheroes?" },
    { "Lisa Frank": "What brand was known for colorful school supplies featuring unicorns and rainbows?" },
    { "Sega Genesis": "What 16-bit gaming console was the main competitor to the Super Nintendo?" },
    { "Goosebumps": "What book series by R.L. Stine terrified kids in the 90s?" },
    { "The Macarena": "What dance song became a worldwide phenomenon in the mid-90s?" },
    { "Tony Hawk": "What professional skateboarder made the '900' famous?" },
    { "Game Boy": "What handheld gaming system was introduced by Nintendo in 1989 and remained popular throughout the 90s?" },
    { "Daria": "What MTV animated series featured a sarcastic teenager navigating high school?" },
    { "Hanson": "What band of three brothers released the hit song 'MMMBop' in 1997?" },
    { "No Doubt": "What band, fronted by Gwen Stefani, had hits like 'Don't Speak' and 'Just a Girl'?" },
    { "Furbies": "What small electronic pet toy, released in 1998, spoke its own language and learned English?" },
    { "Sonic the Hedgehog": "What blue video game character was Sega's mascot?" },
    { "Bop It": "What handheld game required players to twist, pull, and bop different components in rhythm?" },
    { "Nickelodeon": "What TV network aired shows like 'Doug,' 'Rugrats,' and 'Are You Afraid of the Dark?'" },
    { "TLC": "What girl group released 'Waterfalls' and 'No Scrubs'?" },
    { "Titanic": "What 1997 film featured Leonardo DiCaprio and Kate Winslet in a doomed romance?" },
    { "Pogs": "What circular cardboard game pieces were collected and played with in the 90s?" },
    { "Animaniacs": "What animated show featured Yakko, Wakko, and Dot causing chaos?" }


]
