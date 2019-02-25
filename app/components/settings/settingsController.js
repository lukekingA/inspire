//private

//public
export default class SettingsController {

  visSets(e) {
    e.target.setAttribute('hidden', true)
    let ell = document.querySelector('#settings')
    ell.removeAttribute('hidden')
    let resetEll = setTimeout(() => {
      ell.setAttribute('hidden', true)
      e.target.removeAttribute('hidden')
    }, 15000)
  }
}