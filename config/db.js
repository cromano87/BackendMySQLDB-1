// Se configura la base de datos para la aplicación
import { Sequelize } from "sequelize";

const BD = new Sequelize('citasbd', 'root', '', {
    host: 'localhost',
    dialect:'mysql'
});

export default BD;