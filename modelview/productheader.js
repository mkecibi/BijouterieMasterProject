"use strict";
class ProductHeaderViewModel {
        static getInstance() {
        return new ProductHeaderViewModel();
    }
    constructor() {
      	console.log("Inside ProductHeaderViewModel Constructor");
    }
//**************************************************************************************** */
//**********************************getUsers******************************************* */    
   getProductsHeaders(db){
            return  db.ProductHeader.ProductHeaders.forge()
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
   getByProductHeaderid(db,id){
          return   db.ProductHeader.query({where: {id:id}})
                    .fetch()
                    .then(function (productheader) {
                    if (productheader) {
                        return  productheader;
                    }
                    })
                    .otherwise(function (err) {
                        return err;
                    })
    }

//**************************************************************************************** */
//***************************** Add Update******************************************** */
    save(db,body){
                return db.ProductHeader.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (productheader) {
                                productheader.save({
                                        name:  body.name || productheader.get('name'),
                                        imageurl: body.imageurl || productheader.get('imageurl')
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
exports.ProductHeaderViewModel = ProductHeaderViewModel;