import Greeting from '../../models/greeting.js'
//private


let _state = {
  greeting: {
    greeting: ''
  },
  user: ''
}

let _subscriber = {
  greeting: [],
  user: []
}


function setState(prop, val) {
  _state[prop] = val
  _subscriber[prop].forEach(fn => fn())
}
//public
export default class GreetingService {
  addSubscriber(prop, fn) {
    _subscriber[prop].push(fn)
  }

  get Greeting() {
    return _state.greeting.greeting
  }

  get User() {
    return _state.user
  }
  setGreeting() {
    let runningClock = setInterval(() => {
      let start = new Date()
      let data = {
        hour: start.getHours(),
      }
      let greeting = new Greeting(data)
      setState('greeting', greeting)
    }, 1000)
  }

  setUser(user = '') {
    setState('user', user)
  }
}