class Pokemon {
  constructor(name, hp, attack, defense, abilities = []) {
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.abilities = abilities
    this.name = name
  }

  addAbility(ability) {
    this.abilities.push(ability)
  }
}

class Satoshi {
  constructor() {
    this.pokemon = []
  }

  all() {
    return this.pokemon
  }

  add(poke) {
    this.pokemon.push(poke)
  }

  get(name) {
    for (let i = 0; i < this.pokemon.length; i++) {
      if (name == this.pokemon[i].name) {
        return this.pokemon[i]
      }
    }
  }

}

let frj = new Satoshi()


axios.get("https://pokeapi.co/api/v2/pokemon/kadabra/")
  .then((response) => {
    let data = response.data
    let hp = document.getElementById("kadabra-hp")
    let attack = document.getElementById("kadabra-attack")
    let defense = document.getElementById("kadabra-defense")
    let abilities = document.getElementById("kadabra-abilities")


    let kadabra = new Pokemon(
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
    )

    data.abilities.forEach((item) => {
      kadabra.addAbility(item.ability.name)
      abilities.innerHTML += item.ability.name + "<br>"
    })


    frj.add(kadabra)
    hp.innerHTML = kadabra.hp
    attack.innerHTML = kadabra.attack
    defense.innerHTML = kadabra.defense

  }).catch((error) => {
    console.log(error)
  })


axios.get("https://pokeapi.co/api/v2/pokemon/emboar/")
  .then((response) => {
    let data = response.data
    let hp = document.getElementById("emboar-hp")
    let attack = document.getElementById("emboar-attack")
    let defense = document.getElementById("emboar-defense")
    let abilities = document.getElementById("emboar-abilities")


    let emboar = new Pokemon(
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
    )

    data.abilities.forEach((item) => {
      emboar.addAbility(item.ability.name)
      abilities.innerHTML += item.ability.name + "<br>"
    })


    frj.add(emboar)
    hp.innerHTML = emboar.hp
    attack.innerHTML = emboar.attack
    defense.innerHTML = emboar.defense

    // console.log(fausto.get("emboar"))


  }).catch((error) => {
    console.log(error)
  })

// console.log(fausto.get("emboar"))


axios.get("https://pokeapi.co/api/v2/pokemon/114/")
  .then((response) => {
    let data = response.data
    let hp = document.getElementById("tangela-hp")
    let attack = document.getElementById("tangela-attack")
    let defense = document.getElementById("tangela-defense")
    let abilities = document.getElementById("tangela-abilities")



    let tangela = new Pokemon(
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
    )

    data.abilities.forEach((item) => {
      tangela.addAbility(item.ability.name)

      abilities.innerHTML += item.ability.name + "<br>"
    })

    frj.add(tangela)
    hp.innerHTML = tangela.hp
    attack.innerHTML = tangela.attack
    defense.innerHTML = tangela.defense

  }).catch((error) => {
    console.log(error)
  })

let button = document.getElementById("scroll")
button.addEventListener("click", (event) => {
  let div = document.getElementById("kadabra")
  div.scrollIntoView({
    behavior: "smooth"
  });
});

let button2 = document.getElementById("scroll2")
button2.addEventListener("click", (event) => {
  let div = document.getElementById("emboar")
  div.scrollIntoView({
    behavior: "smooth"
  });
});

let button3 = document.getElementById("scroll3")
button3.addEventListener("click", (event) => {
  let div = document.getElementById("tangela")
  div.scrollIntoView({
    behavior: "smooth"
  });
});


let kadabra = document.getElementById("kadabra-pic")
kadabra.addEventListener("mouseover", function (event) {
  kadabra.src = "images/kadabra.jpeg";
})

kadabra.addEventListener("mouseout", function (event) {
  kadabra.src = "images/kadabra2.jpeg";
})

let emboar = document.getElementById("emboar-pic")
emboar.addEventListener("mouseover", function (event) {
  emboar.src = "images/cardinfoemboar.jpg";
})

emboar.addEventListener("mouseout", function (event) {
  emboar.src = "images/emboar.gif";
})

let tangela = document.getElementById("tangela-pic")
tangela.addEventListener("mouseover", function (event) {
  tangela.src = "images/ShinyTangelaanimated.gif";
})

tangela.addEventListener("mouseout", function (event) {
  tangela.src = "images/Tangelaanimated-1.gif";
})

