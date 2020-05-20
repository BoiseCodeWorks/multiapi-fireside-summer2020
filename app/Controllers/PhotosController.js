import PhotosService from "../Services/PhotosService.js";
import store from "../store.js";

//Private
function _draw() {
  // console.log("photodraw");
  let photo = store.State.photo;
  document.getElementById('sandBoxPic').innerHTML = `<img src="${photo.url}" class="photo">`
}

//Public
export default class PhotosController {
  constructor() {
    store.subscribe("photo", _draw);
  }

  getPhoto() {
    PhotosService.getPhoto()
  }
}
