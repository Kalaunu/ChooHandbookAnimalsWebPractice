let html = require('choo/html')

module.exports = function (onclick, animal, i) {
    let type = animal.type
    let x = animal.x
    let y = animal.y

    // create html template
    return html`
    <img src="/assets/${type}.gif" style="left: ${x}px; top: ${y}px;" id=${i} onclick=${onclick}>
  `
}