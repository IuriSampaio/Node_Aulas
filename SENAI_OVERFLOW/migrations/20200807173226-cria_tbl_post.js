'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {


      return queryInterface.createTable("posts",{
          
          id    : { 
            type          : Sequelize.INTEGER,
            primaryKey    : true,
            autoIncrement : true,
          },
          
          code : {
            type: Sequelize.STRING,
          },
          
          photo : {
            type: Sequelize.STRING,
          },
          
          text : {
            type: Sequelize.STRING,
          },
 
          id_aluno : {
            type: Sequelize.INTEGER,
            allownull     : false,
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
     return queryInterface.dropTable("posts");
  }

};
