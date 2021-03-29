'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    notebook_owner: DataTypes.INTEGER
  }, {});
  Notebook.associate = function(models) {
    // associations can be defined here
  };
  return Notebook;
};
