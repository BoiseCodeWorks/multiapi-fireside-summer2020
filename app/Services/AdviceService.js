import Advice from "../Models/Advice.js";
import store from "../store.js";

// @ts-ignore
const adviceApi = axios.create({
  baseURL: 'http://osrshelper.herokuapp.com/api',
  timeout: 3000
});


class AdviceService {
  constructor() {
    this.getAdvice()
  }

  getAdvice() {
    adviceApi.get("advice")
      .then(res => {
        // console.log(res.data.slip);
        let adviceData = new Advice(res.data.slip)
        store.commit('advice', adviceData)

      })
  }
}

const service = new AdviceService();
export default service;