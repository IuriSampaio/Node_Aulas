'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {


      return queryInterface.createTable("posts",{
          
          id    : { 
            type          : Sequelize.INTEGER,
            primaryKey    : true,
            autoIncrement : true,
          },
          title:{
            type: Sequelize.STRING,
            allownull     : false,
          },

          code : {
            type: Sequelize.STRING,
            allownull     : true,
          },
          
          photo : {
            type: Sequelize.STRING,
            allownull     : true,
          },
          
          text : {
            type: Sequelize.TEXT,
            allownull     : false,
          },
          created_aluno_id : {
            type: Sequelize.INTEGER,
            allownull     : false,
            references: {
              model:"alunos",
              key:"id"
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
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
