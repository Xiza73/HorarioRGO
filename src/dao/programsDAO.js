const Program = require('../models/Program');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.createProgram = async (data) => {
    try{
        const { name, 
                color,
                announcer,
                moderator,
                day,
                hourIni,
                hourFin, } = data
        const program = new Program({ 
            name, 
            color,
            announcer,
            moderator,
            day,
            hourIni,
            hourFin,
            moderatorReport: "",
            announcerReport: ""
        })
        await program.save();
        return {
            status: 1,
            msg: "Programa insertado"
        };
    }catch(err){
        return {
            error: errorHandler(err),
            status: 0,
            msg: "Error al crear programa"
        }
    }
}

exports.readPrograms = async () => {
    try {
        const data = await Program.find()
            .populate('announcer', 'name')
            .populate({
                path: "moderator",
                //select: ["role", "name"],
                populate: {
                    path: "role"
                }
            })
        return data;
    } catch (err) {
        return {
            error: errorHandler(err),
            status: 0,
            msg: "Error al obtener programas"
        }
    }
}

exports.readReports = async () => {
    try {
        const data = await Program.find()
        .populate({
            path: "moderator",
            select: "name -_id"
        })
        .select('moderatorReport -_id')
        let d = data.filter((e) => e.moderator.name !== 'Sin Mod' && e.moderatorReport !== '')
        return d;
    } catch (err) {
        return {
            error: errorHandler(err),
            status: 0,
            msg: "Error al obtener programas"
        }
    }
}

exports.updateProgram = async (data) => {
    try{
        const { _id,
                name, 
                color,
                announcer,
                moderator,
                day,
                hourIni,
                hourFin,
                moderatorReport,
                announcerReport } = data;
        for(let a of announcer){
            if(a._id){
                a = a._id
            }
        }
        let mod;
        if(moderator._id){
            mod = moderator._id
        }else{
            mod = moderator
        }
        await Program.findByIdAndUpdate(_id, { 
            name, 
            color,
            announcer,
            moderator: mod,
            day,
            hourIni,
            hourFin,
            moderatorReport,
            announcerReport
        });
        return {
            status: 1,
            msg: "Programa actualizado"
        }
    }catch(err){
        return {
            error: errorHandler(err),
            status: 0,
            msg: "Error al actualizar programa"
        }
    }
    
}

exports.deleteProgram = async (body) => {
    try{
        const { _id } = body;
        await Program.findOneAndDelete({_id})
        return {
            status: 1,
            msg: "Objeto eliminado"
        }
    }catch(err){
        return {
            error: errorHandler(err),
            status: 0,
            msg: "Error al eliminar datos"
        }
    }
}