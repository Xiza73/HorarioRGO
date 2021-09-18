const express = require('express');
const router = express.Router();

//Controller
const { createProgram,
        listPograms,
        updateProgram,
        deleteProgram } = require('../controllers/programController');

router.post('/', createProgram);

router.get('/', listPograms);

router.put('/', updateProgram);

router.delete('/', deleteProgram);

module.exports = router;