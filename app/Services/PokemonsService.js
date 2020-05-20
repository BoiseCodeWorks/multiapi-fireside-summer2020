import store from "../store.js";
import Pokemon from "../Models/Pokemon.js";


// @ts-ignore
let _pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/charmander",
  timeout: 3000
})

class PokemonsService {
  getPhoto() {
    _pokemonApi.get().then(res => {
      console.log(res.data);
      store.commit("pokemonPhoto", new Pokemon(res.data))
    })
  }

  constructor() {
    this.getPhoto()
  }
}

const service = new PokemonsService();
export default service;
