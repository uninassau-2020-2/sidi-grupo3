'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cep_queries', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }, 
      cep: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      logradouro: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },
      complemento: {
        allowNull: true,
        type: Sequelize.STRING(180),
      },
      bairro: {
        allowNull: false,
        type: Sequelize.STRING(150),
      },
      localidade: {
        allowNull: false,
        type: Sequelize.STRING(150),
      },
      uf: {
        allowNull: false,
        type: Sequelize.STRING(5),
      },
      ibge: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      gia: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      ddd: {
        allowNull: false,
        type: Sequelize.INTEGER(5),
      },
      siafi: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cep_queries');
  }
};