const connect = require("./connect")
const express = require('express')
const cors = require('cors')
const users = require("./userRoutes")
const gummys = require("./gummyRoutes")


const app = express()
const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())
app.use(users)
app.use(gummys)


app.listen(PORT, () => {
    connect.connectToServer()
    console.log(`Server is running on port ${PORT}`);
})