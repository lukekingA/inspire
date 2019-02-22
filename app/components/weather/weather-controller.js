import WeatherService from "./weather-service.js";

var _ws = new WeatherService()

function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _ws.Weather)

	document.querySelector('#weather').innerHTML = _ws.Weather.WTemplate
}

export default class WeatherController {

	constructor() {
		_ws.addSubscriber('weather', drawWeather)
		_ws.getWeather()
	}

}