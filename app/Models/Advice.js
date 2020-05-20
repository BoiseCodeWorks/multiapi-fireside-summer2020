
export default class Advice {
  constructor(data) {
    this._id = data.id
    this.description = data.advice
  }

  get Template() {
    return `
<div >
              ${this.description}
</div>

    `
  }
}