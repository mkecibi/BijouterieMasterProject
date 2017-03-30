'use strict';
module.exports = (Bookshelf) => {
  
var modeles = {}

// User model
var ProductSupplier = Bookshelf.Model.extend({
    tableName: 'products_suppliers',
    products: function () {
        return this.belongsToMany(Product);
    },
    suppliers: function () {
        return this.belongsToMany(Supplier);
    }
});

ProductSupplier.ProductsSuppliers = Bookshelf.Collection.extend({
  model: ProductSupplier
});

modeles.ProductSupplier  = ProductSupplier

  return modeles;
};