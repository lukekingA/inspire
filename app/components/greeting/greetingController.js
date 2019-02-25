import GreetingService from "./grettingService.js";

//private
let _gs = new GreetingService()

function drawGreeting() {
  document.querySelector('#greeting').innerHTML = `
  <div>
  <h1 class="display-2 text-light txt-shadow">${_gs.Greeting}</h1>
  <h1 class="text-light txt-shadow">${_gs.User}</h1>
  </div>`

  document.querySelector('#user').innerHTML = `
  <form onkeydown="app.controllers.greetingController.setUser(event)">
  <input class="rounded pl-1" type="text" placeholder="user name">
  </form>
  `
}
//public
export default class GreetingController {
  constructor() {
    _gs.addSubscriber('greeting', drawGreeting)
    _gs.addSubscriber('user', drawGreeting)
    _gs.setGreeting()
  }

  setUser(e) {
    if (e.keyCode == 13) {
      e.preventDefault()
      let user = e.target.value
      _gs.setUser(user)
    }
  }
}