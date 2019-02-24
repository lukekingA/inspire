let timeDict = [24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

function minutes(minute) {
  let outMin = ''
  if (minute.toString().length < 2) {
    outMin = '0' + minute
  } else {
    return minute.toString()
  }
  return outMin
}
export default class MyTime {
  constructor(data) {
    this.hour = timeDict[data.hour]
    this.minute = minutes(data.minutes)
  }

  get TimeString() {
    return `${this.hour}:${this.minute}`
  }
}