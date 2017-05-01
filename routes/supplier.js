"use strict";
const routeBase = require("./routes");
const  supplierViewModel = require('./../modelview/supplier.js');
const supplierVML = supplierViewModel.SupplierViewModel.getInstance() ;

class SupplierRoute extends routeBase.BaseRoute {
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

        router.get('/suppliers',this.prototype.ensureAuthenticated,function (req, res) {
                      
                    supplierVML.getSuppliers(db)
                    .then(function (collection) {  
                    if (!collection) {
                        res.status(404).json({error: true, data: {}});
                    }
                    else {
                        res.render("supplier", { suppliers: collection.toJSON() });
                    }
                    })
                    .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                    })                   
                    .catch(function (err) {
                        res.status(500).json({error: true, data: {message: err.message}});
              });
        });

        router.post("/editsupplier", this.prototype.ensureAuthenticated, function(req, res, next) {
                 supplierVML.update(db,req.body).then(function () {
                            req.flash("info", "Profile updated!");
                            res.redirect("/suppliers");
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                })
                 .catch(function (err) {
                res.status(500).json({error: true, data: {message: err.message}});
            });
        });

        router.post("/createsupplier", this.prototype.ensureAuthenticated,function(req, res, next) {
                 supplierVML.save(db,req.body).then(function () {
                                req.flash("info", "Profile updated!");
                                res.redirect("/suppliers");
                    })
                    .catch(function (err) {
                        res.status(500).json({error: true, data: {message: err.message}});
                    })
                    .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
               });
        });
        router.get("/deletesupplier/:id", this.prototype.ensureAuthenticated,function(req, res, next) {
                    supplierVML.delete(db,req.params.id).then(function () {
                            req.flash("info", "Profile updated!");
                            res.redirect("/suppliers");
                })
                        .catch(function (err) {
                            res.status(500).json({error: true, data: {message: err.message}});
                        });
        });

    }
}
exports.SupplierRoute = SupplierRoute;