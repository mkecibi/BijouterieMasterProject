"use strict";
const routeBase = require("./routes");

const  productViewModel = require('./../modelview/product.js');
const productVML = productViewModel.ProductViewModel.getInstance() ;

const  supplierViewModel = require('./../modelview/supplier.js');
const supplierVML = supplierViewModel.SupplierViewModel.getInstance() ;

const  productSupplierViewModel = require('./../modelview/product_supplier.js');
const productSupplierVML = productSupplierViewModel.ProductSupplierViewModel.getInstance() ;

class ProductSupplierRoute extends routeBase.BaseRoute {
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

        router.get('/productSuppliers',this.prototype.ensureAuthenticated,function (req, res) {
                      
            productVML.getProducts(db)
                 .then(function (collection) { 

                   res.locals.products  = collection.toJSON() ;

                    supplierVML.getSuppliers(db)
                        .then(function (collection) { 

                         res.locals.suppliers = collection.toJSON() ;

                                productSupplierVML.getproducts_suppliers(db)
                                .then(function (collection) {  
                                if (!collection) {
                                    res.status(404).json({error: true, data: {}});
                                }
                                else {
                                    res.render("supplierproducts", { supplierproducts: collection.toJSON() });
                                }
                                })
                                .catch(function (err) {
                                res.status(500).json({error: true, data: {message: err.message}});
                                })                   
                                .catch(function (err) {
                                    res.status(500).json({error: true, data: {message: err.message}});
                                });

                        })
                        .catch(function (err) {
                            res.status(500).json({error: true, data: {message: err.message}});
                        });

                    })
                    .catch(function (err) {
                        res.status(500).json({error: true, data: {message: err.message}});
                     });

        });

        router.post("/editproductSupplier", this.prototype.ensureAuthenticated, function(req, res, next) {
                 productSupplierVML.update(db,req.body).then(function () {
                            req.flash("info", "productSupplier updated!");
                            res.redirect("/productSuppliers");
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                })
                 .catch(function (err) {
                res.status(500).json({error: true, data: {message: err.message}});
            });
        });

        router.post("/createproductSupplier", this.prototype.ensureAuthenticated,function(req, res, next) {
                 productSupplierVML.save(db,req.body).then(function () {
                                req.flash("info", "productSupplier updated!");
                                res.redirect("/productSuppliers");
                    })
                    .catch(function (err) {
                        res.status(500).json({error: true, data: {message: err.message}});
                    })
                    .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
               });
        });
        router.get("/deleteproductSupplier/:id", this.prototype.ensureAuthenticated,function(req, res, next) {
                    productSupplierVML.delete(db,req.params.id).then(function () {
                            req.flash("info", "productSupplier updated!");
                            res.redirect("/productSuppliers");
                })
                        .catch(function (err) {
                            res.status(500).json({error: true, data: {message: err.message}});
                        });
        });

    }
}
exports.ProductSupplierRoute = ProductSupplierRoute;