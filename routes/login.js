"use strict";
const routeBase = require("./routes");
class LoginRoute extends routeBase.BaseRoute {
    constructor() {
        super();
    }

    login(req, res, next) {
        this.title = "Home | Tour of Heros";
        let options = {
            "message": "Welcome to the Tour of Heros"
        };
        this.render(req, res, "index", options);
    }

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

        router.post("/signup", function(req, res, next) {
            var username = req.body.username;
            var password = req.body.password;
            var email = req.body.email;
            var bio = req.body.bio;
                    db.User.query({where: {username:username}})
                    .fetch()
                    .then(function (user) {
                    if (user) {
                    req.flash("error", "User already exists");
                    return res.redirect("/signup");
                    }
                    else {
                        db.User.forge({
                            username: username,
                            password: password,
                            email:email,
                            bio:bio
                            })
                            .save()
                            .then(function (user) {
                                return res.redirect("/login");
                            })
                            .otherwise(function (err) {
                            res.status(500).json({error: true, data: {message: err.message}});
                            });
                        }
                    })
                    .otherwise(function (err) {
                res.status(500).json({error: true, data: {message: err.message}});
                    })
        });
    }
}
exports.LoginRoute = LoginRoute;