//const { createPerson, readPerson, readByRole, readByName } = require('../dao/personDAO');
const { PersonDAO } = require('../dao/personDAO');

const personDAO = new PersonDAO();

exports.createPerson = async (req, res) => {
    const confirm = await personDAO.createPerson(req.body);
    if(confirm.error){
        return res.status(400).json(confirm)
    }
    return res.json(confirm)
}

exports.readPerson = async (req, res) => {
    const data = await personDAO.readPerson()
    if(data.error){
        return res.status(400).json(data)
    }
    return res.json(data)
}

exports.readByRole = async (req, res) => {
    const data = await personDAO.readByRole(req.query.role)
    if(data.error){
        return res.status(400).json(data)
    }
    return res.json(data)
}

exports.readByName = async (req, res) => {
    const data = await personDAO.readByName(req.body.name)
    if(data.error){
        return res.status(400).json(data)
    }
    return res.json(data)
}