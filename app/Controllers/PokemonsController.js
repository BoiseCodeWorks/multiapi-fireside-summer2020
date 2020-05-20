import PokemonsService from "../Services/PokemonsService.js";
import store from "../store.js";

//Private
function _draw() {
  console.log("from pokeman photo");
  console.log(store.State.pokemonPhoto);
  let poke = store.State.pokemonPhoto
  document.getElementById('pokemonPic').innerHTML = poke.Template

}

//Public
export default class PokemonsController {
  constructor() {
    store.subscribe("pokemonPhoto", _draw);
  }
}
