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
                        .catch(function (err) {
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
                    .catch(function (err) {
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

    save(db,body) {
        return    db.Product.forge({
                                            productheader_id:  body.productheaderladd || product.get('productheader_id'),
                                            name:  body.nameadd || product.get('name'),
                                            code: body.codeadd || product.get('code'),
                                            imageurl: body.Iamgeurladd || product.get('imageurl'),
                                            comment:body.commentadd || product.get('comment'),
                                            color:body.coloradd || product.get('color'),
                                            weight: body.weightadd || product.get('weight'),
                                            uom: body.uomadd || product.get('uom'),
                                            price: body.priceadd || product.get('price'),
                                            quantity: body.quantityadd || product.get('quantity'),
                                            isactive:body.isactiveadd || product.get('isactive')
            })
            .save()
            .then(function (Product) {
            console.log("Product saved with success");
        //   return  Product
            })
            .catch(function (err) {
                console.log("error to  saved : " + err.message);
            return err;
            }); 
        };

//***************************** Add Update******************************************** */
    update(db,body){
        console.log(body)
                return db.Product.forge({id: body.idedit})
                                .fetch({require: true})
                                .then(function (product) {
                                product.save({
                                                productheader_id:  body.productheaderledit || product.get('productheader_id'),
                                                name:  body.nameedit || product.get('name'),
                                                code: body.codeedit || product.get('code'),
                                                imageurl: body.Iamgeurledit || product.get('imageurl'),
                                                comment:body.commentedit || product.get('comment'),
                                                color:body.coloredit || product.get('color'),
                                                weight: body.weightedit || product.get('weight'),
                                                uom: body.uomedit || product.get('uom'),
                                                price: body.priceedit || product.get('price'),
                                                quantity: body.quantityedit || product.get('quantity'),
                                                isactive:body.isactiveedit || product.get('isactive')
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
                
//**************************************************************************************** */
    delete(db,id){
                return db.Product.forge({id: id})
                                .fetch({require: true})
                                .then(function (product) {
                                product.destroy()
                                .then(function () {
                                      console.log("Product successfully deleted");
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