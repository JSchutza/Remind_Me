'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    due_date: DataTypes.DATE,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    notebook_id: DataTypes.INTEGER
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
  };
  return Note;
};
