'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      return queryInterface.createTable("comentarios",{
          
          id    : { 
            type          : Sequelize.INTEGER,
            primaryKey    : true,
            autoIncrement : true,
          },          
          text : {
            type: Sequelize.TEXT,
            allownull     : false,
          },
          aluno_id : {
            type: Sequelize.INTEGER,
            allownull     : false,
            references: {
              model:"alunos",
              key:"id"
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
          post_id:{
             type:Sequelize.INTEGER,
             allownull:false,
             references:{
               model : "posts",
               key:"id",
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
    

     return queryInterface.dropTable("comentarios");
  }
};
