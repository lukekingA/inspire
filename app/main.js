import WeatherController from "./components/weather/weather-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import ImageController from "./components/image/image-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
import ClockController from "./components/clock/clockController.js";
import GreetingController from "./components/greeting/greetingController.js";
import SettingsController from "./components/settings/settingsController.js";


// 
// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController(),
      imageController: new ImageController(),
      quoteController: new QuoteController(),
      clockController: new ClockController(),
      greetingController: new GreetingController(),
      settingsController: new SettingsController()
    }
  }
}

window['app'] = new App()