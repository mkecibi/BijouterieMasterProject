"use strict";
class UserViewModel {
        static getInstance() {
        return new UserViewModel();
    }
    constructor() {
      	console.log("Inside UserViewModel Constructor");
    }
    
//   getUsers(db,callback){
   getUsers(db){
            return  db.User.Users.forge()
                        .fetch()
                        .then(function (collection) {
                            return collection
                            //callback(collection);
                        })
                        .otherwise(function (err) {
                            return err ;//callback(''); 
                        });
    }

   getByUsername(db,username){
          return   db.User.query({where: {username:username}})
                    .fetch()
                    .then(function (user) {
                    if (user) {
                        return  user;
                    }
                    })
                    .otherwise(function (err) {
                        return err;
                    })
    }

    save(db,body){
                return db.User.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (user) {
                                user.save({
                                        username:  body.username || user.get('username'),
                                        email: body.email || user.get('email'),
                                        password:body.password || user.get('password'),
                                        bio:body.bio || user.get('bio'),
                                        client_id:body.client_id || user.get('client_id'),
                                        isactive:body.isactive || user.get('isactive')
                                })
                                .then(function () {
                                      console.log("saved with success");
                                })
                                .catch(function (err) {
                                    return err;
                                });
                                })
                                .catch(function (err) {
                                return err;});
                };
}
exports.UserViewModel = UserViewModel;