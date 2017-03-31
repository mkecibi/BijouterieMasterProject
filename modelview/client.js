"use strict";
class ClientViewModel {
        static getInstance() {
        return new ClientViewModel();
    }
    constructor() {
      	console.log("Inside ClientViewModel Constructor");
    }
//**************************************************************************************** */
//**********************************getUsers******************************************* */    
//   getClients(db,callback){
   getClients(db){
            return  db.Client.Clients.forge()
                        .fetch()
                        .then(function (collection) {
                            return collection
                            //callback(collection);
                        })
                        .otherwise(function (err) {
                            return err ;//callback(''); 
                        });
    }
//**************************************************************************************** */
//**********************************getByClientid*********************************************** */
   getByClientid(db,id){
          return   db.Client.query({where: {id:id}})
                    .fetch()
                    .then(function (client) {
                    if (client) {
                        return  client;
                    }
                    })
                    .otherwise(function (err) {
                        return err;
                    })
    }

//**************************************************************************************** */
//**********************************getByClientid Withrelated Users*********************************************** */
   getByClientWithUsersid(db,id){
          return   db.Client.forge({id:id})
                        .fetch({withRelated: ['users']})
                        .then(function (client) {
                        if (!client) {
                           return err;
                        }
                        else {
                            return client;
                        }
                        })
                        .catch(function (err) {
                            return err;
                    });
    }
//**************************************************************************************** */
//***************************** Add Update******************************************** */
    save(db,body){
                return db.Client.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (client) {
                                client.save({
                                        username:  body.name || client.get('name'),
                                        email: body.email || client.get('email'),
                                        address:body.address || client.get('address'),
                                        tel:body.tel || client.get('tel'),
                                        isactive:body.isactive || client.get('isactive')
                                })
                                .then(function () {
                                      console.log("Client saved with success");
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
exports.ClientViewModel = ClientViewModel;