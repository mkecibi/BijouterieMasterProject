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
                        .catch(function (err) {
                            return err ;
                        });
    }
//**************************************************************************************** */
//**********************************getByClientid*********************************************** */
   getByProductHeaderid(db,id){
          return   db.ProductHeader.query({where: {id:id}})
                    .fetch({withRelated: ['products']})
                    .then(function (productheader) {
                    if (productheader) {
                        return  productheader;
                    }
                    })
                    .catch(function (err) {
                        return err;
                    })
    }

//**************************************************************************************** */
//***************************** Add Update******************************************** */
    update(db,body){
                return db.ProductHeader.forge({id: body.idedit})
                                .fetch({require: true})
                                .then(function (productheader) {
                                productheader.save({
                                        name:  body.nameedit || productheader.get('name'),
                                        imageurl: body.Iamgeurledit || productheader.get('imageurl'),
                                        isactive:((body.isactiveedit == "on") ? 1 : 0)
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


    save(db,body) {
                return    db.ProductHeader.forge({
                    name:  body.nameadd,
                    imageurl: body.imgurladd,
                    isactive:((body.isactiveadd == "on") ? 1 : 0)
                    })
                    .save()
                    .then(function (productheader) {
                    console.log("ProductHeader saved with success");
                //   return  productheader
                    })
                    .catch(function (err) {
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
                                                console.log("err : " + err);
                                    return err;
                                });
                                })
                                .catch(function (err) {
                                     console.log("err : " + err);
                                return err;});
                };
}

//**************************************************************************************** */
//***************************** Add Update******************************************** */
exports.ProductHeaderViewModel = ProductHeaderViewModel;