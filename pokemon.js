// getting data 
function writePokemon(pokemon) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon + '/')
        // making sure the response is in json 
        .then(res => res.json())
        .then(
            data => {
                // destructuring the data object
                const {
                    ...sprites
                } = data.sprites;

                // console.log(data);

                /*ADDING THE SPRITE INTO A DIV*/
                const htmlSelector = document.getElementById("sprite");
                const img = `<img src="${sprites.front_default}" alt="">`;
                htmlSelector.innerHTML = img;

                /*ADDING THE NAME OF POKEMON TO THE DOCUMENT*/
                const htmlName = document.querySelector('h5');
                const pokemonName = data.name;
                const uppercaseName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
                htmlName.innerHTML = uppercaseName;

                /*ADDING THE TYPE OF POKEMON TO DOCUMENT*/
                const htmlType = document.querySelector('p');
                const typesArray = data.types;
                // checking for single or multiple types 
                if (typesArray.length === 1) {
                    htmlType.innerHTML = `${uppercaseName}'s type is: ${typesArray[0].type.name}`
                } else {
                    htmlType.innerHTML = `${uppercaseName}'s types are: ${typesArray[1].type.name} and ${typesArray[0].type.name}`
                }

                /* CHANGING BACKGROUND BASED ON TYPE */
                // gets the last value of the type array 
                let typeIndex = typesArray.length - 1;
                // sets the last index of the type array to "main type"
                const mainType = typesArray[`${typeIndex}`].type.name;
                // getting the div.card as a constant to affect its styles 
                const card = document.querySelector('.card');
                // a very long if statement for all pokemon types 
                if (mainType == 'normal') {
                    card.style.backgroundColor = 'rgba(150, 161, 101, 0.8)';
                } else if (mainType == 'fighting') {
                    card.style.backgroundColor = 'rgba(214, 21, 21, 0.692)';
                } else if (mainType == 'flying') {
                    card.style.backgroundColor = 'rgba(142, 75, 230, 0.815)';
                } else if (mainType == 'poison') {
                    card.style.backgroundColor = 'rgba(119, 32, 122, 0.829)';
                } else if (mainType == 'ground') {
                    card.style.backgroundColor = 'rgba(146, 145, 72, 0.829)';
                } else if (mainType == 'rock') {
                    card.style.backgroundColor = 'rgba(88, 72, 37, 0.938)';
                } else if (mainType == 'bug') {
                    card.style.backgroundColor = 'rgba(116, 151, 58, 0.938)';
                } else if (mainType == 'ghost') {
                    card.style.backgroundColor = 'rgba(88, 19, 153, 0.671)';
                } else if (mainType == 'steel') {
                    card.style.backgroundColor = 'rgba(117, 111, 111, 0.932)';
                } else if (mainType == 'fire') {
                    card.style.backgroundColor = 'rgba(179, 99, 8, 0.932)';
                } else if (mainType == 'water') {
                    card.style.backgroundColor = 'rgba(36, 70, 180, 0.849)';
                } else if (mainType == 'grass') {
                    card.style.backgroundColor = 'rgba(40, 180, 12, 0.849)';
                } else if (mainType == 'electric') {
                    card.style.backgroundColor = 'rgba(251, 255, 24, 0.938)';
                } else if (mainType == 'psychic') {
                    card.style.backgroundColor = 'rgba(247, 45, 163, 0.856)';
                } else if (mainType == 'ice') {
                    card.style.backgroundColor = 'rgba(45, 234, 247, 0.801)';
                } else if (mainType == 'dragon') {
                    card.style.backgroundColor = 'rgba(59, 6, 145, 0.75)';
                } else if (mainType == 'dark') {
                    card.style.backgroundColor = 'rgba(85, 57, 5, 0.959)';
                } else if (mainType == 'fairy') {
                    card.style.backgroundColor = 'rgba(214, 70, 183, 0.877)';
                }
                if (data.name != undefined) {
                    console.log("enjoy");
                }
            }
        );
}



// checking the URL, finding the pokemon, and running our function using that pokemon 
// window.onload = () => {
//     if (window.location.href.indexOf("gible") != -1) {
//         writePokemon("gible");
//     } else if (window.location.href.indexOf("cubone") != -1) {
//         writePokemon("cubone");
//     } else if (window.location.href.indexOf("pikachu") != -1) {
//         writePokemon("pikachu");
//     } else if (window.location.href.indexOf("squirtle") != -1) {
//         writePokemon("squirtle");
//     } else {
//        console.log("nothing has been clicked or typed");
//     }
// }

setTimeout(function()  {
    if (window.location.href.indexOf("gible") != -1) {
        writePokemon("gible");
    } else if (window.location.href.indexOf("cubone") != -1) {
        writePokemon("cubone");
    } else if (window.location.href.indexOf("pikachu") != -1) {
        writePokemon("pikachu");
    } else if (window.location.href.indexOf("squirtle") != -1) {
        writePokemon("squirtle");
    } else {
       console.log("nothing has been clicked or typed");
    }
} , 1);


document.getElementById("submit").onclick = () => {
    let userPoke = document.getElementById("searchBar").value;

    //clearing the home page to write a card 
    let card = document.querySelector(".card")
    card.innerHTML = "";

    // creating the document fragment 
    let fragment = new DocumentFragment();

    // setting up the container card-body div
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    
    // making the card-body div 
        // making the div to contain the sprite div 
        let halfDiv1 = document.createElement("div");
        halfDiv1.setAttribute("class", "col-1-2");
            //making the sprite div 
            let spriteDiv = document.createElement("div");
            spriteDiv.setAttribute("id", "sprite");
            spriteDiv.setAttribute("align", "center");
        // appending the sprite div into its containing div 
        halfDiv1.appendChild(spriteDiv);
        // appending the containing div to the card-body div 
        cardBody.appendChild(halfDiv1);

        //making the div to contain the pokemon name and type
        let halfDiv2 = document.createElement("div");
        halfDiv2.setAttribute("class", "col-1-2");
        halfDiv2.setAttribute("id", "text");
            //making the h5
            let h5Elem = document.createElement("h5");
            h5Elem.setAttribute("class", "card-title");
            h5Elem.setAttribute("align", "center");
            //making the p
            let pElem = document.createElement("p");
            pElem.setAttribute("class", "card-text");
            pElem.setAttribute("align", "center");
            //appending the h5 div to it's containing div 
            halfDiv2.appendChild(h5Elem);
            halfDiv2.appendChild(pElem);
            // appending the second col div to the card body div 
            cardBody.appendChild(halfDiv2);
        
        //making the last div for a back button 
        let fullDiv = document.createElement("div");
        fullDiv.setAttribute("class", "col-1-1");  
            // making the div to contain the back link
            let linkDiv = document.createElement("div");
            linkDiv.setAttribute("align", "center");
            // making the back link 
            let backLink = document.createElement("a");
            backLink.setAttribute("href", "index.html");
            backLink.setAttribute("class", "btn btn-secondary");
            backLink.innerText = "Back"
            // appending the back link into its containing div
            linkDiv.appendChild(backLink);
            //appending the containing div to the full col div
            fullDiv.appendChild(linkDiv);
            // appending the full col div to the card body div 
            cardBody.appendChild(fullDiv);

    // appending the entire cardBody div to our fragment
    fragment.appendChild(cardBody);

    // appending the entire fragment to the now empty card div
    card.appendChild(fragment);

    //changing the window title to the user's pokemon
    

    // creating the card based on the user input pokemon
    writePokemon(userPoke);
}