window.addEventListener("scroll", (event) => {



  if (window.scrollY > 500) {
    let kadabraPic = document.getElementById("kadabra-pic")
    kadabraPic.style.animation = "fadeIn 0.6s forwards"

  }

  if (window.scrollY > 550) {
    let kadabraHPLabel = document.getElementById("kadabra-hp-label")
    kadabraHPLabel.style.animation = "fadeIn 0.6s forwards"
    let kadabraHP = document.getElementById("kadabra-hp")
    kadabraHP.style.animation = "fadeIn 1.6s forwards"
    let kadabraAttackLabel = document.getElementById("kadabra-attack-label")
    kadabraAttackLabel.style.animation = "fadeIn 2.6s forwards"
    let kadabraAttack = document.getElementById("kadabra-attack")
    kadabraAttack.style.animation = "fadeIn 3.6s forwards"

    let kadabraDefenseLabel = document.getElementById("kadabra-defense-label")
    kadabraDefenseLabel.style.animation = "fadeIn 4.6s forwards"
    let kadabraDefense = document.getElementById("kadabra-defense")
    kadabraDefense.style.animation = "fadeIn 5.6s forwards"

    let kadabraAbilitiesLabel = document.getElementById("kadabra-abilities-label")
    kadabraAbilitiesLabel.style.animation = "fadeIn 5.6s forwards"
    let kadabraAbilities = document.getElementById("kadabra-abilities")
    kadabraAbilities.style.animation = "fadeIn 5.6s forwards"
  }

  if (window.scrollY > 800) {
    let emboarPic = document.getElementById("emboar-pic")
    emboarPic.style.animation = "fadeIn 0.6s forwards"

  }

  if (window.scrollY > 850) {
    let emboarHPLabel = document.getElementById("emboar-hp-label")
    emboarHPLabel.style.animation = "fadeIn 0.6s forwards"
    let emboarHP = document.getElementById("emboar-hp")
    emboarHP.style.animation = "fadeIn 1.6s forwards"
    let emboarAttackLabel = document.getElementById("emboar-attack-label")
    emboarAttackLabel.style.animation = "fadeIn 2.6s forwards"
    let emboarAttack = document.getElementById("emboar-attack")
    emboarAttack.style.animation = "fadeIn 3.6s forwards"

    let emboarDefenseLabel = document.getElementById("emboar-defense-label")
    emboarDefenseLabel.style.animation = "fadeIn 4.6s forwards"
    let emboarDefense = document.getElementById("emboar-defense")
    emboarDefense.style.animation = "fadeIn 5.6s forwards"

    let emboarAbilitiesLabel = document.getElementById("emboar-abilities-label")
    emboarAbilitiesLabel.style.animation = "fadeIn 5.6s forwards"
    let emboarAbilities = document.getElementById("emboar-abilities")
    emboarAbilities.style.animation = "fadeIn 5.6s forwards"
  }
  if (window.scrollY > 1300) {
    let tangelaPic = document.getElementById("tangela-pic")
    tangelaPic.style.animation = "fadeIn 0.6s forwards"

  }

  if (window.scrollY > 1350) {
    let tangelaHPLabel = document.getElementById("tangela-hp-label")
    tangelaHPLabel.style.animation = "fadeIn 0.6s forwards"
    let tangelaHP = document.getElementById("tangela-hp")
    tangelaHP.style.animation = "fadeIn 1.6s forwards"
    let tangelaAttackLabel = document.getElementById("tangela-attack-label")
    tangelaAttackLabel.style.animation = "fadeIn 2.6s forwards"
    let tangelaAttack = document.getElementById("tangela-attack")
    tangelaAttack.style.animation = "fadeIn 3.6s forwards"

    let tangelaDefenseLabel = document.getElementById("tangela-defense-label")
    tangelaDefenseLabel.style.animation = "fadeIn 4.6s forwards"
    let tangelaDefense = document.getElementById("tangela-defense")
    tangelaDefense.style.animation = "fadeIn 5.6s forwards"

    let tangelaAbilitiesLabel = document.getElementById("tangela-abilities-label")
    tangelaAbilitiesLabel.style.animation = "fadeIn 5.6s forwards"
    let tangelaAbilities = document.getElementById("tangela-abilities")
    tangelaAbilities.style.animation = "fadeIn 5.6s forwards"


  }
})