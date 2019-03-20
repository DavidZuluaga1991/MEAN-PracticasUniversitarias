const UserInternship = require('../models/usersinternships');

const userinternshipCtrl = {};

userinternshipCtrl.getUserInternships = async (req, res, next) => {
    const userinternships = await UserInternship.find()
                            .populate('users')
                            .populate('internships');
    res.json(userinternships);
};

userinternshipCtrl.createUserInternships = async (req, res, next) => {
    const userinternships = new UserInternship({
        users: req.body.users,
        internships: req.body.internships
    });
    await userinternships.save();
    res.json({status: 'User Internships created'});
};

userinternshipCtrl.getUserInternship = async (req, res, next) => {
    const { id } = req.params;
    const userinternships = await UserInternship.findById(id);
    res.json(userinternships);
};

userinternshipCtrl.editUserInternship = async (req, res, next) => {
    const { id } = req.params;
    const userinternship = {
        users: req.body.users,
        internships: req.body.internships
    };
    await UserInternship.findByIdAndUpdate(id, {$set: userinternship}, {new: true});
    res.json({status: 'User Internship Updated'});
};

userinternshipCtrl.deleteUserInternship = async (req, res, next) => {
    await UserInternship.findByIdAndRemove(req.params.id);
    res.json({status: 'User Internship Deleted'});
};

module.exports = userinternshipCtrl;