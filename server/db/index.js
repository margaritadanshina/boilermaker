const db = require('./db')

const User = require('./models/users')
const Songs = require('./models/songs')


module.exports = {
    db,
    models: {
        User,
        Songs
    },
}