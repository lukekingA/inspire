export default class Quote {
  constructor(data) {
    this.url = data.url
    this.body = data.body
    this.author_permalink = data.author_permalink
  }

  get QuoteTemplate() {
    return `
    <div class="text-light txt-shadow ">
    <p>${this.body}</p>
    <p>${this.author_permalink}</p>
    </div> `
  }

}