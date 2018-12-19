class Pokemon{
  constructor(name,hp,attack,defense,abilities=[]){
      this.hp = hp
      this.attack = attack
      this.defense = defense
      this.abilities = abilities
      this.name = name
  }

  addAbility(ability){
      this.abilities.push(ability)
  }
}

class Satoshi{
  constructor(){
      this.pokemon = []
  }

  all(){
      return this.pokemon
  }

  add(poke){
      this.pokemon.push(poke)
  }

  get(name){
      for(let i = 0; i < this.pokemon.length; i++){
          if(name == this.pokemon[i].name){
              return this.pokemon[i]
          }
      }
  }

}

let fjr = new Satoshi()


axios.get("https://fizal.me/pokeapi/api/383.json")
.then((response) => {
    let data = response.data
    let hp = document.getElementById("groudon-hp")
    let attack = document.getElementById("groudon-attack")
    let defense = document.getElementById("groudon-defense")
    let abilities = document.getElementById("groudon-abilities")


    let groudon = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )

    data.abilities.forEach((item) => {
        groudon.addAbility(item.ability.name)
        abilities.innerHTML += item.ability.name +"<br>"
    })


    fjr.add(groudon)
    hp.innerHTML = groudon.hp
    attack.innerHTML = groudon.attack
    defense.innerHTML = groudon.defense

    // console.log(fausto.get("machamp"))


}).catch((error) => {
    console.log(error)
  })

//   console.log(fausto.get("machamp"))


axios.get("https://pokeapi.co/api/v2/pokemon/250/")
.then((response) => {
  let data =  response.data
  let hp = document.getElementById("hooh-hp")
  let attack = document.getElementById("hooh-attack")
  let defense = document.getElementById("hooh-defense")
  let abilities = document.getElementById("hooh-abilities")



  let hooh = new Pokemon(
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
  )

  data.abilities.forEach((item) => {
      hooh.addAbility(item.ability.name)
      
      abilities.innerHTML += item.ability.name +"<br>"
  })

  fjr.add(hooh)
  hp.innerHTML = hooh.hp
  attack.innerHTML = hooh.attack
  defense.innerHTML = hooh.defense

}).catch((error) => {
  console.log(error)
})

