const express = require('express');
const router = express.Router();

//Controller
const { createPerson, readPerson, readByRole, readByName } = require('../controllers/personController');

router.post('/', createPerson);

router.get('/', readPerson);

router.get('/role/', readByRole);

router.get('/name/', readByName);

module.exports = router;