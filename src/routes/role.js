const express = require('express');
const router = express.Router();

//Controller
const { create,
        read, 
        readById,
        update, 
        remove } = require('../controllers/roleController');

router.post('/', create);

router.get('/', read);

router.get('/:id', readById);

router.put('/:id', update);

router.delete('/:id', remove);

module.exports = router;