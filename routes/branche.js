"use strict";
const routeBase = require("./routes");
const  brancheViewModel = require('./../modelview/branche.js');
const brancheVML = brancheViewModel.BrancheViewModel.getInstance() ;

class BrancheRoute extends routeBase.BaseRoute {
    constructor() {
        super();
    }

    user(req, res, next) {
        this.title = "Home | Tour of Heros";
        let options = {
            "message": "Welcome to the Tour of Heros"
        };
        this.render(req, res, "xxxxxxxxx", options);
    }

    static create(router,db) {
        router.get('/branches',this.prototype.ensureAuthenticated,function (req, res) {
                      
                    brancheVML.getBranches(db)
                    .then(function (collection) {  
                    if (!collection) {
                        res.status(404).json({error: true, data: {}});
                    }
                    else {
                        res.render("branche", { branches: collection.toJSON() });
                    }
                    })
                    .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                    })                   
                    .catch(function (err) {
                        res.status(500).json({error: true, data: {message: err.message}});
              });
        });

        router.post("/editbranche", this.prototype.ensureAuthenticated, function(req, res, next) {
                 brancheVML.update(db,req.body).then(function () {
                            req.flash("info", "Profile updated!");
                            res.redirect("/branches");
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                })
                 .catch(function (err) {
                res.status(500).json({error: true, data: {message: err.message}});
            });
        });

        router.post("/createbranche", this.prototype.ensureAuthenticated,function(req, res, next) {
                 brancheVML.save(db,req.body).then(function () {
                                req.flash("info", "Profile updated!");
                                res.redirect("/branches");
                    })
                    .catch(function (err) {
                        res.status(500).json({error: true, data: {message: err.message}});
                    })
                    .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
               });
        });
        router.get("/deletebranche/:id", this.prototype.ensureAuthenticated,function(req, res, next) {
                    brancheVML.delete(db,req.params.id).then(function () {
                            req.flash("info", "Profile updated!");
                            res.redirect("/branches");
                })
                        .catch(function (err) {
                            res.status(500).json({error: true, data: {message: err.message}});
                        });
        });
    }
}
exports.BrancheRoute = BrancheRoute;