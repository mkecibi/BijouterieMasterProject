"use strict";
class BrancheProductViewModel {
        static getInstance() {
        return new BrancheProductViewModel();
    }
    constructor() {
      	console.log("Inside BrancheProductViewModel Constructor");
    }
//**************************************************************************************** */
//**********************************getUsers******************************************* */    
   getbranches_products(db){
            return  db.BrancheProduct.BrancheProducts.forge()
                        .fetch()
                        .then(function (collection) {
                            return collection
                        })
                        .otherwise(function (err) {
                            return err ;
                        });
    }
//**************************************************************************************** */
//**********************************getByProductSupplierid*********************************************** */
   getByBrancheProductid(db,id){
          return   db.BrancheProduct.query({where: {id:id}})
                    .fetch()
                    .then(function (brancheproduct) {
                        if (brancheproduct) {
                            return  brancheproduct;
                        }
                        })
                        .otherwise(function (err) {
                            return err;
                        });
    }

//**************************************************************************************** */
//**********************************getByClientid Withrelated Users*********************************************** */
   getByBrancheProductWithrelatedByid(db,id){
          return   db.BrancheProduct.forge({id:id})
                        .fetch({withRelated: ['']})
                        .then(function (brancheproduct) {
                            if (brancheproduct) {
                                return  brancheproduct;
                            }
                            })
                            .otherwise(function (err) {
                                return err;
                            });
    }
//**************************************************************************************** */
//***************************** Add Update******************************************** */
    save(db,body){
                return db.BrancheProduct.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (brancheproduct) {
                                brancheproduct.save({
                                        product_id:  body.product_id || brancheproduct.get('product_id'),
                                        branche_id: body.branche_id || brancheproduct.get('branche_id'),
                                        quantity:  body.quantity || brancheproduct.get('quantity'),
                                        isactive:body.isactive || brancheproduct.get('isactive')
                                })
                                .then(function () {
                                      console.log("BrancheProduct saved with success");
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
exports.BrancheProductViewModel = BrancheProductViewModel;