const express = require('express');
const router = express.Router();

//Controller
const { createPerson, readPerson, deletePerson, readByRole, readByName, readById } = require('../controllers/personController');

router.post('/', createPerson);

router.get('/', readPerson);

router.delete('/', deletePerson);

router.get('/role/', readByRole);

router.get('/name/', readByName);

router.get('/id/', readById);

module.exports = router;