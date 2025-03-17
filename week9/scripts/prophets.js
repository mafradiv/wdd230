const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';//Declare a const variable named "url" that contains the URL string of the JSON resource provided.
const cards = document.querySelector('#cards');//Declare a const variable name "cards" that selects the HTML div element from the document with an id value of "cards".
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);//temporary testing of data retreival
    displayProphets(data.prophets);// note that we reference the prophets array of the JSON data object, not just the object
}
    const displayProphets = (prophets) => {
        prophets.forEach((prophet) => {
            let card = document.createElement("section");// Step 1: Create a section element
            let fullName = document.createElement("h2"); //create an img element and store it in a variable named "portrait",
            let portrait = document.createElement("img");// Step 3: Create an img element and store it in a variable named "portrait"
            let birthdate = document.createElement("p");
            let birthplace = document.createElement("p");

            fullName.textContent = `${prophet.name} ${prophet.lastname}`;// Step 4: Populate the heading element with the prophet's full name
            birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
            birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

            // Step 5: Build the image element by setting its attributes
            portrait.setAttribute("src", prophet.imageurl);
            portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
            portrait.setAttribute("loading", "lazy");
            portrait.setAttribute("width", "340");
            portrait.setAttribute("height", "440");

            // Step 6: Append the heading and image to the section (card)
            card.appendChild(fullName);
            card.appendChild(birthdate);
            card.appendChild(birthplace);
            card.appendChild(portrait);
           
            


            cards.appendChild(card);
            // end of arrow function and forEach loop

        });
    
}

getProphetData ();