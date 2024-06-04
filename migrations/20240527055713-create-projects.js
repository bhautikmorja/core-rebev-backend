'use strict';

const { ForeignKey } = require('sequelize-typescript');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      features: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      githubLink: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deployedLink: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      otherLink: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      teamSize: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      isPresent: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('projects');
  },
};
