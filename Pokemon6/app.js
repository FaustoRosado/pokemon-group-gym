

class Pokemon {
    constructor(name, id, hp, attack, defense, abilities) {
        this.name = name;
        this.id = id;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }

    static load(name) {
        console.log(`[debug:Pokemon.load()] loading pokemon with name: ${name}`);

        return new Promise((resolve, reject) => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
                .then(response => {
                    let data = response.data;
                    let name = data.name;
                    let id = data.id;
                    let hp = data.stats[5].base_stat;
                    let attack = data.stats[4].base_stat;
                    let defense = data.stats[3].base_stat;
                    
                    let abilities = [];
                    data.abilities.forEach(paulsBalls=> {
                        abilities.push(paulsBalls.ability.name);
                    });



                    resolve(new Pokemon(name, id, hp, attack, defense, abilities));
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    static loadMany(names) {
        var promises = [];
        names.forEach(name => {
            promises.push(Pokemon.load(name));
        });

        return Promise.all(promises);
    }
}

class Pokedex {
    constructor(pokemonList) {
        this.pokemonList = pokemonList;
    }

    all() {
        return this.pokemonList;
    }

    get(name) {
        var result = null;
        this.pokemonList.forEach(pokemon => {
            if(pokemon.name == name)
                result = pokemon;
        });
        return result;
    }
}

function loadScreen(name, imageSrc) {
    var pokemonNames = [];
    pokemonNames.push(name);

    Pokemon.loadMany(pokemonNames).then(values => {
        console.log(values);
        var trainer = new Pokedex(values);
        var row = document.getElementById('pokemon-row');
        trainer.all().forEach(pokemon => {
            let card = document.createElement('div');
                card.className = "col-md-4";
            let header = document.createElement('h1');
                header.innerText = pokemon.name;
            let image = document.createElement('img');
                image.className = "card-img-top";
                image.setAttribute('src', imageSrc);
                image.style = "width:400px; height:400px;";
            let stats = document.createElement('ul');
                stats.innerHTML += `<li><b>HP:</b> ${pokemon.hp}</li>`;
                stats.innerHTML += `<li><b>Attack:</b> ${pokemon.attack}</li>`;
                stats.innerHTML += `<li><b>Defense:</b> ${pokemon.defense}</li>`;
            let abilities = document.createElement('ul');
                pokemon.abilities.forEach(ability => {
                    abilities.innerHTML += `<li><b>Ability:<b> ${ability}</li>`;
                });
            card.appendChild(header);
            card.appendChild(image);
            card.appendChild(stats);
            row.appendChild(card);
            row.appendChild(abilities);
            console.log(`${pokemon.name}'s abilities: ${pokemon.abilities}`); 
        });
    });
    
}
