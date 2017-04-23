"use strict";

const routeBase = require("./routes");

const  productheaderViewModel = require('./../modelview/productheader.js');
const  productheaderVML = productheaderViewModel.ProductHeaderViewModel.getInstance() ;
const  productViewModel = require('./../modelview/product.js');
const productVML = productViewModel.ProductViewModel.getInstance() ;

class ProductRoute extends routeBase.BaseRoute {
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

        router.get('/products',this.prototype.ensureAuthenticated,function (req, res) {
                productheaderVML.getProductsHeaders(db).then(function (collection) {
                        res.locals.productheaders = collection.toJSON() ;
                    productVML.getProducts(db)
                    .then(function (collection) {  
                    if (!collection) {
                        res.status(404).json({error: true, data: {}});
                    }
                    else {
                        res.render("product", { products: collection.toJSON() });
                    }
                    })
                    .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                    });
                    })
                    .catch(function (err) {
                        res.status(500).json({error: true, data: {message: err.message}});
              });
        });

        router.post("/editproduct", this.prototype.ensureAuthenticated, function(req, res, next) {
                 productVML.update(db,req.body).then(function () {
                            req.flash("info", "Profile updated!");
                            res.redirect("/products");
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                })
                 .catch(function (err) {
                res.status(500).json({error: true, data: {message: err.message}});
            });
        });

        router.post("/createproduct", this.prototype.ensureAuthenticated,function(req, res, next) {
                 productVML.save(db,req.body).then(function () {
                                req.flash("info", "Profile updated!");
                                res.redirect("/products");
                    })
                    .catch(function (err) {
                        res.status(500).json({error: true, data: {message: err.message}});
                    })
                    .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
               });
        });
        router.get("/deleteproduct/:id", this.prototype.ensureAuthenticated,function(req, res, next) {
                    productVML.delete(db,req.params.id).then(function () {
                            req.flash("info", "Profile updated!");
                            res.redirect("/products");
                })
                        .catch(function (err) {
                            res.status(500).json({error: true, data: {message: err.message}});
                        });
        });
    }
}
exports.ProductRoute = ProductRoute;