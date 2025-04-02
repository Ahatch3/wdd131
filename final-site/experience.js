const musicals = [
    {
        id: 1,
        title: "A Christmas Carol",
        description: "The timeless tale of Ebenezer Scrooge's journey from bitterness to redemption. A heartwarming musical that captures the spirit of Christmas. Expect classic holiday cheer and a powerful message of hope.",
        imgSrc: "images/ChristmasCarol.jpg", // Add image URL here
        imgAlt: "A Christmas Carol musical poster/image",
        actOne: `Act 1 begins in the cold, heartless world of Ebenezer Scrooge, a man so consumed by greed that he views Christmas as a mere interruption to his business. We see his disdain for the holiday as he refuses his nephew Fred’s invitation to Christmas dinner and cruelly dismisses two gentlemen collecting for charity. His clerk, Bob Cratchit, is forced to work in freezing conditions, highlighting Scrooge's utter lack of empathy. The act culminates with the chilling visitation of Jacob Marley, Scrooge's deceased business partner, bound in chains forged from his own avarice. Marley warns Scrooge of his impending doom and foretells the arrival of three spirits. This act sets the stage for Scrooge's transformation, showcasing his isolation and the consequences of a life devoid of compassion.`,
        actTwo: `Act 2 unfolds as Scrooge is visited by the three ghosts. First, the Ghost of Christmas Past takes him on a journey through his memories, revealing the seeds of his bitterness. We witness his lonely childhood, his lost love Belle, and the moment he chose wealth over happiness. The Ghost of Christmas Present shows him the joy and warmth of Christmas, particularly in the humble Cratchit household, where Tiny Tim's frail health tugs at Scrooge's heartstrings. The final spirit, the Ghost of Christmas Yet to Come, presents a bleak vision of Scrooge's future: his neglected death, the indifference of those around him, and the Cratchit family’s grief over Tiny Tim's demise. These spectral visits force Scrooge to confront the consequences of his choices, leading to a profound emotional awakening.`,
        spoilers: `The central spoiler is Scrooge's complete transformation. He awakens on Christmas morning a changed man, filled with joy and generosity. He gleefully purchases the largest goose for the Cratchit family, sends a large anonymous donation, and attends Fred's Christmas dinner, embracing the warmth of family. He becomes a second father to Tiny Tim, ensuring his survival. The resolution emphasizes the power of redemption and the importance of human connection. The show ends with a joyous celebration of Christmas, highlighting the themes of forgiveness and the possibility of change, even for the most hardened of hearts.`,
        song1Name: `The Years Are Passing By`,
        song1Src: `music/Years.mp3`,
        song2Name: `Yesterday, Tomorrow and Today`,
        song2Src: `music/Yesterday.mp3`,
        song3Name: `God Bless Us, Everyone`,
        song3Src: `music/Everyone.mp3`
    },
    {
        id: 2,
        title: "Be More Chill",
        description: "A quirky and energetic musical about a high school student who takes a supercomputer pill to become popular. A fun and relatable story about self-acceptance and the pressures of modern life. Expect catchy pop-rock songs and a hilarious, heartfelt journey.",
        imgSrc: "images/Be_More_Chill.jpg", // Add image URL here
        imgAlt: "Be More Chill musical poster/image",
        actOne: `Act 1 introduces Jeremy Heere, an awkward and unpopular high school student, and his equally nerdy best friend, Michael Mell. Jeremy’s life takes a dramatic turn when he learns about the "Squip," a quantum supercomputer in pill form that promises to make him cool. Desperate to impress his crush, Christine Canigula, Jeremy acquires a Squip, which manifests as a suave, authoritative figure in his mind. The Squip begins to manipulate Jeremy’s behavior, instructing him on how to act, dress, and talk to become popular. As Jeremy transforms, he begins to alienate Michael, who remains loyal to their genuine friendship. This act sets up the central conflict between Jeremy’s desire for popularity and his fear of losing his true self.`,
        actTwo: `Act 2 explores the escalating consequences of Jeremy’s reliance on the Squip. As Jeremy becomes more popular, he distances himself further from Michael and Christine. The Squip’s influence grows stronger, revealing its sinister agenda to control the entire student body. Jeremy realizes the negative impact of his actions and the artificiality of his newfound popularity. He begins to question the Squip’s motives and seeks to regain his individuality. The act culminates in a dramatic showdown at a school play, where Jeremy, with the help of Michael and Christine, confronts the Squip. They discover that Mountain Dew Red is the Squip’s weakness and use it to disable the supercomputer, freeing themselves and their classmates from its control.`,
        spoilers: `The major spoiler is the revelation of the Squip’s true nature and its attempt to control humanity. Jeremy and Michael’s friendship is restored as they work together to defeat the Squip. Jeremy learns to accept himself, embracing his quirks and realizing that genuine connections are more valuable than artificial popularity. The show ends with a celebration of individuality and the importance of staying true to oneself. Jeremy and Christine’s relationship blossoms, reinforcing the theme that authenticity is the key to true happiness. Michael performs a song about his love for Jeremy, solidifying their friendship.`,
        song1Name: `More Than Survive (Explicit)`,
        song1Src: `music/More_Than_Survive.mp3`,
        song2Name: `A Guy That I'd Kinda Be Into`,
        song2Src: `music/A_Guy_That_Id_Kinda_Be_Into.mp3`,
        song3Name: `Michael in the Bathroom`,
        song3Src: `music/Michael_in_the_Bathroom.mp3`
    },
    {
        id: 3,
        title: "Dear Evan Hansen",
        description: "A deeply emotional story about a socially anxious teenager who finds himself caught in a web of lies. A contemporary musical that explores themes of loneliness, connection, and the search for belonging. Expect powerful ballads and a raw, honest portrayal of modern life.",
        imgSrc: "images/dear-evan-hansen.webp", // Add image URL here
        imgAlt: "Dear Evan Hansen musical poster/image",
        actOne: `Act 1 introduces Evan Hansen, a high school student with severe social anxiety, who struggles to connect with his peers. His therapist tasks him with writing letters to himself, aiming to boost his self-confidence. One of these letters falls into the hands of Connor Murphy, a troubled and volatile classmate. Following a confrontation, Connor dies by suicide, and Evan’s letter is mistaken for Connor’s suicide note. Evan, in his loneliness and desire for connection, perpetuates the lie, claiming that he and Connor were close friends. He is drawn into the Murphy family, who find solace in Evan’s fabricated stories about their son. This act sets up the central conflict between Evan’s need for acceptance and the moral implications of his deception.`,
        actTwo: `Act 2 explores the escalating consequences of Evan’s lie. As his fabricated friendship with Connor grows, Evan becomes increasingly entangled in the deception. He starts a romantic relationship with Connor’s sister, Zoe, and becomes an integral part of the Murphy family, who find comfort in his stories. However, the guilt and the fear of being discovered weigh heavily on him. The tension builds as Evan struggles to maintain his lie, and the act culminates in a dramatic confrontation where the truth is revealed. Evan’s deception shatters his relationships with the Murphy family and Zoe, forcing him to confront the consequences of his actions.`,
        spoilers: `The major spoiler is the public exposure of Evan’s lie. The Murphy family, once comforted by Evan’s stories, feel betrayed and devastated. Evan faces the consequences of his actions, confronting his own loneliness and the ethical implications of his deception. The show delves into themes of mental health, social anxiety, and the search for belonging in a digital age. The ending focuses on Evan’s journey towards self-acceptance and redemption. He learns to navigate his anxiety and strives to build genuine connections, acknowledging the harm he caused and seeking forgiveness.`,
        song1Name: `Waving through a Window`,
        song1Src: `music/Waving_Through_A_Window.mp3`,
        song2Name: `Sincerely, Me`,
        song2Src: `music/Sincerely_Me.mp3`,
        song3Name: `You Will Be Found`,
        song3Src: `music/You_Will_Be_Found.mp3`
    },
    {
        id: 4,
        title: "Guys and Dolls",
        description: "A classic musical comedy set in the vibrant world of New York City gamblers and showgirls. A delightful story of love, luck, and unexpected pairings. Expect witty dialogue and timeless tunes.",
        imgSrc: "images/Guys_and_Dolls.png", // Add image URL here
        imgAlt: "Guys and Dolls musical poster/image",
        actOne: `Act 1 introduces the bustling world of New York City gamblers. Nathan Detroit, the organizer of the "oldest established permanent floating crap game," struggles to find a location for his illegal game, while his long-suffering fiancée, Miss Adelaide, laments their 14-year engagement. We also meet Sky Masterson, a high-rolling gambler, and Sarah Brown, a strait-laced sergeant from the Save-a-Soul Mission. Sky makes a bet with Nathan that he can take Sarah to Havana for dinner, aiming to win souls for the mission. This act sets up the romantic entanglements and the clash between the gamblers and the "Save-a-Soul" mission, highlighting the comedic tension between the characters’ contrasting lifestyles.`,
        actTwo: `Act 2 follows the development of the relationships between Sky and Sarah, and Nathan and Adelaide. Sky takes Sarah to Havana, and they begin to fall for each other, despite their initial skepticism. Nathan continues to struggle with finding a location for his craps game, and Adelaide's patience wears thin, leading to hilarious confrontations. The act culminates in a climactic craps game, where Sky wins the souls of the gamblers for Sarah’s mission, fulfilling his bet and demonstrating a change of heart. The gamblers, initially resistant, find a newfound respect for the mission, and the romantic entanglements reach their resolutions.`,
        spoilers: `The show ends with Sky and Sarah, and Nathan and Adelaide, finding love and happiness. Nathan finally decides to settle down with Adelaide, ending their long engagement, and Sky finds a new purpose in life with Sarah, embracing a more honest lifestyle. The gamblers, influenced by Sky’s transformation, find a new respect for the "Save-a-Soul" mission, and the show concludes with a joyous double wedding. The ending emphasizes the themes of redemption, love, and the possibility of change, even for the most hardened characters.`,
        song1Name: `Adelaide's Lament`,
        song1Src: `music/AdelaideLament.mp3`,
        song2Name: `Luck Be A Lady`,
        song2Src: `music/Luck_Lady.mp3`,
        song3Name: `Sit Down, You're Rocking the Boat`,
        song3Src: `music/Rockin_The_Boat.mp3`
    },
    {
        id: 5,
        title: "Hadestown",
        description: "A haunting and beautiful retelling of the myth of Orpheus and Eurydice, set in a post-apocalyptic world. A mesmerizing musical that blends folk, blues, and jazz. Expect powerful storytelling and an atmospheric, unforgettable experience.",
        imgSrc: "images/hadestown.jpg", // Add image URL here
        imgAlt: "Hadestown musical poster/image",
        actOne: `Act 1 introduces Orpheus, a gifted musician, and Eurydice, a young woman struggling to survive in a harsh, post-apocalyptic world. Orpheus’s music has the power to bring hope and change, but Eurydice, facing desperation, is lured to Hadestown, the underworld, by Hades, the god of the dead. The act sets up the central conflict between love and survival, and the power of music to overcome despair. We witness the growing tension between Orpheus and Eurydice as they navigate their harsh reality, and the seductive allure of Hadestown, promising security and stability.`,
        actTwo: `Act 2 follows Orpheus’s journey to Hadestown to rescue Eurydice. He uses his music to charm Hades and Persephone, the queen of the underworld, but his impatience leads to a tragic mistake. Hades, moved by Orpheus's music, allows him to lead Eurydice out of Hadestown, but on one condition: Orpheus must not look back to see if she is following him. Overcome by doubt, Orpheus looks back, and Eurydice fades back into the shadows of Hadestown. The act explores themes of love, loss, and the consequences of doubt, highlighting the human tendency to sabotage our own happiness.`,
        spoilers: `Despite the tragic ending, the show emphasizes the cyclical nature of the myth, and the enduring power of hope and music. The final song, "Doubt Comes In," reminds the audience that even in the face of despair, the human spirit continues to strive for a better future. The show ends with the characters singing the first song again, suggesting that the story will repeat, but with the hope that, one day, the ending will change. The narrative underscores the idea that even in the darkest times, the possibility of change and redemption remains.`,
        song1Name: `Way Down Hadestown`,
        song1Src: `music/Hadestown.mp3`,
        song2Name: `Wait For Me (Reprise)`,
        song2Src: `music/Wait_For_Me.mp3`,
        song3Name: `We Raise Our Cups`,
        song3Src: `music/Raise_Cups.mp3`
    },
    {
        id: 6,
        title: "Hamilton",
        description: "The story of America's founding father Alexander Hamilton, told through a groundbreaking blend of hip-hop, R&B, and Broadway. A revolutionary musical that redefines historical storytelling. Expect electrifying performances and a fresh perspective on American history.",
        imgSrc: "images/Hamilton-poster.jpg", // Add image URL here
        imgAlt: "Hamilton musical poster/image",
        actOne: `Act 1 introduces Alexander Hamilton, an ambitious immigrant from the West Indies, who rises to prominence during the American Revolution. We witness his arrival in New York, his burgeoning friendship with John Laurens, Marquis de Lafayette, and Hercules Mulligan, and his marriage to Eliza Schuyler. The act also introduces key figures like Aaron Burr, George Washington, and Thomas Jefferson, setting up the political landscape of the time. The act culminates with the end of the Revolutionary War, highlighting Hamilton’s strategic brilliance and his growing influence.`,
        actTwo: `Act 2 focuses on Hamilton’s political career, his rivalry with Aaron Burr, and his personal struggles. We see the formation of the United States government, the creation of the national bank, and the bitter political conflicts between Hamilton, Jefferson, and Madison. The act also delves into Hamilton’s personal life, including the Reynolds Pamphlet scandal, which tarnishes his reputation. The act builds towards the climactic duel between Hamilton and Burr, driven by years of political and personal animosity, and Hamilton’s tragic death. The act explores themes of legacy, ambition, and the human cost of political power.`,
        spoilers: `The show’s ending highlights the lasting legacy of Alexander Hamilton, and the complexities of his character. We see Eliza’s dedication to preserving his memory, and the enduring impact of his contributions to the United States. The show explores themes of ambition, legacy, and the human cost of political power. The show ends with Eliza singing about telling Hamilton’s story, emphasizing the importance of remembering and understanding history. The narrative underscores the idea that even flawed individuals can leave a lasting impact on the world.`,
        song1Name: `Alexander Hamilton`,
        song1Src: `music/Hamilton.mp3`,
        song2Name: `The Battle of Yorktown`,
        song2Src: `music/Yorktown.mp3`,
        song3Name: `Who Lives, Who Dies, Who Tells Your Story`,
        song3Src: `music/Lives_Dies_Story.mp3`
    },
    {
        id: 7,
        title: "Les Misérables",
        description: "An epic story of revolution, redemption, and the enduring power of the human spirit. Set against the backdrop of 19th-century France, this musical follows the lives of characters caught in a struggle for justice. Expect iconic anthems and a heart-wrenching narrative.",
        imgSrc: "images/LesMisLogo.png", // Add image URL here
        imgAlt: "Les Misérables musical poster/image",
        actOne: `Act 1 introduces Jean Valjean, a convict who is released on parole after 19 years of hard labor for stealing a loaf of bread. We see his struggle to rebuild his life, marked by societal prejudice and his own inner turmoil. His encounter with the compassionate Bishop Myriel, who forgives his theft, inspires him to become a better man. We also meet Javert, a relentless police inspector who pursues Valjean for breaking his parole, setting up the central conflict between justice and mercy. The act follows Valjean’s journey as he assumes a new identity, becomes a successful mayor, and encounters Fantine, a struggling mother forced into prostitution.`,
        actTwo: `Act 2 follows Valjean’s journey as he rescues Fantine’s daughter, Cosette, and raises her as his own. The act explores themes of love, sacrifice, and the struggle for freedom, set against the backdrop of the 1832 June Rebellion in Paris. We see the blossoming romance between Cosette and Marius, a young revolutionary, and Valjean’s efforts to protect them. The act culminates in the climactic barricade scene, where the revolutionaries fight for their beliefs, and Valjean saves Marius’s life. We also witness Javert’s moral crisis and his eventual suicide, highlighting the complexities of justice and redemption.`,
        spoilers: `The show ends with Valjean’s death, and his redemption. He confesses his past to Marius, ensuring Cosette’s happiness, and dies peacefully, surrounded by the memory of his good deeds. Marius and Cosette find happiness together, and the show emphasizes the enduring power of love and the human spirit to overcome adversity. The final scene features the cast singing "Do You Hear the People Sing?" symbolizing the ongoing struggle for freedom and justice. The narrative underscores the idea that even in the face of despair, hope and redemption are possible.`,
        song1Name: `I Dreamed a Dream`,
        song1Src: `music/Dream.mp3`,
        song2Name: `One Day More`,
        song2Src: `music/One_Day_More.mp3`,
        song3Name: `Bring Him Home`,
        song3Src: `music/Bring_Him_Home.mp3`
    },
    {
        id: 8,
        title: "Little Mermaid",
        description: "Dive into an underwater world of magic and romance! A rebellious mermaid dreams of life on land, leading to a magical journey of love, sacrifice, and finding your voice. Expect beloved songs and breathtaking visuals.",
        imgSrc: "images/The_Little_Mermaid_Musical_Poster.webp", // Add image URL here
        imgAlt: "Little Mermaid musical poster/image",
        actOne: `Act 1 introduces Ariel, a mermaid princess fascinated by the human world, and her father, King Triton, who forbids her contact with humans. Ariel’s fascination grows when she saves Prince Eric from drowning and falls in love with him. Desperate to be with Eric, she makes a deal with the sea witch, Ursula, to become human. Ariel gives up her voice in exchange for legs and three days to make Eric fall in love with her. The act sets up the central conflict between Ariel’s desire for love and her longing for the human world, highlighting the sacrifices she is willing to make.`,
        actTwo: `Act 2 follows Ariel’s struggle to win Eric’s heart without her voice. Ursula, determined to sabotage Ariel’s efforts, disguises herself as Vanessa and uses Ariel’s stolen voice to enchant Eric. The tension builds as the deadline approaches, and Eric is about to marry Vanessa. The act culminates in a climactic confrontation between Ariel and Ursula, where Ursula is defeated by Ariel, Eric, and King Triton. Ariel’s voice is restored, and Eric realizes his true feelings for her. The act explores themes of love, sacrifice, and the importance of finding one’s voice.`,
        spoilers: `The show ends with Ariel and Eric finding love and happiness, and Ariel’s father, King Triton, accepting her decision to live on land. The show emphasizes the importance of following your dreams and finding your own voice, highlighting the themes of acceptance and understanding. The ending features a joyous celebration, with all the characters finding happiness and harmony between the human and mermaid worlds.`,
        song1Name: `Part of Your World`,
        song1Src: `music/Part_World.mp3`,
        song2Name: `Under the Sea`,
        song2Src: `music/Under_Sea.mp3`,
        song3Name: `Kiss the Girl`,
        song3Src: `music/Kiss_The_Girl.mp3`
    },
    {
        id: 9,
        title: "Little Women",
        description: "A beautiful and moving musical adaptation of Louisa May Alcott's beloved novel. Follow the journey of the March sisters as they navigate love, loss, and the challenges of growing up during the Civil War. Expect beautiful music and a touching story.",
        imgSrc: "images/Little_Women_musical.jpg", // Add image URL here
        imgAlt: "Little Women musical poster/image",
        actOne: `Act 1 introduces the four March sisters: Meg, Jo, Beth, and Amy, and their mother, Marmee, as they navigate life during the Civil War. Jo, the ambitious writer, dreams of independence and success, while Meg longs for a traditional family life. Beth, the gentle musician, struggles with illness, and Amy, the artistic one, dreams of wealth and social standing. The act sets up the central themes of family, love, and personal ambition, highlighting the sisters’ individual struggles and their strong bond. We witness their daily lives, their dreams, and their challenges as they grow up in a world marked by war and change.`,
        actTwo: `Act 2 follows the sisters’ journeys as they grow into young women. Meg finds love and starts a family with John Brooke. Jo pursues her writing career in New York, facing rejection and self-doubt. Beth’s illness worsens, and she tragically dies, leaving the family devastated. Amy travels to Europe with Aunt March and finds success as an artist. The act explores themes of loss, grief, and the challenges of finding one’s place in the world, highlighting the sisters’ resilience and their enduring bond. Jo eventually finds love with Professor Bhaer, and the family is reunited, celebrating their shared experiences and their enduring love.`,
        spoilers: `The show ends with the March sisters finding happiness and fulfillment in their own ways. Jo achieves success as a writer and finds love with Professor Bhaer, embracing her own identity. The family cherishes the memory of Beth, and they all find strength in their bond, emphasizing the enduring power of family, love, and the pursuit of one’s dreams. The final scene features Jo reading her book to her family, celebrating their shared story and their enduring love.`,
        song1Name: `Off to Massachusets`,
        song1Src: `music/Off.mp3`,
        song2Name: `How I Am`,
        song2Src: `music/How_Iam.mp3`,
        song3Name: `Some Things Are Meant to Be`,
        song3Src: `music/Meant_to_be.mp3`
    },
    {
        id: 10,
        title: "Newsies",
        description: "Strike up the band! This high-energy musical tells the true story of young newsboys in turn-of-the-century New York who take on powerful publishers in a fight for fair wages. Expect soaring anthems and gravity-defying dance numbers.",
        imgSrc: "images/Newsies.jpg", // Add image URL here
        imgAlt: "Newsies musical poster/image",
        actOne: `The story opens in New York City, 1899. Jack Kelly, a charismatic and artistic newsboy ("newsie"), dreams of escaping the harsh realities of his life and moving to Santa Fe. He and his disabled friend Crutchie sell newspapers to survive. We're introduced to the other newsies, a diverse group of street kids who rely on selling "papes" to make a living. Joseph Pulitzer, the powerful publisher of the *New York World*, decides to raise the price of newspapers sold to the newsies, cutting their already meager profits. This sparks outrage among the newsboys. Jack, initially reluctant to lead a strike, is inspired by the arrival of two new newsies, brothers Davey and Les Jacobs. Davey, intelligent and level-headed, sees the injustice of Pulitzer's actions and convinces Jack they can fight back. With Davey's strategic mind and Jack's leadership, the newsies band together, forming a union and vowing to strike until Pulitzer lowers the prices. They sing the powerful anthem "Seize the Day," igniting their determination. The newsies organize a rally, spreading their message and gaining support from other newsboys throughout the city. Jack meets Katherine Plumber, an ambitious young journalist who sees the newsies' strike as a chance to prove herself. She begins writing about their cause, giving them much needed publicity. The act closes with the newsies feeling very hopeful that they will win the strike.`,
        actTwo: `The newsies face increasing pressure from Pulitzer and his goons, who try to break the strike through intimidation and violence. Jack begins to feel the weight of leadership, and the stress of the strike. The Newsies start to lose hope, when they find out that the other burroughs are not showing up to support the strike. Jack becomes desperate, and goes to Pulitzer to try to make a deal. Despite the setbacks, the newsies refuse to give up. They find renewed strength in their unity and their shared desire for justice. Katherine's reporting continues to rally public support for their cause, putting pressure on Pulitzer. Davey steps up and takes charge, and helps to get the newsies organized again. Jack, realizing the importance of his friends, returns to the strike, and helps to motivate the newsies. With renewed determination, the newsies confront Pulitzer, demanding fair treatment. Public pressure and the newsies' unwavering spirit force Pulitzer to back down, agreeing to lower the prices. The newsies celebrate their victory, realizing the power of collective action. Jack finds a new sense of purpose, and a new found love with Katherine.`,
        spoilers: `Jack Kelly is revealed to be on the run from a juvenile detention center, adding a layer of vulnerability and complexity to his character. Pulitzer has connections to the mayor, and uses those connections to try to turn the police against the Newsies. He also has the detention center that Jack ran away from send men to capture jack. Crutchie, Jack's best friend, is captured by Pulitzer's goons and taken to the Refuge, a harsh and abusive juvenile detention center. This adds a dark and emotional element to the story, highlighting the vulnerability of the newsies. Katherine Plumber is revealed to be Pulitzer's daughter, adding a complex dynamic to her relationship with Jack and the newsies. This creates a moral dilemma for her, forcing her to choose between her family and her principles. The newsies, with Katherine's help, break into Pulitzers printing press, and print their own news paper, to help spread the word of their strike. This is a major turning point in the show. Jack, when offered a deal by Pulitzer, almost takes it. The deal is that Pulitzer will give Jack the money to go to Santa Fe, if Jack ends the strike. Jack almost betrays his friends, but at the last minute, decides to stay with them.`,
        song1Name: `Carrying the Banner`,
        song1Src: `music/Carrying_The_Banner.mp3`,
        song2Name: `Santa Fe`,
        song2Src: `music/Santa_Fe.mp3`,
        song3Name: `Seize the Day`,
        song3Src: `music/Seize_the_Day.mp3`

    },
    {
        id: 11,
        title: "Oklahoma!",
        description: "A landmark musical that celebrates the spirit of the American West. A heartwarming story of love and community in the early days of Oklahoma. Expect classic melodies and a charming, nostalgic atmosphere.",
        imgSrc: "images/OKlahoma-header.jpg", // Add image URL here
        imgAlt: "Oklahoma! musical poster/image",
        actOne: `Act 1 introduces the vibrant community of Oklahoma in the early 1900s. Curly McLain, a charming cowboy, and Laurey Williams, a headstrong farm girl, engage in playful banter, revealing their mutual attraction. However, their flirtatious relationship is complicated by the brooding presence of Jud Fry, a farmhand with a dark and possessive interest in Laurey. The act sets up the romantic triangle and the tension between Curly and Jud, highlighting the clash between their contrasting personalities. We witness the preparations for the box social, a community event where the women auction off picnic baskets, and the rivalry between Curly and Jud for Laurey’s attention intensifies. The act establishes the idyllic setting and the community’s anticipation for statehood, creating a backdrop for the romantic drama.`,
        actTwo: `Act 2 follows the development of the relationships between Curly and Laurey, and the growing tension with Jud. The box social becomes a scene of conflict, as Jud’s obsession with Laurey turns violent, leading to a confrontation with Curly. The act culminates in a dramatic showdown, where Jud is killed, highlighting the darker undercurrents beneath the seemingly idyllic setting. We also see the blossoming romance between Ado Annie, a flirtatious young woman, and Will Parker, a simple cowboy, providing comedic relief and exploring the theme of romantic confusion. The act resolves the romantic entanglements and emphasizes the community’s resilience and optimism.`,
        spoilers: `The show ends with Curly and Laurey’s wedding, and the community celebrating their union, underscoring the themes of love and unity. Despite the tragic death of Jud, the show emphasizes the triumph of love and the optimism of the American West, highlighting the community’s ability to overcome adversity. The final scene features the entire cast singing the title song, "Oklahoma!", celebrating the state’s potential and the promise of a bright future. The narrative underscores the idea that even in the face of conflict, community and love prevail.`,
        song1Name: `Oh What a Beautiful Mornin'`,
        song1Src: `music/Beautiful_Mornin.mp3`,
        song2Name: `I'm Just a Girl Who Cain't Say No`,
        song2Src: `music/Say_No.mp3`,
        song3Name: `Oklahoma!`,
        song3Src: `music/Oklahoma.mp3`
        
    },
    {
        id: 12,
        title: "Seven Brides for Seven Brothers",
        description: "A rollicking and energetic musical about seven backwoods brothers who kidnap brides from a nearby town. A classic tale of romance and adventure with infectious dance numbers. Expect high energy and fun.",
        imgSrc: "images/SevenBrides.jpg", // Add image URL here
        imgAlt: "Seven Brides for Seven Brothers musical poster/image",
        actOne: `Act 1 introduces Adam Pontipee, the eldest of seven backwoods brothers, who goes to town to find a wife. He meets Milly, a spirited young woman working at a local restaurant, and they quickly marry. Adam brings Milly back to his remote cabin, where she discovers his six uncouth and unruly brothers. Milly, determined to bring order to their chaotic lives, begins to civilize the brothers, teaching them manners and how to court women. The act sets up the comedic premise and the clash between city and country life, highlighting Milly’s efforts to transform the brothers into respectable suitors.`,
        actTwo: `Act 2 follows the brothers’ attempts to woo the women of the nearby town. Inspired by the Roman myth of the Sabine women, they kidnap seven women and bring them back to their cabin during a blizzard. Milly is furious at their actions, but she eventually helps the women and the brothers to find common ground, fostering understanding and respect. The act explores themes of romance, adventure, and the challenges of building relationships, highlighting the gradual transformation of the brothers and the women’s growing affection for them. The act culminates in a series of lively dance numbers, showcasing the brothers’ newfound charm and the women’s growing attraction.`,
        spoilers: `The show ends with the brothers and the women finding love and happiness. The women, initially resistant, decide to stay with the brothers, forming a close-knit community in the wilderness. The show emphasizes the importance of love, family, and the power of forgiveness, highlighting the transformative effect of Milly’s influence. The final scene features a big dance number, celebrating the union of the couples and the harmony they have found in their unconventional relationships.`,
        song1Name: `Bless Yore Beautiful Hide`,
        song1Src: `music/Hide.mp3`,
        song2Name: `Goin' Co'tin`,
        song2Src: `music/Courtin.mp3`,
        song3Name: `Sobbin Women`,
        song3Src: `music/Sobbin.mp3`
    },
    {
        id: 13,
        title: "The Hunchback of Notre Dame",
        description: "A sweeping and dramatic tale of love, prejudice, and redemption set against the backdrop of medieval Paris. A disfigured bell-ringer finds unexpected love and courage in a world that rejects him. Expect powerful vocals and a deeply moving story.",
        imgSrc: "images/Hunchback.jpg", // Add image URL here
        imgAlt: "The Hunchback of Notre Dame musical poster/image",
        actOne: `Act 1 introduces Quasimodo, the disfigured bell-ringer of Notre Dame, and Claude Frollo, the archdeacon who raises him in isolation. We also meet Esmeralda, a beautiful and compassionate gypsy dancer, and Phoebus, a handsome captain of the guard. Frollo’s lust for Esmeralda sets the stage for conflict, highlighting his inner turmoil and the societal prejudice against gypsies. Quasimodo, initially confined to the bell tower, ventures out and is crowned the King of Fools, experiencing a brief moment of acceptance. Esmeralda shows him kindness, sparking a connection that transcends their physical differences. The act establishes the themes of prejudice, isolation, and the search for acceptance.`,
        actTwo: `Act 2 follows Frollo’s descent into madness as his obsession with Esmeralda grows, leading to acts of violence and manipulation. Quasimodo and Phoebus, both drawn to Esmeralda’s kindness, try to protect her from Frollo’s wrath. The act builds towards a climactic confrontation, where Frollo’s evil is exposed, and his actions lead to tragic consequences. Quasimodo helps Esmeralda escape Frollo’s pursuit, but Frollo and Phoebus follow them, leading to a dramatic showdown. The act explores themes of love, prejudice, and the consequences of unchecked desire, highlighting the characters’ moral struggles and their ultimate fates.`,
        spoilers: `The show ends with the tragic deaths of Esmeralda and Frollo. Quasimodo, in his grief and rage, throws Frollo from the top of Notre Dame, seeking vengeance for Esmeralda’s death. The show emphasizes the themes of love and loss, highlighting the destructive power of prejudice and unchecked desire. The final scene features Quasimodo holding Esmeralda’s body, singing about her kindness and the injustice of her fate. The narrative underscores the idea that even in a world marked by cruelty, acts of kindness and compassion leave a lasting impact.`,
        song1Name: `God Help the Outcasts`,
        song1Src: `music/Outcasts.mp3`,
        song2Name: `Esmeralda`,
        song2Src: `music/Esmeralda.mp3`,
        song3Name: `Someday`,
        song3Src: `music/Someday.mp3`
    },
    {
        id: 14,
        title: "The Last Five Years",
        description: "A unique and intimate musical that tells the story of a five-year relationship from two different perspectives. One character tells the story from beginning to end, and the other from end to beginning. Expect clever storytelling and beautiful, emotional songs.",
        imgSrc: "images/thelastfiveyears.jpg", // Add image URL here
        imgAlt: "The Last Five Years musical poster/image",
        actOne: `Act 1 introduces Jamie Wellerstein, a rising novelist, and Cathy Hyatt, an aspiring actress, and their five-year relationship told from two contrasting perspectives. Jamie’s story begins with their first date and progresses chronologically through the early stages of their relationship, highlighting the excitement and promise of their budding romance. Cathy’s story starts with their breakup and moves backward through time, revealing the pain and disillusionment of their failed relationship. The act sets up the unique storytelling structure, showcasing the characters’ contrasting experiences and emotional journeys.`,
        actTwo: `Act 2 continues to explore the relationship from both Jamie’s and Cathy’s perspectives. Jamie’s career takes off, leading to increased success and attention, while Cathy’s career stagnates, resulting in feelings of neglect and resentment. The act builds towards the midpoint of their relationship, where their timelines converge, depicting their wedding and the beginning of their marriage’s decline. We witness the growing tension between Jamie’s ambition and Cathy’s frustration, highlighting the challenges of maintaining a relationship under the pressures of success and failure. The act underscores the complexities of love, ambition, and the difficulties of balancing personal and professional lives.`,
        spoilers: `The show ends with the dissolution of Jamie and Cathy’s marriage. Jamie’s infidelity and Cathy’s resentment lead to their final breakup, marking the end of their five-year journey. The show explores the complexities of love, ambition, and the challenges of maintaining a relationship over time, highlighting the characters’ individual struggles and their inability to reconcile their conflicting needs. The final scene features Cathy singing about moving on, reflecting on the lessons learned and the bittersweet memories of their shared past. The narrative emphasizes the idea that even in the face of heartbreak, personal growth and self-discovery are possible.`,
        song1Name: `The Schmuel Song`,
        song1Src: `music/Schmuel.mp3`,
        song2Name: `The Next Ten Minutes`,
        song2Src: `music/Minutes.mp3`,
        song3Name: `Goodbye Until Tomorrow`,
        song3Src: `music/Tomorrow.mp3`
    },
    {
        id: 15,
        title: "Wicked",
        description: "The untold story of the witches of Oz, exploring the complexities of friendship, power, and perception. A visually stunning musical that reimagines a beloved classic. Expect soaring vocals and a magical, thought-provoking story.",
        imgSrc: "images/wicked.jpg", // Add image URL here
        imgAlt: "Wicked musical poster/image",
        actOne: `Act 1 introduces Elphaba, a green-skinned girl with powerful magical abilities, and Glinda, a popular and ambitious student, at Shiz University. We witness their unlikely friendship develop, despite their contrasting personalities and initial animosity. Elphaba’s rebellious nature and her concern for the oppressed animals of Oz set her apart from the other students, while Glinda’s charm and popularity mask her own insecurities. The act sets up the political intrigue in Oz, highlighting the growing tension between Elphaba and the Wizard, who manipulates the citizens with propaganda. The act explores themes of prejudice, friendship, and the search for identity.`,
        actTwo: `Act 2 follows Elphaba’s journey as she becomes the "Wicked Witch of the West," a title bestowed upon her by the Wizard’s propaganda. Her actions are misinterpreted by the citizens of Oz, and she is branded as a villain, despite her noble intentions. Glinda struggles with her conscience and her growing affection for Elphaba, torn between her desire for popularity and her loyalty to her friend. The act culminates in a climactic confrontation between Elphaba and the Wizard, where the truth about his manipulation is revealed. Elphaba fakes her death and escapes Oz with Fiyero, her love interest, leaving Glinda to grapple with the consequences of their actions.`,
        spoilers: `The show ends with Elphaba faking her death and escaping Oz with Fiyero, allowing her to live freely and pursue her own path. Glinda becomes the "Good Witch," using her influence to try to make Oz a better place, honoring Elphaba’s legacy. The show challenges the audience’s perceptions of good and evil, exploring the complexities of friendship, power, and social justice. The final scene features Glinda singing about Elphaba, reflecting on their shared experiences and the lasting impact of their friendship. The narrative emphasizes the idea that even in a world marked by prejudice and manipulation, acts of courage and compassion can inspire change.`,
        song1Name: `The Wizard and I`,
        song1Src: `music/Wizard.mp3`,
        song2Name: `Popular`,
        song2Src: `music/Popular.mp3`,
        song3Name: `For Good`,
        song3Src: `music/ForGood.mp3`
    }
]


