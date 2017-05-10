"use strict";
const routeBase = require("./routes");
const  userViewModel = require('./../modelview/user.js');
const userVML = userViewModel.UserViewModel.getInstance() ;

class LoginRoute extends routeBase.BaseRoute {
    constructor() {
        super();
    }

//**************************************************************************************** */
//**********************************Lofin*********************************************** */
    login(req, res, next) {
        this.title = "Home | Tour of Heros";
        let options = {
            "message": "Welcome to the Tour of Heros"
        };
        this.render(req, res, "index", options);
    }
//**************************************************************************************** */
//**********************************Create*********************************************** */
    static create(router,passport,db) {
        router.get("/login", function(req, res) {
            res.render("login");
        });

        router.post("/login", passport.authenticate("login", {
            successRedirect: "/",
            failureRedirect: "/login",
            failureFlash: true
        }));

        router.get("/logout", function(req, res) {
            req.logout();
            res.redirect("/");
        });

        router.get("/signup", function(req, res) {
            res.render("signup");
        });
//**************************************************************************************** */
//**********************************router*********************************************** */
        router.post("/signup", function(req, res, next) {
            var username = req.body.username;
                userVML.getByUsername(db,username).then(function (user) {
                            if (user) {
                            req.flash("error", "User already exists");
                            return res.redirect("/signup");
                            }
                            else {
                                userVML.save(db,req.body).then(function () {
                                        return res.redirect("/login");
                                    })
                                    .catch(function (err) {
                                    res.status(500).json({error: true, data: {message: err.message}});
                                    });
                                }
                            })
                            .catch(function (err) {
                        res.status(500).json({error: true, data: {message: err.message}});
                    })
        });
    }
}
exports.LoginRoute = LoginRoute;