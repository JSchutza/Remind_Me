'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {

    name: DataTypes.STRING,

    description: DataTypes.STRING,

    notebook_owner: DataTypes.INTEGER

  }, {});



  Notebook.associate = function(models) {
    Notebook.belongsTo(models.User, {
      foreignKey: "notebook_owner",
      onDelete: 'CASCADE',
      hooks: true
    });

    Notebook.hasMany(models.Note, {
      foreignKey: "notebook_id",
      onDelete: 'CASCADE',
      hooks: true
    });


  };
  return Notebook;
};
