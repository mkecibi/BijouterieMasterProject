"use strict";
class BrancheViewModel {
        static getInstance() {
        return new BrancheViewModel();
    }
    constructor() {
      	console.log("Inside BrancheViewModel Constructor");
    }
//**************************************************************************************** */
//**********************************getUsers******************************************* */    
   getBranches(db){
            return  db.Branche.Branches.forge()
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
   getBrancheByid(db,id){
          return   db.Branche.query({where: {id:id}})
                    .fetch()
                    .then(function (branche) {
                    if (branche) {
                        return  branche;
                    }
                    })
                    .catch(function (err) {
                        return err;
                    })
    }

//**************************************************************************************** */
//**********************************getByClientid Withrelated Users*********************************************** */
   getByBrancheWithproducts_brancheid(db,id){
          return   db.Branche.forge({id:id})
                        .fetch({withRelated:['branches_users','branches_products']})
                        .then(function (branche) {
                        if (!branche) {
                           return err;
                        }
                        else {
                            return branche;
                        }
                        })
                        .catch(function (err) {
                            return err;
                    });
    }
//**************************************************************************************** */
//***************************** Add Update******************************************** */
//**************************************************************************************** */

    save(db,body) {
        return    db.Branche.forge({
                                        name:  body.nameadd || branche.get('name'),
                                        address:body.addressadd || branche.get('address'),
                                        isactive:((body.isactiveadd == "on") ? 1 : 0)
            })
            .save()
            .then(function (branche) {
            console.log("branche saved with success");
        //   return  supplier
            })
            .catch(function (err) {
                console.log("error to  saved : " + err.message);
            return err;
            }); 
        };

//***************************** Add Update******************************************** */
//***************************** Add Update******************************************** */
    update(db,body){
                return db.Branche.forge({id: body.idedit})
                                .fetch({require: true})
                                .then(function (branche) {
                                branche.save({
                                        name:  body.nameedit || branche.get('name'),
                                        address:body.addressedit || branche.get('address'),
                                        isactive:((body.isactiveedit == "on") ? 1 : 0)
                                })
                                .then(function () {
                                    console.log("branche saved with success");
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
                return db.Branche.forge({id: id})
                                .fetch({require: true})
                                .then(function (branche) {
                                branche.destroy()
                                .then(function () {
                                    return true;
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
exports.BrancheViewModel = BrancheViewModel;