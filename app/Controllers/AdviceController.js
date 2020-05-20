import AdviceService from "../Services/AdviceService.js"
import store from "../store.js";

function _draw() {
  // console.log("advice draw");
  // console.log(store.State.advice);
  let advice = store.State.advice
  document.getElementById('advice').innerHTML = advice.Template
}

export default class AdviceController {
  constructor() {
    store.subscribe("advice", _draw);
  }
}