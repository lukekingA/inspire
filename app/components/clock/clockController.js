import ClockService from "./clockservice.js";

//private
let _cs = new ClockService()

function drawClock() {
  let template = ''
  template += `<div class="text-white txt-shadow">`
  template += `<p>${_cs.DDate.DateString}</p>`
  template += `<p>${_cs.Time.TimeString}</p></div>`

  document.querySelector('#clock').innerHTML = template
}


//public
export default class ClockController {
  constructor() {
    _cs.addsubscriber('time', drawClock)
    _cs.addsubscriber('date', drawClock)
    _cs.getTheDate()
    _cs.getTheTime()
  }
}