import ImageService from "./image-service.js";

const _is = new ImageService()

function setBg() {
  let image = _is.Image
  document.querySelector('body').setAttribute('style', `background-image:url(${image});`)
}

export default class ImageController {
  constructor() {
    _is.addsubscriber('image', setBg)
    _is.getapiImage()
  }

}