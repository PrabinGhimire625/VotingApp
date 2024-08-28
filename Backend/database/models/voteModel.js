import sequelize from '../connection.js';
import { DataTypes } from 'sequelize';
const Vote = sequelize.define('Vote', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
});

export default Vote;
