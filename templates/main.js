let html = require('choo/html')

//Get the animal template
let animal = require('./animal.js')


//Export Module
module.exports = function (state, emit) {

    return html`
    <div class="container">
    <div class="grass">
    <img src="/assets/bg.gif" onclick=${add} />
    ${state.animals.map(animal)}
</div>
</div>`

    //add new animal to state
    function add () {
        emit('addAnimal')
    }


}