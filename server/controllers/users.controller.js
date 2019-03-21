const User = require('../models/users');

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
        user:  req.body.user,
        password:  req.body.password,
        isadmin: req.body.isadmin
    });
    await user.save();
    res.json({status: 'User created'});
};

userCtrl.getUser = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
};

userCtrl.editUser = async (req, res, next) => {
    const { id } = req.params;
    const users = {
        name: req.body.name,
        lastname: req.body.lastname,
        code: req.body.code,
        program: req.body.program,
        user:  req.body.user,
        password:  req.body.password,
        isadmin: req.body.isadmin
    };
    await User.findByIdAndUpdate(id, {$set: users}, {new: true});
    res.json({status: 'User Updated'});
};

userCtrl.deleteUser = async (req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User Deleted'});
};

module.exports = userCtrl;