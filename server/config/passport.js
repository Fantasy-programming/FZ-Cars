require("../models/database");
require("../models/User");

const localStrategy = require("passport-local").Strategy;

module.exports = function(passport) {

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new localStrategy(function(username, password, done) {
    User.findOne({username: username}, function(err, user) {
        if (err) return done(err);
        if (!user) return done(null, false, {message: "Incorrect username."});
        
        bcrypt.compare(password, user.password, function(err, res) {
            if (err) return done(err);
            if (res === false) return done(null, user, {message: "Incorrect password."});
            
            return done(null, user);
        });
    })
}));

}