import express from 'express';
import example_router from './routes/example_routes';
// Configuración base de express
const app = express();
const port = 4000;

// Declaración de la ruta de ejemplo
app.use('/example', example_router)

// Ejecución del servidor de express
app.listen(port, () =>{
    console.log('Server started in port '+ port);
})