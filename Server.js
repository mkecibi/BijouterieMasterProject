"use strict";
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const flash = require("connect-flash");
const passport = require("passport");
const path = require("path");
const session = require("express-session");
const errorHandler = require("errorhandler");
const methodOverride = require("method-override");
const db = require('./config/db.js');
const setUpPassport = require("./security/setuppassport");
const loginroute = require("./routes/login");
const userroute = require("./routes/user");
const productroute = require("./routes/product");
const productheaderroute = require("./routes/productheader");
const profileroute = require("./routes/profile");
const baseroute = require("./routes/routes");

class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        setUpPassport();
        this.config();
        this.routes();
        this.api();
    }
    api() {
    }
    config() {
                this.app.set("views", path.join(__dirname, "views"));
                this.app.set("view engine", "ejs");
                this.app.use(express.static(path.join(__dirname, "public")));
                this.app.use(bodyParser.urlencoded({ extended: false }));
                this.app.use(cookieParser());
                this.app.use(session({
                secret: "LUp$Dg?,I#i&owP3=9su+OB%`JgL4muLF5YJ~{;t",
                resave: true,
                saveUninitialized: true
                }));
                this.app.use(flash());
                this.app.use(passport.initialize());
                this.app.use(passport.session());
                // this.app.use(logger("dev"));
                this.app.use(cookieParser("SECRET_GOES_HERE"));
                this.app.use(methodOverride());
                this.app.use(function (err, req, res, next) {
                        err.status = 404;
                        next(err);
                    });
            this.app.use(errorHandler());

            this.app.use(flash());
    }
    routes() {
                let router;
                router = express.Router();
                router.use(function (req, res, next) {
                    next();
                });
                baseroute.BaseRoute.create(router); 
                loginroute.LoginRoute.create(router,passport,db);
                userroute.UserRoute.create(router,db);
                profileroute.ProfileRoute.create(router,db);
                productroute.ProductRoute.create(router,db);
                productheaderroute.ProductHeaderRoute.create(router,db);
                this.app.use(router);
    }
}
exports.Server = Server;
