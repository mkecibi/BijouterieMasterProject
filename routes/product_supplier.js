"use strict";
const routeBase = require("./../routes");
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

    }
}
exports.ProductSupplierRoute = ProductSupplierRoute;