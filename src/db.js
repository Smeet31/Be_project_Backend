const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect("mongodb+srv://smeet:3112@learning-node.wtulu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", connectionParams);
    console.log("connected to the database successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect to the database");
  }
};
