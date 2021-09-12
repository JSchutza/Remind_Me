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
    const all_ids = await Note.findAll({ attributes: ['id'] });
    // because it gives us an array just get the last item in the array which should be the most recent id object
    const index = all_ids.length - 1;
    return all_ids[index];
  };




  Note.validateBeforeCreation = async ({ due_date, title, content, notebook_id }) => {
    if(title.length === 0 || title.length <= 3) {
      return false;
    }

    const lastId = await Note.latestId();
    // console.log(lastId.id);

    const note = await Note.create({ id: lastId.id + 1, due_date, title, content,
      notebook_id: Number(notebook_id)
    });

    if(note){
      return note;
    }

    return false;

  }



  Note.validateBeforeUpdate = async (noteId, { due_date, title, content, notebook_id }) => {
    if (title.length === 0 || title.length <= 3) {
      return false;
    }

    const note = await Note.findByPk(noteId);

    if(note) {
      await note.update({ due_date, title, content, notebook_id: Number(notebook_id) });
      return note;
    }

    return false;

  }


  return Note;
};
