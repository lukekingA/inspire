import MyDate from "../../models/myDate.js";

//private
let _state = {
  time: '',
  date: {}
}

let _subscribers = {
  time: [],
  date: []
}

function setState(prop, val) {
  _state[prop] = val
  _subscribers[prop].forEach(fn => fn())
}




//public
export default class ClockService {
  addsubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Time() {
    return _state.time
  }

  get Date() {
    return _state.date
  }

  getTheTime() {
    let start = new Date()
    console.log('starting clock')
    let formatTime = `${start.getHours()}:${start.getMinutes()}`
    let runningClock = setInterval(() => {
      setState('time', formatTime)
    }, 60000)
  }

  getTheDate() {
    let start = new Date()
    console.log('starting date clock')
    let dateData = {
      month: start.getMonth(),
      weekday: start.getDay(),
      day: start.getDate(),
      year: start.getFullYear()
    }
    let formatDate = new MyDate(dateData)

    let runningDate = setInterval(() => {
      setState('time', formatDate)
    }, 60000)
  }
}