const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    static associate(models) {
      this.belongsTo(models.List, { foreignKey: 'list_id' });
    }
  }
  Word.init({
    title_rus: DataTypes.STRING,
    title_eng: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    list_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Word',
  });
  return Word;
};
