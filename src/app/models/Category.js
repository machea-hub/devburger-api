import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    Model.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'categories',
      },
    );

    return this;
  }
}

export default Category;
