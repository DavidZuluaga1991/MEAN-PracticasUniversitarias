const express = require('express');
const router = express.Router();

// router.get('/',(req, res) => {
//     res.json({mensaje: 'Hola Mundo'});
// });

// module.exports = router;

const user = require('../controllers/users.controller');

router.get('/', user.getUsers);
router.post('/', user.createUser);
router.get('/:id', user.getUser);
router.put('/:id', user.editUser);
router.delete('/:id', user.deleteUser);

module.exports = router;