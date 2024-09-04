import { DataTypes } from 'sequelize';
import sequelize from '../connection.js';

const Party = sequelize.define('Party', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    partyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estd: {
        type: DataTypes.STRING,
    },
    partyImageUrl: {
        type: DataTypes.STRING,
    }
});

export default Party;
