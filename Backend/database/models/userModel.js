import sequelize from '../connection.js';
import { DataTypes } from 'sequelize';
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
    },
    dob: {
        type: DataTypes.STRING,
        allowNull: false
    },
    citizenshipNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    role:{
        type:DataTypes.ENUM('user','admin'),
        defaultValue:'user'
    },
    isVoted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

export default User;
