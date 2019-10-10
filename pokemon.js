// getting data 
function writePokemon(pokemon) {
fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon + '/')
    // making sure the response is in json 
    .then(res => res.json())
    .then(
        data => {
            // destructuring the data object
            const {...sprites} = data.sprites;

            // console.log(data);

            /*ADDING THE SPRITE INTO A DIV*/
            const htmlSelector = document.getElementById("sprite");
            const img = `<img src="${sprites.front_shiny}" alt="">`;
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
            if (typesArray.length === 1 ) {
                htmlType.innerHTML = `${uppercaseName}'s type is: ${typesArray[0].type.name}`
            } else {
                htmlType.innerHTML = `${uppercaseName}'s types are: ${typesArray[1].type.name} and ${typesArray[0].type.name}`
            }

            /* CHANGING BACKGROUND BASED ON TYPE */
            // gets the last value of the type array 
            let typeIndex = typesArray.length -1;
            // sets the last index of the type array to "main type"
            const mainType = typesArray[`${typeIndex}`].type.name;
            // getting the div.card as a constant to affect its styles 
            const card = document.querySelector('.card');
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
            
        }
    );
}

if (window.location.href.indexOf("gible") != -1) {
    writePokemon("gible");
} else if (window.location.href.indexOf("cubone") != -1) {
    writePokemon("cubone");
} else if (window.location.href.indexOf("pikachu") != -1) {
    writePokemon("pikachu");
} else if (window.location.href.indexOf("squirtle") != -1) {
    writePokemon("squirtle");
} else if (window.location.href.indexOf("eevee") != -1) {
    writePokemon("eevee");
}
