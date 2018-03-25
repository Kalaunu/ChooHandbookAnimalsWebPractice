//Choo imports
var choo = require('choo')
var html = require('choo/html')

//Import templates
var main = require('./templates/main.js')

//Initialize Choo
var app = choo()

app.use(function (state, emitter) {
    state.animals = [{type: 'lion', x: 200, y: 100},
        {type: 'crocodile', x: 50, y: 300}]


//add an animal emitter
    emitter.on('addAnimal', function () {
        let obj = {type: 'lion', x: 100, y: 200}
        state.animals.push(obj)

        emitter.emit('render')
    })
})

//Create the route
app.route('/', main)

// start app
app.mount('div')

