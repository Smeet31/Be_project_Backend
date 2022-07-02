const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const password = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, "smeet31@3112", {
    expiresin: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstname: Joi.string().required().label("First Name"),
    lastname: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: password().required().label("Password"),
  });
  return schema.validate(data);
};

module.export = { User, validate };
