const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Car extends Model {}

Car.init(
  {
    Year: {
      type: DataTypes.INTEGER,
    },
    make: {
      type: DataTypes.STRING
    },
    Model: {
      type: DataTypes.STRING
    },
    Trim: {
      type: DataTypes.STRING
    },
    Bodytype: {
      type: DataTypes.STRING
    },
    Immobilizer: {
      type: DataTypes.STRING
    },
    Option_for_Immobilizer: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'car'
  }
);

module.exports = Car;
