const Sequelize = require('sequelize');

const db = require('../db');

const Songs = db.define('songs', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
    }
  });


module.exports = Songs;