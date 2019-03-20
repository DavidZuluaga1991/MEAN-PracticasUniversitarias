const Internship = require('../models/internships');

const internshipCtrl = {};

internshipCtrl.getInternships = async (req, res, next) => {
    const internships = await Internship.find();
    res.json(internships);
};

internshipCtrl.createInternships = async (req, res, next) => {
    const internships = new Internship({
        namecompany: req.body.namecompany,
        code: req.body.code,
        sede: req.body.sede,
        datefrom: req.body.datefrom,
        dateto:  req.body.dateto,
        requirements:  req.body.requirements,
        programs:  req.body.programs,
        photography:  req.body.photography
    });
    await internships.save();
    res.json({status: 'Internships created'});
};

internshipCtrl.getInternship = async (req, res, next) => {
    const { id } = req.params;
    const internships = await Internship.findById(id);
    res.json(internships);
};

internshipCtrl.editInternship = async (req, res, next) => {
    const { id } = req.params;
    const internship = {
        namecompany: req.body.namecompany,
        code: req.body.code,
        sede: req.body.sede,
        datefrom: req.body.datefrom,
        dateto:  req.body.dateto,
        requirements:  req.body.requirements,
        programs:  req.body.programs,
        photography:  req.body.photography
    };
    await Internship.findByIdAndUpdate(id, {$set: internship}, {new: true});
    res.json({status: 'Internship Updated'});
};

internshipCtrl.deleteInternship = async (req, res, next) => {
    await Internship.findByIdAndRemove(req.params.id);
    res.json({status: 'Internship Deleted'});
};

module.exports = internshipCtrl;