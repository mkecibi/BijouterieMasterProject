"use strict";
class ProductViewModel {
        static getInstance() {
        return new ProductViewModel();
    }
    constructor() {
      	console.log("Inside ProductViewModel Constructor");
    }
//**************************************************************************************** */
//**********************************getUsers******************************************* */    
   getProducts(db){
            return  db.Product.Products.forge()
                        .fetch()
                        .then(function (collection) {
                            return collection
                        })
                        .otherwise(function (err) {
                            return err ;
                        });
    }
//**************************************************************************************** */
//**********************************getByClientid*********************************************** */
   getByProductid(db,id){
          return   db.Product.query({where: {id:id}})
                    .fetch()
                    .then(function (product) {
                    if (product) {
                        return  product;
                    }
                    })
                    .otherwise(function (err) {
                        return err;
                    })
    }

//**************************************************************************************** */
//**********************************getByClientid Withrelated Users*********************************************** */
   getBySProductWithAll(db,id){
          return   db.Product.forge({id:id})
                        .fetch({withRelated: ['products_suppliers','branches_products']})
                        .then(function (product) {
                        if (!product) {
                           return err;
                        }
                        else {
                            return product;
                        }
                        })
                        .catch(function (err) {
                            return err;
                    });
    }
//**************************************************************************************** */
//***************************** Add Update******************************************** */
    save(db,body){
                return db.Product.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (product) {
                                product.save({
                                        productheader_id:  body.productheader_id || product.get('productheader_id'),
                                        name:  body.name || product.get('name'),
                                        code: body.code || product.get('code'),
                                        imageurl: body.imageurl || product.get('imageurl'),
                                        comment:body.comment || product.get('comment'),
                                        color:body.color || product.get('color'),
                                        weight: body.weight || product.get('weight'),
                                        uom: body.uom || product.get('uom'),
                                        price: body.price || product.get('price'),
                                        quantity: body.quantity || product.get('quantity'),
                                        isactive:body.isactive || product.get('isactive')
                                })
                                .then(function () {
                                      console.log("Product saved with success");
                                })
                                .catch(function (err) {
                                    return err;
                                });
                                })
                                .catch(function (err) {
                                return err;});
                };
}

//**************************************************************************************** */
//***************************** Add Update******************************************** */
exports.ProductViewModel = ProductViewModel;