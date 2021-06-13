const db = require('./db')
const app = require('./app')
const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`Your server is listening on port ${port}`)
})