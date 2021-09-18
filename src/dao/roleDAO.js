const Role = require('../models/Role');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.addRole = async (name) => {
    const role = new Role({ name });
    try {
        await role.save()
        return {
            status: 1,
            msg: "Rol insertado"
        };
    } catch (err) {
        return {
            error: errorHandler(err),
            status: 0,
            msg: "Error al insertar rol"
        }
    }
}

exports.readRoles = async () => {
    try {
        const data = await Role.find()
        return data;
    } catch (err) {
        return {
            error: errorHandler(err),
            status: 0,
            msg: "Error al obtener roles"
        }
    }
}