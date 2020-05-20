import PhotosController from "./Controllers/PhotosController.js";
import PokemonsController from "./Controllers/PokemonsController.js";
import UnsplashController from "./Controllers/UnsplashController.js"
import AdviceController from "./Controllers/AdviceController.js";

class App {
  photosController = new PhotosController();
  pokemonsController = new PokemonsController();
  unsplashController = new UnsplashController()
  adviceController = new AdviceController()
}

window["app"] = new App();