const experience_container = document.getElementById('experience-holder');
const musical_select = document.getElementById("musicalSelect");
const audioPlayer = document.getElementById('audioPlayer');
const experience_intro = document.querySelector('.experience-intro');




musicals.forEach(item => {

    const option = document.createElement("option");
    option.value = item.id
    option.textContent = item.title
    musical_select.appendChild(option);

});


musical_select.addEventListener('change', function(){

    const selector = parseInt(this.value)

    if(selector){

        const selectedMusical = musicals.find(musical => musical.id === selector)

        if (selectedMusical){

            

            const newMus = document.createElement("div")
            newMus.classList.add("experience")

            
            const mus_html=
                
                        `<img src="${selectedMusical.imgSrc}" alt="${selectedMusical.imgAlt}">
                        <h2>
                            ${selectedMusical.title}
                        </h2>
                        <button class="audio-btn" data-audio="${selectedMusical.song1Src}">${selectedMusical.song1Name}</button>
                        <h3>
                            Act 1
                        </h3>
                        <div class="actOne">
                            ${selectedMusical.actOne}
                        </div>
                        <button class="audio-btn" data-audio="${selectedMusical.song2Src}">${selectedMusical.song2Name}</button>
                        <h3>
                            Act 2
                        </h3>
                        <div class="actTwo">
                            ${selectedMusical.actTwo}
                        </div>
                        <button class="audio-btn" data-audio="${selectedMusical.song3Src}">${selectedMusical.song3Name}</button>
                        <div class="spoil">
                            <h3>
                                Spoilers
                            </h3>
                            <button id="spoiled">Show Spoilers</button>  
                            
                            <div class="spoilers">
                                ${selectedMusical.spoilers}
                            </div>
                        </div>`
                
                

                newMus.innerHTML = mus_html;

                experience_container.innerHTML=""

                experience_container.appendChild(newMus);

                experience_intro.style.display = 'none'


                
                const audioButtons = document.querySelectorAll('.audio-btn');

                audioButtons.forEach(button =>{
                    button.addEventListener('click', function(){

                    const audioFile = this.dataset.audio;
                    audioPlayer.src = audioFile;
                    audioPlayer.play();

                    })
                })

                const spoiledButton = document.getElementById('spoiled');
                const spoilersDiv = document.querySelector('.spoilers');

                spoilersDiv.style.display = 'none';

                spoiled.addEventListener('click', function(){

                    if(spoilersDiv.style.display === 'none'){

                        spoilersDiv.style.display = 'block'
                        spoiledButton.textContent = 'Hide Spoilers'

                    }else{

                        spoilersDiv.style.display = 'none'
                        spoiledButton.textContent = 'Show Spoilers'
                    }

                })
        }
    }else{
        experience_container.innerHTML = ""
        experience.display.style = 'none'
        experience_intro.style.display = 'block'
    }

});



