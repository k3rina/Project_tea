"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    static associate({ Admin, Comment }) {
      this.belongsTo(Admin, { foreignKey: "admin_id" });
      this.hasMany(Comment, { foreignKey: "tea_id" });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    location: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    image: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    admin_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Admins",
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
  Tea.init(attributes, {
    sequelize,
    modelName: "Tea",
  });
  return Tea;
};
