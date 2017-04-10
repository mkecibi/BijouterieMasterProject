"use strict";
const routeBase = require("./routes");
const  productheaderViewModel = require('./../modelview/productheader.js');
const productheaderVML = productheaderViewModel.ProductHeaderViewModel.getInstance() ;


class ProductHeaderRoute extends routeBase.BaseRoute {
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

        router.get("/productheaders", this.prototype.ensureAuthenticated,function(req, res, next) {
                    productheaderVML.getProductsHeaders(db).then(function (collection) {
                            res.render("productheader", { productheaders: collection.toJSON() });
                        })
                        .otherwise(function (err) {
                            res.status(500).json({error: true, data: {message: err.message}});
                        });
        });
    }
}
exports.ProductHeaderRoute = ProductHeaderRoute;