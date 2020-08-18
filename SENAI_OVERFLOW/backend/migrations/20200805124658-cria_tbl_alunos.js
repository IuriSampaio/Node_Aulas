'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     return queryInterface.createTable("alunos" , {
        id    : { 
          type          : Sequelize.INTEGER,
          primaryKey    : true,
          autoIncrement : true,
        },

        ra    : {
          type          : Sequelize.STRING,
          allownull     : false,
        },

        nome  : {
          type          : Sequelize.STRING,
          allownull     : false,
        },
        
        senha : {
          type          : Sequelize.STRING,
          allownull     : false,
        },

        email : {
          type          : Sequelize.STRING,
          allownull     : false,
          unique        : true,
        },
        
        created_at:{
          type          : Sequelize.DATE,
          allownull     : false,
        },

        updated_at:{
          type          : Sequelize.DATE,
          allownull     : false,
        }
     })
  },

  down: async (queryInterface, Sequelize) => {

     return queryInterface.dropTable('alunos')
  }
};
