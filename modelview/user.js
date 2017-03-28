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
}
exports.UserViewModel = UserViewModel;