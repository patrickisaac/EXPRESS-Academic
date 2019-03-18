'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    number: DataTypes.STRING,
    validated: DataTypes.BOOLEAN
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};