'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
    creator_id: DataTypes.INTEGER,
    note_id: DataTypes.INTEGER
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
  };
  return Tag;
};