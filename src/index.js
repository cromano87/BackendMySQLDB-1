import express from 'express';
import cors from 'cors';
// importamos la configuración de la BD
import BD from '../config/db.js';
// importamos el archivo de las rutas
import citasRoutes from '../routes/Routes_Citas.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/citas', citasRoutes);

// autenticación BD
try {
    await BD.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

// muestra mensaje en el navegador
app.get('/', (req, res) => {
    res.send('iniciado proyecto MySQL');
});

// configuracion del puerto en el vavegador
app.listen(5000, () => {
    console.log('servidor corriendo en http://localhost:5000');
});

