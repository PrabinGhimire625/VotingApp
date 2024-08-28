import { DataTypes } from 'sequelize';
import sequelize from '../connection.js';

const Candidate = sequelize.define('Candidate', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    candidateName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    candidateEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    candidateAddress: {
        type: DataTypes.STRING,
    },
    candidateMobileNo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    candidateDOB: {
        type: DataTypes.STRING, // Changed from DataTypes.NUMBER to DataTypes.INTEGER
        allowNull: false
    },
    candidateMobileNo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    candidateDescription: { // Changed to candidateParty to match common naming conventions
        type: DataTypes.STRING,
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
    voteCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0  // Initialize to zero
    }
});

export default Candidate;
