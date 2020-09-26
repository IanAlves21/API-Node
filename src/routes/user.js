const express = require('express');
const user = require('../controllers/user');

const router = express.Router();

router.route('/').get(user.getAll);

router.route('/:id').get(user.get);

router.route('/').post(user.post);

router.route('/').put(user.put);

router.route('/:id').delete(user.del);

module.exports = router;