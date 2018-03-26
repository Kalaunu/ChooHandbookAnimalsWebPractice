//Choo imports
let choo = require('choo')
let html = require('choo/html')

//Import templates
let main = require('./templates/main.js')

//Initialize Choo
let app = choo()

app.use(function (state, emitter) {
    // initialize state
    state.animals = [
        {type: 'lion', x: 200, y: 100},
        {type: 'crocodile', x: 50, y: 300}
    ]

    // add animal
    emitter.on('addAnimal', function (data) {
        let animals = ['crocodile', 'koala', 'lion', 'tiger', 'walrus']

        let type = Math.floor(Math.random() * 5)
        let x = data.x
        let y = data.y

        let obj = {type: animals[type], x: x, y: y}
        state.animals.push(obj)

        emitter.emit('render')
    })

    // remove animal
    emitter.on('removeAnimal', function (i) {
        state.animals.splice(i, 1)
        emitter.emit('render')
    })
})

//Create the route
app.route('/', main)

// start app
app.mount('div')

