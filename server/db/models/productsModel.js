const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.hasMany(models.ProductOrders, {
        foreignKey: 'product_id',
      }); // products tem muitos product_id => (productOrderModel)
      // (coluna que ta armazenada dentro do productOrderModel)
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    sub_type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};
