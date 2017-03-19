"use strict";
const routeBase = require("./routes");
class UserRoute extends routeBase.BaseRoute {
    constructor() {
        super();
    }

    user(req, res, next) {
        this.title = "Home | Tour of Heros";
        let options = {
            "message": "Welcome to the Tour of Heros"
        };
        this.render(req, res, "index", options);
    }

    static create(router,db) {
        router.get("/", this.prototype.ensureAuthenticated,function(req, res, next) {
            db.User.Users.forge()
            .fetch()
            .then(function (collection) {
                res.render("index", { users: collection.toJSON() });
            })
            .otherwise(function (err) {
                res.status(500).json({error: true, data: {message: err.message}});
            });
        });

        router.get("/users/:username", function(req, res, next) {
            console.log("Im in userroutes ")
            var username = req.params.username;
                db.User.query({where: {username:username}})
                .fetch()
                .then(function (user) {
                if (user) {
                return  res.render("profile",{user:user.toJSON()});
                }
                })
                .otherwise(function (err) {
            res.status(500).json({error: true, data: {message: err.message}});
                })
        });
    }
}
exports.UserRoute = UserRoute;