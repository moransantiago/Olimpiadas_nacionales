const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('boom');
const bcrypt = require('bcryptjs');

const UserService = require('../../services/user');

passport.use(
    new BasicStrategy( async (email, password, done)=>{
        try{
            const [user] = await UserService.getUserByEmail(email) /* mongoDB.getAll('users', { username }) */; //Gets all the users with the email
            if(!user) {
                return done(boom.unauthorized(), false); //If no users were returned triggers unauthorized
            }
            
            if(!await bcrypt.compare(password, user.password)){ //Bcrypt compares the sended password with the user's stored password
                return done(boom.unauthorized(), false); //If They dont match, Unauthorized
            }

            delete user.password; //Password field is deleted for avoiding security issues

            return done(null, user); //Returns a null for the error and the given user with all the data from the db
        }catch(err){
            return done(err); //Executes de error callback
        }
    })
);