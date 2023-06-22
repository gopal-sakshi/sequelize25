// =========================== first learn OAuth ============================
// =========================== send accessToken, refreshToken from API ======

// var JwtStrategy = require('passport-jwt').Strategy;
// var ExtractJwt = require('passport-jwt').ExtractJwt;

// var opts = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: 'secret23',
//     issuer: 'example23.com',
//     audience: 'gopal612_23.net'
// }

// const blah = function(jwt_payload, done) {
//     User.findOne({id: jwt_payload.sub}, function(err, user) {
//         if (err) { return done(err, false); }
//         if (user) { return done(null, user); } 
//         else { return done(null, false); }
//     });
// }

// passport.use(new JwtStrategy(opts, blah));

