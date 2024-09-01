import { DataTypes } from 'sequelize';
import sequelize from '../connection.js';

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    categoryName: {
        type: DataTypes.STRING,
    }
});

export default Category;
