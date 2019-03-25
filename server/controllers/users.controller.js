const User = require("../models/users");
const UI = require("../models/usersinternships");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const express = require("express");
const app = express();
var jwtClave = "davidzuluaga";
app.use(express.static("publica"));
app.use(bodyParser.json());
app.use(expressJwt({ secret: jwtClave }).unless({ path: ["/login"] }));

const userCtrl = {};

userCtrl.getUsers = async (req, res, next) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.createUser = async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    code: req.body.code,
    program: req.body.program,
    user: req.body.user,
    password: req.body.password,
    isadmin: req.body.isadmin
  });
  await user.save();
  res.json({ status: "Usuario Creado Correctamente" });
};

userCtrl.getUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json(user);
};

userCtrl.loginUser = async (req, res, next) => {
  // console.log(req.body);
  const users = await User.findOne({
    user: req.body.user,
    password: req.body.password
  });
  if (users !== null) {
    const ui = await UI.find({
      users: users._id
    });
    // console.log(ui);
    // var token = jwt.sign(
    //   {
    //     usuario: "cecilio"
    //   },
    //   jwtClave
    // );
    let token = jwt.sign(
      { name: users.name, id: users._id, isadmin: users.isadmin, ui: ui },
      jwtClave, 
      // { algorithm: 'RS256'},
      // { expiresIn: "24h" } // expires in 24 hours
      { expiresIn: "120" } // expires in 4 min
    );    
    res.json({ user: users, token: token });
  } else {
    res.json({ status: "Usuario Incorrecto" });
  }
};

userCtrl.editUser = async (req, res, next) => {
  const { id } = req.params;
  const users = {
    name: req.body.name,
    lastname: req.body.lastname,
    code: req.body.code,
    program: req.body.program,
    user: req.body.user,
    password: req.body.password,
    isadmin: req.body.isadmin
  };
  await User.findByIdAndUpdate(id, { $set: users }, { new: true });
  res.json({ status: "Usuario Modificado Correctamente" });
};

userCtrl.deleteUser = async (req, res, next) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({ status: "Usuario Eliminado Correctamente" });
};

module.exports = userCtrl;
