let dateDict = {
  month: [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ],
  weekDay: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
}




export default class MyDate {
  constructor(data) {
    this.month = dateDict.month[data.month]
    this.weekday = dateDict.weekDay[data.weekday]
    this.day = data.day
    this.year = data.year
  }
  get DateString() {
    return `${this.month}, ${this.weekday} ${this.day}, ${this.year}`
  }
}