import store from "../store.js";

// @ts-ignore
let _photoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
})

class PhotosService {

  getPhoto() {
    _photoApi.get()
      .then(res => {
        // console.log(res.data);
        store.commit('photo', res.data)
        // console.log(store.State.photo);

      })
  }


  constructor() {
    this.getPhoto()
  }
}

const service = new PhotosService();
export default service;
