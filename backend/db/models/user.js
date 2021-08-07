'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');



module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] },
        },
        loginUser: {
          attributes: {},
        },
      },
    });



  User.associate = function (models) {
    User.hasMany(models.Notebook, {
      foreignKey: "notebook_owner",
      onDelete: 'CASCADE',
      hooks: true
    });

    User.belongsToMany(models.Note, {
      through: "Tag",
      foreignKey: "creator_id",
      otherKey: "note_id",
    });

    User.hasMany(models.Tag, {
      foreignKey: "creator_id",
    });



  };



  User.prototype.toSafeObject = function () {
    const { id, username, email, avatar } = this; // context will be the User instance
    return { id, username, email, avatar };
  };



  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };



  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };



  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });

    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
    // return false if the user was not in the db and the password validation failed
    return false;
  };




  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({ username, email, hashedPassword });

    if (user) {
      return await User.scope('currentUser').findByPk(user.id);
    }

    return false;
  };



  return User;
};
