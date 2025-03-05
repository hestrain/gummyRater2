const express = require("express");
const database = require("./connect");

const ObjectId = require("mongodb").ObjectId;

let gummyRoutes = express.Router();

//get all
gummyRoutes.route("/gummy").get(async (req, res) => {
  let db = database.getDb();
  let data = await db.collection("gummy").find({}).toArray();
  if (data.length > 0) {
    res.json(data);
  } else {
    throw new Error("Data was not found");
  }
});

//get 1
gummyRoutes.route("/gummy/:id").get(async (req, res) => {
  let db = database.getDb();
  let data = await db
    .collection("gummy")
    .findOne({ _id: new ObjectId(req.params.id)})
  if (Object.keys(data).length > 0) {
    res.json(data);
  } else {
    throw new Error("User was not found");
  }
});
//create
gummyRoutes.route("/gummy/").post(async (req, res) => {
  let db = database.getDb();
  let mongoObject = {
    brand: req.body.brand,
    title: req.body.title,
    notes: req.body.notes,
    felt: req.body.felt,
    rating: req.body.rating,
    horn: req.body.horn,
    munchie: req.body.munchie,
    munchNotes: req.body.munchNotes,
    morningAfter: req.body.morningAfter,
    weeknight: req.body.weeknight,
    cbd: req.body.cbd,
    thc: req.body.thc,
    dateCreated: req.body.dateCreated
  };
  let data = await db.collection("gummy").insertOne(mongoObject);
  res.json(data);
});

//update
gummyRoutes.route("/gummy/:id").post(async (req, res) => {
  let db = database.getDb();
  let mongoObject = {
    $set: {
      brand: req.body.brand,
      title: req.body.title,
      notes: req.body.notes,
      felt: req.body.felt,
      rating: req.body.rating,
      horn: req.body.horn,
      munchie: req.body.munchie,
      munchNotes: req.body.munchNotes,
      morningAfter: req.body.morningAfter,
      weeknight: req.body.weeknight,
      cbd: req.body.cbd,
      thc: req.body.thc,
    },
  };
  let data = await db
    .collection("gummy")
    .updateOne({ _id: new ObjectId(req, params.id) }, mongoObject);
  res.json(data);
});

//delete
gummyRoutes.route("/gummy/:id").delete(async (req, res) => {
  let db = database.getDb();
  let data = await db
    .collection("gummy")
    .deleteOne({ _id: new ObjectId(req.params.id) })
    .toArray();
  res.json(data);
});


module.exports = gummyRoutes