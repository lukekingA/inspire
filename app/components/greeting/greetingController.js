import GreetingService from "./grettingService.js";

//private
let _gs = new GreetingService()

function drawGreeting() {
  document.querySelector('#greeting').innerHTML = `
  <div>
  <h1 class="display-2 text-light txt-shadow">${_gs.Greeting}</h1>
  <h1 class="text-light txt-shadow">${_gs.User}</h1>
  </div>`

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