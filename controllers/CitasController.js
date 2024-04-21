// importamos el modelo
import Citas from "../models/citas.js";


// crear métodos
// crear agregar citas

export const agregarCitas = async (req, res) => {
    try {
        await Citas.create(req.body);
        res.json({msg: "Cita creada correctamente"});
    } catch (error) {
        res.json({msg: error.message});
        }    
};

// mostrar citas

export const mostrarCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll();
        res.json(citas);
    } catch (error) {
        res.json({msg: error.message});
    }
};

// mostrar una cita

export const mostrarUnaCita = async (req, res) => {
    try {
        const cita = await Citas.findByPk(req.params.id);
        res.json(cita);
    } catch (error) {
        res.json({msg: error.message});
    }
};

// borrar una cita
export const borrarUnaCita = async (req, res) => {
    try {
        const cita = await Citas.findByPk(req.params.id);
        await cita.destroy();
        res.json({msg: "Cita borrada correctamente"});
    } catch (error) {
        res.json({msg: error.message});
    }
};

// Modificar una cita
export const modificarUnaCita = async (req, res) => {
    try {
        await Citas.update(req.body, {   
            where: {id: req.params.id}
        });
        res.json({msg: "Cita modificada correctamente"});
    } catch (error) {
        res.json({msg: error.message});
    }
};

