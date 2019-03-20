const express = require('express');
const router = express.Router();

// router.get('/',(req, res) => {
//     res.json({mensaje: 'Hola Mundo'});
// });

// module.exports = router;

const si = require('../controllers/usersinternships.controller');

router.get('/', si.getUserInternships);
router.post('/', si.createUserInternships);
router.get('/:id', si.getUserInternship);
router.put('/:id', si.editUserInternship);
router.delete('/:id', si.deleteUserInternship);

module.exports = router;