// @ts-ignore
const _imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: ''
}

let _subscribers = {
	image: []
}

function setState(prop, val) {
	_state[prop] = val
	_subscribers[prop].forEach(fn => fn())
}

export default class ImageService {
	addsubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Image() {
		return _state.image

	}

	getapiImage() {
		_imgApi.get().then(res => {

			setState('image', res.data.url)

		})
	}
}