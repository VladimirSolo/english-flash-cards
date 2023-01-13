'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Connect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.List, {foreignKey: 'list_id'});
    }
  }
  Connect.init({
    user_id: DataTypes.INTEGER,
    list_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Connect',
  });
  return Connect;
};