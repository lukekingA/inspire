import Greeting from '../../models/greeting.js'
//private


let _state = {
  greeting: {
    greeting: ''
  },
  user: 'Luke'
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
    let d = new Date()
    setState('greeting',
      new Greeting(d.getHours())
    )
    let runningClock = setInterval(() => {
      setState('greeting',
        new Greeting(d.getHours())
      )
    }, 600000)
  }

  setUser(user = '') {
    setState('user', user)
  }
}