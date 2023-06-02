const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         isEmail:true,
      },
      password:{
         type: DataTypes.STRING,
      }
   }, { timestamps: false });
};
