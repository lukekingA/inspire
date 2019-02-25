function capitalize(str) {
  let words = str.split('-')
  return words.map(w => {
    return w.charAt(0).toUpperCase() + w.slice(1)
  }).join(' ')
}

export default class Quote {
  constructor(data) {
    this.url = data.url
    this.body = data.body
    this.author_permalink = capitalize(data.author_permalink)
  }

  get QuoteTemplate() {
    return `
    <div class="text-light txt-shadow d-flex flex-column justify-content-end">
    <p data-toggle="tooltip" data-placement="top" title="${this.author_permalink}">${this.body}</p>
    </div> `
  }

}