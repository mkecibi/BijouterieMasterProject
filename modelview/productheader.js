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
                return db.ProductHeader.forge({id: body.idedit})
                                .fetch({require: true})
                                .then(function (productheader) {
                                productheader.save({
                                        name:  body.nameedit || productheader.get('name'),
                                        imageurl: body.Iamgeurledit || productheader.get('imageurl')
                                })
                                .then(function () {
                                      console.log("ProductHeader saved with success");
                                })
                                .catch(function (err) {
                                    return err;
                                });
                                })
                                .catch(function (err) {
                                return err;});
                };


    saveNew(db,body) {
        return    db.ProductHeader.forge({
            name:  body.nameadd,
            imageurl: body.imgurladd
            })
            .save()
            .then(function (productheader) {
            console.log("ProductHeader saved with success");
        //   return  productheader
            })
            .otherwise(function (err) {
                console.log("error to  saved : " + err.message);
            return err;
            }); 
        };

    delete(db,id){
                return db.ProductHeader.forge({id: id})
                                .fetch({require: true})
                                .then(function (productheader) {
                                productheader.destroy()
                                .then(function () {
                                      console.log("Category successfully deleted");
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