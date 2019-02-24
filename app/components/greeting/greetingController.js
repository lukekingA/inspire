import GreetingService from "./grettingService.js";

//private
let _gs = new GreetingService()

function drawGreeting() {
  document.querySelector('#greeting').innerHTML = `<h1 class="display-2 text-light txt-shadow">${_gs.Greeting} ${_gs.User}</h1>`

}
//public
export default class GreetingController {
  constructor() {
    _gs.addSubscriber('greeting', drawGreeting)
    _gs.addSubscriber('user', drawGreeting)
    _gs.setGreeting()
  }

  setUser(e) {
    let user = e.target.value
    _gs.setUser(user)
  }
}