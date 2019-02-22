import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  document.querySelector('#quote').innerHTML = _qs.Quote.QuoteTemplate
}

export default class QuoteController {
  constructor() {
    _qs.addsubscriber('quote', drawQuote)
    _qs.getapiQuote()
  }
}