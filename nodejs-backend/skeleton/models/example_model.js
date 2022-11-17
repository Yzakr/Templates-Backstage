import { Schema, model } from 'mongoose'

// Estructura del objeto Ejemplo y mapeo a una base de datos MongoDB
const exampleSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
        unique: true,    
    },
    registration: {
        type: String,
        required: true,
        unique: true,
    },
    subjects: {
        type: [String],
        required: true,
    },
    registered_on: {
        type: Date,
        default: new Date(),
    },

})

var exampledata = model('examples', exampleSchema);
export default exampledata;