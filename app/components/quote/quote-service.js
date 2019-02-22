import Quote from '../../models/quote.js'

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});
let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function setState(prop, val) {
	_state[prop] = val
	_subscribers[prop].forEach(fn => fn())
}

export default class QuoteService {
	addsubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Quote() {
		return _state.quote

	}

	getapiQuote() {
		_quoteApi.get().then(res => {
			let data = new Quote(res.data.quote)
			setState('quote', data)

		})
	}
}