axios.get("https://pokeapi.co/api/v2/pokemon/snorlax/")
.then((response) => {
  let data = response.data
  let hp = document.getElementById("snorlax-hp")
  let attack = document.getElementById("snorlax-attack")
  let defense = document.getElementById("snorlax-defense")
  let abilities = document.getElementById("snorlax-abilities")


  let snorlax = new Pokemon(
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
  )

  data.abilities.forEach((item) => {
      snorlax.addAbility(item.ability.name)
      abilities.innerHTML += item.ability.name +"<br>"
  })


  fjr.add(snorlax)
  hp.innerHTML = snorlax.hp
  attack.innerHTML = snorlax.attack
  defense.innerHTML = snorlax.defense

}).catch((error) => {
  console.log(error)
})


  let button = document.getElementById("scroll")
  button.addEventListener("click", (event) => {
      let div = document.getElementById("groudon")
      div.scrollIntoView({behavior: "smooth"});
  });

  let button2 = document.getElementById("scroll2")
  button2.addEventListener("click", (event) => {
      let div = document.getElementById("hooh")
      div.scrollIntoView({behavior: "smooth"});
  });

  let button3 = document.getElementById("scroll3")
  button3.addEventListener("click", (event) => {
      let div = document.getElementById("snorlax")
      div.scrollIntoView({behavior: "smooth"});
  });


  let groudon = document.getElementById("groudon-pic")
  groudon.addEventListener("mouseover", function( event ) {   
      groudon.src = "groudon.png";
  })

  groudon.addEventListener("mouseout", function( event ) {   
      groudon.src = "shiny.png";
  })

  let snorlax = document.getElementById("snorlax-pic")
  snorlax.addEventListener("mouseover", function( event ) {   
      snorlax.src = "snorlax.png";
  })

  snorlax.addEventListener("mouseout", function( event ) {   
      snorlax.src = "snorlax1.png";
  })

  let hooh = document.getElementById("hooh-pic")
  hooh.addEventListener("mouseover", function( event ) {   
      hooh.src = "Ho-oh.png";
  })

  hooh.addEventListener("mouseout", function( event ) {   
      hooh.src = "hoho1.png";
  })

  window.addEventListener("scroll", (event) => {
      
      

      if(window.scrollY > 500){
          let groudonPic = document.getElementById("groudon-pic")
          groudonPic.style.animation = "fadeIn 0.6s forwards"
          
      }

      if(window.scrollY > 550){
          let groudonHPLabel = document.getElementById("groudon-hp-label")
          groudonHPLabel.style.animation = "fadeIn 0.6s forwards"
          let groudonHP = document.getElementById("groudon-hp")
          groudonHP.style.animation = "fadeIn 1.6s forwards"
          let groudonAttackLabel = document.getElementById("groudon-attack-label")
          groudonAttackLabel.style.animation = "fadeIn 2.6s forwards"
          let groudonAttack = document.getElementById("groudon-attack")
          groudonAttack.style.animation = "fadeIn 3.6s forwards"

          let groudonDefenseLabel = document.getElementById("groudon-defense-label")
          groudonDefenseLabel.style.animation = "fadeIn 4.6s forwards"
          let groudonDefense = document.getElementById("groudon-defense")
          groudonDefense.style.animation = "fadeIn 5.6s forwards"

          let groudonAbilitiesLabel = document.getElementById("groudon-abilities-label")
          groudonAbilitiesLabel.style.animation = "fadeIn 5.6s forwards"
          let groudonAbilities = document.getElementById("groudon-abilities")
          groudonAbilities.style.animation = "fadeIn 5.6s forwards"
      }
      if(window.scrollY > 1200){
        let hoohPic = document.getElementById("hooh-pic")
        hoohPic.style.animation = "fadeIn 0.6s forwards"
        
    }

    if(window.scrollY > 1250){
        let hoohHPLabel = document.getElementById("hooh-hp-label")
        hoohHPLabel.style.animation = "fadeIn 0.6s forwards"
        let hoohHP = document.getElementById("hooh-hp")
        hoohHP.style.animation = "fadeIn 1.6s forwards"
        let hoohAttackLabel = document.getElementById("hooh-attack-label")
        hoohAttackLabel.style.animation = "fadeIn 2.6s forwards"
        let hoohAttack = document.getElementById("hooh-attack")
        hoohAttack.style.animation = "fadeIn 3.6s forwards"

        let hoohDefenseLabel = document.getElementById("hooh-defense-label")
        hoohDefenseLabel.style.animation = "fadeIn 4.6s forwards"
        let hoohDefense = document.getElementById("hooh-defense")
        hoohDefense.style.animation = "fadeIn 5.6s forwards"

        let hoohAbilitiesLabel = document.getElementById("hooh-abilities-label")
        hoohAbilitiesLabel.style.animation = "fadeIn 5.6s forwards"
        let hoohAbilities = document.getElementById("hooh-abilities")
        hoohAbilities.style.animation = "fadeIn 5.6s forwards"

        
    }

    if(window.scrollY > 1900){
        let snorlaxPic = document.getElementById("snorlax-pic")
        snorlaxPic.style.animation = "fadeIn 0.6s forwards"
        
    }

    if(window.scrollY > 1950){
        let snorlaxHPLabel = document.getElementById("snorlax-hp-label")
        snorlaxHPLabel.style.animation = "fadeIn 0.6s forwards"
        let snorlaxHP = document.getElementById("snorlax-hp")
        snorlaxHP.style.animation = "fadeIn 1.6s forwards"
        let snorlaxAttackLabel = document.getElementById("snorlax-attack-label")
        snorlaxAttackLabel.style.animation = "fadeIn 2.6s forwards"
        let snorlaxAttack = document.getElementById("snorlax-attack")
        snorlaxAttack.style.animation = "fadeIn 3.6s forwards"

        let snorlaxDefenseLabel = document.getElementById("snorlax-defense-label")
        snorlaxDefenseLabel.style.animation = "fadeIn 4.6s forwards"
        let snorlaxDefense = document.getElementById("snorlax-defense")
        snorlaxDefense.style.animation = "fadeIn 5.6s forwards"

        let snorlaxAbilitiesLabel = document.getElementById("snorlax-abilities-label")
        snorlaxAbilitiesLabel.style.animation = "fadeIn 5.6s forwards"
        let snorlaxAbilities = document.getElementById("snorlax-abilities")
        snorlaxAbilities.style.animation = "fadeIn 5.6s forwards"
    }
  })