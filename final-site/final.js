const musicals = [
    {
        id: 1,
        title: "A Christmas Carol",
        description: "The timeless tale of Ebenezer Scrooge's journey from bitterness to redemption. A heartwarming musical that captures the spirit of Christmas. Expect classic holiday cheer and a powerful message of hope.",
        imgSrc: "images/ChristmasCarol.jpg", // Add image URL here
        imgAlt: "A Christmas Carol musical poster/image"
    },
    {
        id: 2,
        title: "Be More Chill",
        description: "A quirky and energetic musical about a high school student who takes a supercomputer pill to become popular. A fun and relatable story about self-acceptance and the pressures of modern life. Expect catchy pop-rock songs and a hilarious, heartfelt journey.",
        imgSrc: "images/Be_More_Chill.jpg", // Add image URL here
        imgAlt: "Be More Chill musical poster/image"
    },
    {
        id: 3,
        title: "Dear Evan Hansen",
        description: "A deeply emotional story about a socially anxious teenager who finds himself caught in a web of lies. A contemporary musical that explores themes of loneliness, connection, and the search for belonging. Expect powerful ballads and a raw, honest portrayal of modern life.",
        imgSrc: "images/dear-evan-hansen.webp", // Add image URL here
        imgAlt: "Dear Evan Hansen musical poster/image"
    },
    {
        id: 4,
        title: "Guys and Dolls",
        description: "A classic musical comedy set in the vibrant world of New York City gamblers and showgirls. A delightful story of love, luck, and unexpected pairings. Expect witty dialogue and timeless tunes.",
        imgSrc: "images/Guys_and_Dolls.png", // Add image URL here
        imgAlt: "Guys and Dolls musical poster/image"
    },
    {
        id: 5,
        title: "Hadestown",
        description: "A haunting and beautiful retelling of the myth of Orpheus and Eurydice, set in a post-apocalyptic world. A mesmerizing musical that blends folk, blues, and jazz. Expect powerful storytelling and an atmospheric, unforgettable experience.",
        imgSrc: "images/hadestown.jpg", // Add image URL here
        imgAlt: "Hadestown musical poster/image"
    },
    {
        id: 6,
        title: "Hamilton",
        description: "The story of America's founding father Alexander Hamilton, told through a groundbreaking blend of hip-hop, R&B, and Broadway. A revolutionary musical that redefines historical storytelling. Expect electrifying performances and a fresh perspective on American history.",
        imgSrc: "images/Hamilton-poster.jpg", // Add image URL here
        imgAlt: "Hamilton musical poster/image"
    },
    {
        id: 7,
        title: "Les Misérables",
        description: "An epic story of revolution, redemption, and the enduring power of the human spirit. Set against the backdrop of 19th-century France, this musical follows the lives of characters caught in a struggle for justice. Expect iconic anthems and a heart-wrenching narrative.",
        imgSrc: "images/LesMisLogo.png", // Add image URL here
        imgAlt: "Les Misérables musical poster/image"
    },
    {
        id: 8,
        title: "Little Mermaid",
        description: "Dive into an underwater world of magic and romance! A rebellious mermaid dreams of life on land, leading to a magical journey of love, sacrifice, and finding your voice. Expect beloved songs and breathtaking visuals.",
        imgSrc: "images/The_Little_Mermaid_Musical_Poster.webp", // Add image URL here
        imgAlt: "Little Mermaid musical poster/image"
    },
    {
        id: 9,
        title: "Little Women",
        description: "A beautiful and moving musical adaptation of Louisa May Alcott's beloved novel. Follow the journey of the March sisters as they navigate love, loss, and the challenges of growing up during the Civil War. Expect beautiful music and a touching story.",
        imgSrc: "images/Little_Women_musical.jpg", // Add image URL here
        imgAlt: "Little Women musical poster/image"
    },
    {
        id: 10,
        title: "Newsies",
        description: "Strike up the band! This high-energy musical tells the true story of young newsboys in turn-of-the-century New York who take on powerful publishers in a fight for fair wages. Expect soaring anthems and gravity-defying dance numbers.",
        imgSrc: "images/Newsies.jpg", // Add image URL here
        imgAlt: "Newsies musical poster/image"
        // actOne: `The story opens in New York City, 1899. Jack Kelly, a charismatic and artistic newsboy ("newsie"), dreams of escaping the harsh realities of his life and moving to Santa Fe. He and his disabled friend Crutchie sell newspapers to survive. We're introduced to the other newsies, a diverse group of street kids who rely on selling "papes" to make a living. Joseph Pulitzer, the powerful publisher of the *New York World*, decides to raise the price of newspapers sold to the newsies, cutting their already meager profits. This sparks outrage among the newsboys. Jack, initially reluctant to lead a strike, is inspired by the arrival of two new newsies, brothers Davey and Les Jacobs. Davey, intelligent and level-headed, sees the injustice of Pulitzer's actions and convinces Jack they can fight back. With Davey's strategic mind and Jack's leadership, the newsies band together, forming a union and vowing to strike until Pulitzer lowers the prices. They sing the powerful anthem "Seize the Day," igniting their determination. The newsies organize a rally, spreading their message and gaining support from other newsboys throughout the city. Jack meets Katherine Plumber, an ambitious young journalist who sees the newsies' strike as a chance to prove herself. She begins writing about their cause, giving them much needed publicity. The act closes with the newsies feeling very hopeful that they will win the strike.`,
        // actTwo: `The newsies face increasing pressure from Pulitzer and his goons, who try to break the strike through intimidation and violence. Jack begins to feel the weight of leadership, and the stress of the strike. The Newsies start to lose hope, when they find out that the other burroughs are not showing up to support the strike. Jack becomes desperate, and goes to Pulitzer to try to make a deal. Despite the setbacks, the newsies refuse to give up. They find renewed strength in their unity and their shared desire for justice. Katherine's reporting continues to rally public support for their cause, putting pressure on Pulitzer. Davey steps up and takes charge, and helps to get the newsies organized again. Jack, realizing the importance of his friends, returns to the strike, and helps to motivate the newsies. With renewed determination, the newsies confront Pulitzer, demanding fair treatment. Public pressure and the newsies' unwavering spirit force Pulitzer to back down, agreeing to lower the prices. The newsies celebrate their victory, realizing the power of collective action. Jack finds a new sense of purpose, and a new found love with Katherine.`,
        // spoilers: `Jack Kelly's real name is revealed to be Francis Sullivan. He is on the run from a juvenile detention center, adding a layer of vulnerability and complexity to his character. Pulitzer has connections to the mayor, and uses those connections to try to turn the police against the Newsies. He also has the detention center that Jack ran away from send men to capture jack. Crutchie, Jack's best friend, is captured by Pulitzer's goons and taken to the Refuge, a harsh and abusive juvenile detention center. This adds a dark and emotional element to the story, highlighting the vulnerability of the newsies. Katherine Plumber is revealed to be Pulitzer's daughter, adding a complex dynamic to her relationship with Jack and the newsies. This creates a moral dilemma for her, forcing her to choose between her family and her principles. The newsies, with Katherine's help, break into Pulitzers printing press, and print their own news paper, to help spread the word of their strike. This is a major turning point in the show. Jack, when offered a deal by Pulitzer, almost takes it. The deal is that Pulitzer will give Jack the money to go to Santa Fe, if Jack ends the strike. Jack almost betrays his friends, but at the last minute, decides to stay with them.`,
    
    },
    {
        id: 11,
        title: "Oklahoma!",
        description: "A landmark musical that celebrates the spirit of the American West. A heartwarming story of love and community in the early days of Oklahoma. Expect classic melodies and a charming, nostalgic atmosphere.",
        imgSrc: "images/OKlahoma-header.jpg", // Add image URL here
        imgAlt: "Oklahoma! musical poster/image"
    },
    {
        id: 12,
        title: "Seven Brides for Seven Brothers",
        description: "A rollicking and energetic musical about seven backwoods brothers who kidnap brides from a nearby town. A classic tale of romance and adventure with infectious dance numbers. Expect high energy and fun.",
        imgSrc: "images/SevenBrides.jpg", // Add image URL here
        imgAlt: "Seven Brides for Seven Brothers musical poster/image"
    },
    {
        id: 13,
        title: "The Hunchback of Notre Dame",
        description: "A sweeping and dramatic tale of love, prejudice, and redemption set against the backdrop of medieval Paris. A disfigured bell-ringer finds unexpected love and courage in a world that rejects him. Expect powerful vocals and a deeply moving story.",
        imgSrc: "images/Hunchback.jpg", // Add image URL here
        imgAlt: "The Hunchback of Notre Dame musical poster/image"
    },
    {
        id: 14,
        title: "The Last Five Years",
        description: "A unique and intimate musical that tells the story of a five-year relationship from two different perspectives. One character tells the story from beginning to end, and the other from end to beginning. Expect clever storytelling and beautiful, emotional songs.",
        imgSrc: "images/thelastfiveyears.jpg", // Add image URL here
        imgAlt: "The Last Five Years musical poster/image"
    },
    {
        id: 15,
        title: "Wicked",
        description: "The untold story of the witches of Oz, exploring the complexities of friendship, power, and perception. A visually stunning musical that reimagines a beloved classic. Expect soaring vocals and a magical, thought-provoking story.",
        imgSrc: "images/wicked.jpg", // Add image URL here
        imgAlt: "Wicked musical poster/image"
    }
]


const play_list_container = document.querySelector('.play-list');


musicals.forEach(item => {
	const newMus = document.createElement("musical");
	newMus.classList.add("play");


	const mus_html= 
    `<div class="play">
        <img class="play-pic" src="${item.imgSrc}" alt="${item.imgAlt}">
        <h3>
            ${item.title}
        </h3>
        <div>
            ${item.description}
        </div>

    </div>`



	newMus.innerHTML = mus_html;



    play_list_container.appendChild(newMus);


});






