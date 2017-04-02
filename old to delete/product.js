'use strict';
module.exports = (Bookshelf) => {
 
var modeles = {}

var ProductHeader = Bookshelf.Model.extend({
    tableName: 'productheaders',
    products: function () {
       return this.hasMany(Product, 'productheader_id');
    }
});

ProductHeader.ProductHeaders = Bookshelf.Collection.extend({
  model: ProductHeader
});

var BrancheProduct = Bookshelf.Model.extend({
    tableName: 'branches_products',
    products: function () {
        return this.belongsToMany(Product);
    },
    branches: function () {
        return this.belongsToMany(Branche);
    }
});

BrancheProduct.BrancheProducts = Bookshelf.Collection.extend({
  model: BrancheProduct
});

var Supplier = Bookshelf.Model.extend({
    tableName: 'suppliers',
    products_suppliers: function () {
       return this.hasMany(ProductSupplier, 'supplier_id');
    }
});

Supplier.Suppliers = Bookshelf.Collection.extend({
  model: Supplier
});

var ProductSupplier = Bookshelf.Model.extend({
    tableName: 'products_suppliers',
    products: function () {
        return this.belongsToMany(Product);
    },
    suppliers: function () {
        return this.belongsToMany(Supplier);
    }
});

ProductSupplier.ProductSuppliers = Bookshelf.Collection.extend({
  model: ProductSupplier
});

var Product = Bookshelf.Model.extend({
    tableName: 'products',

   productheader: function () {
       return this.belongsTo(Productheader, 'productheader_id');
    },

    branches_products: function () {
       return this.hasMany(BrancheProduct, 'product_id');
    },
    products_suppliers: function () {
       return this.hasMany(ProductSupplier, 'product_id');
    }
});

Product.Products = Bookshelf.Collection.extend({
  model: Product
});

modeles.Product  = Product

  return modeles;
};