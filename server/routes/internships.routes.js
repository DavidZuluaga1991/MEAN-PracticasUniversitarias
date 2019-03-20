const express = require('express');
const router = express.Router();

const internship = require('../controllers/internships.controller');

router.get('/', internship.getInternships);
router.post('/', internship.createInternships);
router.get('/:id', internship.getInternship);
router.put('/:id', internship.editInternship);
router.delete('/:id', internship.deleteInternship);

module.exports = router;