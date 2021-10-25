const express = require('express');
const router = express.Router();

//Controller
const { createProgram,
        listPograms,
        updateProgram,
        deleteProgram,
        readReports,
        cleanReports } = require('../controllers/programController');

router.post('/', createProgram);

router.get('/', listPograms);

router.get('/reports', readReports);

router.put('/reports', cleanReports);

router.put('/', updateProgram);

router.delete('/', deleteProgram);

module.exports = router;