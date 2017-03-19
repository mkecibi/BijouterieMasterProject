var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
 var db = require('./../config/db.js');


module.exports = function() {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    db.User.forge({id:id})
		.fetch()
		.then(function (user) {
          done(null, user.toJSON());
		  });
	  });

  passport.use("login", new LocalStrategy(function(username, password, done) {
		db.User.query({where: {username:username}, where:{password:password}})
		.fetch()
		.then(function (user) {
		  if (!user) {
       return done(null, false, { message: "No user has that username! or  a Invalid password." });
		  }
		  else {
         return done(null, user.toJSON());
		  }
		})
		.otherwise(function (err) {
      return done(null, false, { message: "Invalid password." });
		})
  }));
};
