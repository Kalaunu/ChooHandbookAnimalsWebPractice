let html = require('choo/html')

//Get the animal template
let animal = require('./animal.js')


//Export Module
module.exports = function (state, emit) {
    // create html template
    return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" onclick=${add} />
        ${state.animals.map(animalMap)}
      </div>
    </div>
  `

    // map function
    function animalMap (obj, i) {
        return animal(remove, obj, i)
    }

    // add new animal to state
    function add (e) {
        let x = e.offsetX - 20
        let y = e.offsetY - 10

        emit('addAnimal', {x: x, y: y})
    }

    // remove animal from state
    function remove (e) {
        let index = e.target.id
        emit('removeAnimal', index)
    }
}