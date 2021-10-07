const Person = require('../models/Person');
const Role = require('../models/Role');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.PersonDAO = class {
    constructor(){}

    async createPerson(data){
        try{
            const { role,
                    name,
                    email,
                    birthday } = data
            //Buscar rol por name
            let { _id } = await Role.findOne({'name' : role}, {_id: 1}).exec();
            const person = new Person({ 
                role: _id,
                name,
                email,
                birthday
            })
            await person.save();
            return {
                status: 1,
                msg: "Persona creada"
            };
        }catch(err){
            return {
                error: errorHandler(err),
                status: 0,
                msg: "Error al crear persona"
            }
        }
    }

    async readPerson(){
        try {
            const data = await Person.find()
            .populate({
                path: "role",
                select: ["name"]
            })
            .sort({
                name: 'asc'
            })
            return data;
        } catch (err) {
            return {
                error: errorHandler(err),
                status: 0,
                msg: "Error al obtener personas"
            }
        }
    }

    async deletePerson(_id){
        try {
            await Person.findOneAndDelete({_id})
            return {
                status: 1,
                msg: "Persona eliminada"
            };;
        } catch (err) {
            return {
                error: errorHandler(err),
                status: 0,
                msg: "Error al eliminar"
            }
        }
    }

    async readByRole(role){
        try {
            let { _id } = await Role.findOne({'name' : role}, {_id: 1})
            .exec();
            const data = await Person.find({role: _id})
            .sort({
                name: 'asc'
            })
            return data;
        } catch (err) {
            return {
                error: errorHandler(err),
                status: 0,
                msg: "Error al obtener persona"
            }
        }
    }
    
    async readByName(name){
        try {
            const data = await Person.findOne({name})
            return data;
        } catch (err) {
            return {
                error: errorHandler(err),
                status: 0,
                msg: "Error al obtener persona"
            }
        }
    }

    async readById(_id){
        try {
            const data = await Person.findOne({_id})
            return data;
        } catch (err) {
            return {
                error: errorHandler(err),
                status: 0,
                msg: "Error al obtener persona"
            }
        }
    }
}
