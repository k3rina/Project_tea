"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Tea }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsTo(Tea, { foreignKey: "tea_id" });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
    tea_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Teas",
        key: "id",
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
  Comment.init(attributes, {
    sequelize,
    modelName: "Comment",
  });
  return Comment;
};
