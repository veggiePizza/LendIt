'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Tool, {foreignKey : 'toolId'});
      Review.belongsTo(models.User, {foreignKey : 'userId'});
      Review.hasMany(models.ReviewImage, {foreignKey : 'reviewId'});
    }
  }
  Review.init({
    userId: DataTypes.INTEGER,
    toolId: DataTypes.INTEGER,
    review: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};