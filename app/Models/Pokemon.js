export default class Pokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.sprites.front_default
  }
  get Template() {
    return `
          <p>${this.name}</p>
          <img src="${this.img}" class="photo mt-2 mr-2">
          `
  }
}