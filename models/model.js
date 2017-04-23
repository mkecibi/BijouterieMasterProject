'use strict';
module.exports = (Bookshelf) => {
  
var modeles = {}

//**********************  Branche ********************************* */
var Branche = Bookshelf.Model.extend({
    tableName: 'branches',
    branches_users: function () {
       return this.hasMany(BrancheUser, 'branche_id');
    },
    branches_products: function () {
       return this.hasMany(BrancheProduct, 'branche_id');
    }
},{dependents: ['branches_users','branches_products']});
Branche.Branches = Bookshelf.Collection.extend({
  model: Branche
});

//**********************  BrancheUser ********************************* */
var BrancheUser = Bookshelf.Model.extend({
    tableName: 'branches_users',
    users: function () {
        return this.belongsToMany(User);
    },
    branches: function () {
        return this.belongsToMany(Branche);
    }
});

BrancheUser.BrancheUsers = Bookshelf.Collection.extend({
  model: BrancheUser
});
//**********************  BrancheProduct ********************************* */
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

//********************** fin  Branche ********************************* */
//**********************  Supplier ********************************* */
var Supplier = Bookshelf.Model.extend({
    tableName: 'suppliers',
    products_suppliers: function () {
       return this.hasMany(ProductSupplier, 'supplier_id');
    }
},{dependents: ['products_suppliers']});

Supplier.Suppliers = Bookshelf.Collection.extend({
  model: Supplier
});

//**********************  ProductSupplier ********************************* */
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
//**********************  ProductSupplier ********************************* */
//**********************  Supplier ********************************* */
//**********************  ProductHeader ********************************* */
var ProductHeader = Bookshelf.Model.extend({
    tableName: 'productheaders',
    products: function () {
       return this.hasMany(Product, 'productheader_id');
    }
},{dependents: ['products']});

ProductHeader.ProductHeaders = Bookshelf.Collection.extend({
  model: ProductHeader
});
//**********************  ProductHeader ********************************* */
//**********************  Product ********************************* */
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
},{dependents: ['products_suppliers','branches_products']});

Product.Products = Bookshelf.Collection.extend({
  model: Product
});
//**********************  Product ********************************* */

//**********************  Client ********************************* */
var Client = Bookshelf.Model.extend({
    tableName: 'clients',
    users: function () {
       return this.hasMany(User, 'client_id');
    }
},{dependents: ['users']});

Client.Clients = Bookshelf.Collection.extend({
  model: Client
});
//**********************  Client ********************************* */

//**********************  User ********************************* */
var User = Bookshelf.Model.extend({
    tableName: 'users',
    client: function () {
      return this.belongsTo(Client, 'client_id');
    },
    branches_users: function () {
       return this.hasMany(BrancheUser, 'user_id');
    }
},{dependents: ['branches_users']});

User.Users = Bookshelf.Collection.extend({
  model: User
});

//**********************  User ********************************* */

    modeles.User  = User
    modeles.Client  = Client
    modeles.Supplier  = Supplier
    modeles.ProductHeader  = ProductHeader
    modeles.Product  = Product
    modeles.ProductSupplier  = ProductSupplier
    modeles.BrancheUser  = BrancheUser
    modeles.BrancheProduct  = BrancheProduct
    modeles.Branche  = Branche

  return modeles;
};