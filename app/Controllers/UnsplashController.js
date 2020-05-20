import UnsplashService from "../Services/UnsplashService.js";
import store from "../store.js";

//Private
function _draw() {
  // console.log("unsplash draw");
  let template = ""
  let photos = store.State.unsplash
  photos.forEach(p => template += p.Template)
  document.getElementById('unsplashPic').innerHTML = template
}

//Public
export default class UnsplashController {
  constructor() {
    store.subscribe("unsplash", _draw);
  }

  getPhoto(event) {
    event.preventDefault();
    UnsplashService.getPhoto(event.target.query.value)
  }
}
