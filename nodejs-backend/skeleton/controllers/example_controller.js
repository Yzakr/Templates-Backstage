import example from '../models/example_model';
import mongoose from 'mongoose';

const { find, findOne, findOneAndUpdate, findOneAndRemove } = mongoose

// Obtener todos los ejemplos
const getExamples = async (req, res) => {
    try {
        const result = await find();
        res.status(200).json(result);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

// Obtener un ejemplo
const getspecExample = async (req,res) => {
    const id = req.params.id;
    try {
        const ex = await findOne({id: id});
        res.status(200).json(ex);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

// Crear un ejemplo
const createExample =  async (req, res) => {
    console.log(req.body);
    const newExample = new example({
        name:req.body.name,
        id:req.body.id,
        registration:req.body.registration,
        subjects:req.body.subjects,
        created_on:req.body.created_on
    })
    try {
        await newExample.save();
        res.status(201).json(newExample);
    } catch(error) {
        res.status(400).json({ message : error.message });
    }

}

// Modificar un ejemplo
const updateExample = async (req, res) => {
    const id= req.params.id;
    try{
        await findOneAndUpdate({
            id: id,
        },
        {   
            name:req.body.name,
            registration:req.body.registration,
            subjects:req.body.subjects,
            created_on:req.body.created_on
        }
        )
        res.status(202).json({id: id});
    } catch (error) {
        res.status(401).json({message: error.message});
    }    
}

// Eliminar un ejemplo
const deleteExample = async (req, res) => {
    const id = req.params.id;
    try {
        await findOneAndRemove({ id: id });
        res.status(203).json({ id: id });

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

const sum = (a, b) => {
    return a + b
}

export { getExamples, getspecExample, createExample, updateExample, deleteExample, sum };