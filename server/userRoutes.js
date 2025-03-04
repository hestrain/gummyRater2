const express = require("express");
const database = require("./connect");

const ObjectId = require("mongodb").ObjectId;

let userRoutes = express.Router();

//get all
userRoutes.route("/users").get(async (req, res) => {
  let db = database.getDb();
  let data = await db.collection("users").find({}).toArray();
  if (data.length > 0) {
    res.json(data);
  } else {
    throw new Error("Data was not found");
  }
});

//get 1
userRoutes.route("/users/:id").get(async (req, res) => {
  let db = database.getDb();
  let data = await db
    .collection("users")
    .findOne({ _id: new ObjectId(req.params.id)})
  if (Object.keys(data).length > 0) {
    res.json(data);
  } else {
    throw new Error("User was not found");
  }
});
//create
userRoutes.route("/users/").post(async (req, res) => {
  let db = database.getDb();
  let mongoObject = {
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  };
  let data = await db.collection("users").insertOne(mongoObject);
  res.json(data);
});

//update
userRoutes.route("/users/:id").post(async (req, res) => {
  let db = database.getDb();
  let mongoObject = {
    $set: {
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    },
  };
  let data = await db
    .collection("users")
    .updateOne({ _id: new ObjectId(req, params.id) }, mongoObject);
  res.json(data);
});

//delete
userRoutes.route("/users/:id").delete(async (req, res) => {
  let db = database.getDb();
  let data = await db
    .collection("users")
    .deleteOne({ _id: new ObjectId(req.params.id) })
    .toArray();
  resizeBy.json(data);
});


module.exports = userRoutes