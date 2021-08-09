'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    due_date: DataTypes.DATE,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    notebook_id: DataTypes.INTEGER
  }, {});

  Note.associate = function(models) {
    Note.belongsTo(models.Notebook, {
      foreignKey: "notebook_id",
      // onDelete: 'CASCADE',
      // hooks: true
    });

    Note.belongsToMany(models.User, {
      through: "Tag",
      foreignKey: "note_id",
      // onDelete: 'CASCADE',
      // hooks: true
    });
  };



  // must give back the higest id currently in the db
  Note.latestId = async function () {
    const all_ids = await Note.findAll({
      attributes: ['id']
    });
    // because it gives us an array just get the last item in the array which should be the most recent id object
    const index = all_ids.length - 1;
    return all_ids[index];
  };




  return Note;
};
