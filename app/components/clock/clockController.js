import ClockService from "./clockservice.js";

//private
let _cs = new ClockService()

function drawClock() {

  let template = ''
  template += `<div class="text-white txt-shadow bg-dk-transparent d-inline-block rounded shadow p-3">`
  template += `<p>${_cs.DDate.DateString}</p>`
  template += `<p class="mb-0" ${_cs.MilTime ? 'hidden': ''}>${_cs.Time.TimeString}</p>`
  template += `<p class="mb-0" ${_cs.MilTime ? '': 'hidden'}>${_cs.Time.MilTimeString}</p>`
  template += `</div>`

  document.querySelector('#clock').innerHTML = template


  document.querySelector('#clock-type').innerHTML = `
  <label class="text-light txt-shadow" for="m-time">24</label>
  <input type="checkbox" ${_cs.MilTime ? 'checked' : ''} name="militaryTime" id="m-time" value="${_cs.MilTime}" onclick="app.controllers.clockController.milTime(event)">`
}


//public
export default class ClockController {
  constructor() {
    _cs.addsubscriber('time', drawClock)
    _cs.addsubscriber('date', drawClock)
    _cs.addsubscriber('milTime', drawClock)
    _cs.getTheDate()
    _cs.getTheTime()
    _cs.milTime()
  }

  milTime(e) {
    console.log(e.target.value)
    let time = e.target.value
    time = time ? '' : 'true'
    console.log(time)
    _cs.milTime(time)
  }
}