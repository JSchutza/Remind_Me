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
      foreignKey: "note_id"
      // onDelete: 'CASCADE',
      // hooks: true
    });
  };

  return Note;
};
