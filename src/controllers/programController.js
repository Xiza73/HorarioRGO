const { createProgram, 
        readPrograms, 
        deleteProgram, 
        updateProgram } = require('../dao/programsDAO');

exports.createProgram = async (req, res) => {
    const confirm = await createProgram(req.body);
    if(confirm.error){
        return res.status(400).json(confirm)
    }
    return res.json(confirm)
}

exports.listPograms = async (req, res) => {
    const data = await readPrograms()
    if(data.error){
        return res.status(400).json(data)
    }
    return res.json(data)
}

exports.deleteProgram = async (req, res) => {
    const confirm = await deleteProgram(req.body);
    if(confirm.error){
        return res.status(400).json(confirm)
    }
    return res.json(confirm)
}

exports.updateProgram = async (req, res) => {
    const confirm = await updateProgram(req.body);
    if(confirm.error){
        return res.status(400).json(confirm)
    }
    return res.json(confirm)
}