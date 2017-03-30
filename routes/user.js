"use strict";
const routeBase = require("./routes");
const  userViewModel = require('./../modelview/user.js');
const userVML = userViewModel.UserViewModel.getInstance() ;
class UserRoute extends routeBase.BaseRoute {
    constructor() {
        super();
    }
//**************************************************************************************** */
//**********************************user*********************************************** */
    user(req, res, next) {
        this.title = "Home | Tour of Heros";
        let options = {
            "message": "Welcome to the Tour of Heros"
        };
        this.render(req, res, "index", options);
    }
//**************************************************************************************** */
//**********************************Create router*********************************************** */
    static create(router,db) {
        router.get("/", this.prototype.ensureAuthenticated,function(req, res, next) {
                    userVML.getUsers(db).then(function (collection) {
                            res.render("index", { users: collection.toJSON() });
                        })
                        .otherwise(function (err) {
                            res.status(500).json({error: true, data: {message: err.message}});
                        });
        });
      router.get("/users/:username", function(req, res, next) {
                  var username = req.params.username;

                        userVML.getByUsername(db,username).then(function (user) {
                                  return  res.render("profile",{user:user.toJSON()});
                            })
                            .otherwise(function (err) {
                                res.status(500).json({error: true, data: {message: err.message}});
                            });
                        });
    }
}
exports.UserRoute = UserRoute;