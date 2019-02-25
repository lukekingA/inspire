//private

function ktof(kel) {
  return ((kel - 273.15) * (9 / 5)) + 32
}

function ktoc(kel) {
  return kel - 273.15
}

//public
export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data)
    //this.condition = data.weather[0].main
    this.celsius = ktoc(data.main.temp).toFixed(0)
    this.fahren = ktof(data.main.temp).toFixed(0)
    this.city = data.name
    this.kelvin = data.main.temp
    this.weather = data.weather[0].main
    this.icon = data.weather[0].icon
    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
  }

  get WTemplate() {
    return `
<div class="text-light txt-shadow bg-dk-transparent d-inline-block rounded shadow p-3">
	<div class="d-flex">
		<h4 class="mr-2">${this.fahren} <sup>F</sup></h4>
		<h5>${this.celsius} <sup>C</sup></h5>
	</div>
  <div>
    <p class="mb-0">${this.weather}  <img src="http://openweathermap.org/img/w/${this.icon}.png" alt=""></p>
		<p class="mb-0">${this.city}</p>
	</div>
</div>`
  }

}