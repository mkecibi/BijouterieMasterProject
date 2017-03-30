'use strict';
module.exports = (Bookshelf) => {
  
var modeles = {}

// User model
var Product = Bookshelf.Model.extend({
    tableName: 'products',

    productheader: function () {
       return this.belongsTo(Productheader, 'productheader_id');
    },

    branches_products: function () {
       return this.hasMany(BrancheProduct, 'product_id');
    },
    branches_suppliers: function () {
       return this.hasMany(ProductSupplier, 'product_id');
    }
});

Product.Products = Bookshelf.Collection.extend({
  model: Product
});

modeles.Product  = Product

  return modeles;
};