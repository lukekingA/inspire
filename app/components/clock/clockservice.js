import MyDate from "../../models/myDate.js";
import MyTime from "../../models/myTime.js"
//private
let _state = {
  time: {},
  date: {},
  milTime: true
}

let _subscribers = {
  time: [],
  date: [],
  milTime: []
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

  get DDate() {
    return _state.date
  }

  get MilTime() {

    return _state.milTime
  }

  getTheTime() {
    let runningClock = setInterval(() => {
      let start = new Date()
      let time = {
        hour: start.getHours(),
        minutes: start.getMinutes()
      }
      let formatTime = new MyTime(time)
      setState('time', formatTime)
    }, 1000)
  }

  getTheDate() {
    let runningDate = setInterval(() => {
      let start = new Date()
      let dateData = {
        month: start.getMonth(),
        weekday: start.getDay(),
        day: start.getDate(),
        year: start.getFullYear()
      }
      let formatDate = new MyDate(dateData)
      setState('date', formatDate)
    }, 1000)
  }

  milTime(val = false) {
    setState('milTime', val)
  }
}