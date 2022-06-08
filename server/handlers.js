const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// POST to sign user in
const signin = async (req, res) => {
  // Creates a new user info
  const client = new MongoClient(MONGO_URI, options);
  // let foundUser = null;
  let email = req.body.email.toLowerCase();

  // Make a try
  try {
    await client.connect();
    const db = client.db("HogwartsMore");
    console.log("connected!");

    // For a unique user
    const result = await db.collection("users").findOne({ email });

    console.log(result);

    client.close();
    console.log("disconnected!");

    result
      ? res.status(200).json({ status: 200, data: result })
      : res.status(404).json({ status: 404, data: "Not found" });
  } catch (err) {
    // If the try fails
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// Get a specific user info
const getUser = async (req, res) => {
  // Creates a new client
  const client = new MongoClient(MONGO_URI, options);
  const _id = req.params._id;

  // Make a try
  try {
    await client.connect();
    const db = client.db("HogwartsMore");
    console.log("connected!");

    // For a unique user
    const result = await db.collection("users").findOne({ _id });
    console.log(result);

    client.close();
    console.log("disconnected!");

    result
      ? res.status(200).json({ status: 200, data: result })
      : res.status(404).json({ status: 404, data: "Not found" });
  } catch (err) {
    // If the try fails
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

const addUser = async (req, res) => {
  // Creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // Make a try
  try {
    // Connect to the client
    await client.connect();
    const newUser = req.body;
    // Adding an _id
    console.log(req.body);
    newUser._id = uuidv4();
    console.log(newUser);

    // Connecting to database
    const db = client.db("HogwartsMore");
    console.log("connected");
    const result = await db.collection("users").insertOne(newUser);
    console.log(result);

    // Closing connection
    client.close();
    console.log("disconnected!");
    res.status(201).json({
      status: 201,
      data: newUser._id,
    });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

const deleteUser = async (req, res) => {
  // Creates a new client
  const client = new MongoClient(MONGO_URI, options);
  const _id = req.params._id; // Identifies the one to delete

  console.log("the request.params._id is ", req.params._id);
  console.log("the res id", _id);

  // Make a try
  try {
    // Connect to the client
    await client.connect();

    // const query = { _id: id };

    const db = client.db("HogwartsMore");
    console.log("connected!");
    const result = await db.collection("users").deleteOne({ _id });

    // Closing the connection
    client.close();
    console.log("disconnected!");
    console.log(result);

    result.deletedCount !== 0
      ? res.status(204).json({ status: 204 }) // 204 specific to delete
      : res.status(404).json({ status: 404, data: "Not Found" });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

module.exports = {
  signin,
  getUser,
  addUser,
  deleteUser,
};
