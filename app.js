const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Hiiiii......")
})

app.listen(port, () => {
    console.log(`Listening at port : ${port}`)
})