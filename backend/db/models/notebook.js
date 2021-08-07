'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {

    name: DataTypes.STRING,

    description: DataTypes.STRING,

    notebook_owner: DataTypes.INTEGER

  }, {});



  Notebook.associate = function(models) {
    Notebook.belongsTo(models.User, {
      foreignKey: "notebook_owner"
    });

    Notebook.hasMany(models.Note, {
      foreignKey: "notebook_id",
    });


  };


  // must give back the higest id currently in the db
  Notebook.latestId = async function() {
    const all_ids = await Notebook.findAll({
      attributes: ['id']
    });
    // because it gives us an array just get the last item in the array which should be the most recent id object
    const index = all_ids.length - 1;
    return all_ids[index];
  };






  return Notebook;
};
