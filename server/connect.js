const { MongoClient, ServerApiVersion } = require("mongodb")
const { collection } = require("./models/gummy.model")
const { connect } = require("mongoose")
require("dotenv").config({path:"./config.env"})
const Db = process.env.ATLAS_URI


const client = new MongoClient(Db, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

let database

module.exports = {
    connectToServer: () => {

         database =  client.db("Ratings")
    },
    getDb: () => {
        return database
    }
}