const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('boom');

const UserService = require('../../services/user')
const { adminConfig } = require('../../config');

var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies)
    {
        token = req.cookies['token'];
    }
    
    return token;
};

passport.use(
    new Strategy({
        secretOrKey: adminConfig.authJwtSecret,
        jwtFromRequest: cookieExtractor
    },
    
    async (tokenPayload, done) => {
        const userService = new UserService();

        try{
            const [user] = await userService.getUsersByEmail({ email: tokenPayload.email });
            
            if(!user){
                return done(boom.unauthorized(), false);
            }

            delete user.password;
            
            return done(false, user);
        }catch(err){
            return done(err);
        }
    })
);