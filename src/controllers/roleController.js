const { errorHandler } = require('../helpers/dbErrorHandler');
const { addRole, readRoles } = require('../dao/roleDAO');
//Model
const Role = require('../models/Role');

exports.create = async (req, res) => {
    const { name } = req.body;
    const confirm = await addRole(name);
    if(confirm.error){
        return res.status(400).json(confirm)
    }
    return res.json(confirm)
}

exports.read = async (req, res) => {
    const data = await readRoles();
    if(data.error){
        return res.status(400).json(data)
    }
    return res.json(data)
}

exports.readById = async (req, res) => {
    try {
        const data = await Role.findById(req.params.id);
        return res.json(data);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler(err),
            status: 0,
            msg: "Error al encontrar rol"
        })
    }
}

exports.update = async (req, res) => {
    const { name } = req.body;
    console.log(req.params.id)
    try {
        await Role.findByIdAndUpdate(req.params.id, { name });
        return res.json({
            status: 1,
            msg: "Rol actualizado"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler(err),
            status: 0,
            msg: "Error al encontrar rol"
        })
    }
}

exports.remove = async (req, res) => {
    try {
        await Role.findByIdAndRemove(req.params.id)
        return res.json({
            status: 1,
            msg: "Rol eliminado"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler(err),
            status: 0,
            msg: "Error al eliminar rol"
        })
    }
}