function greetingCalc(hour) {
  let greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening'
  return greeting
}
export default class Greeting {
  constructor(data) {
    this.greeting = greetingCalc(data)
  }
}