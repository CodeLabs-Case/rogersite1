const { initialize, authenticate } = require("passport")

const LocalStrategy = require('passport-local').Strategy
// const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail, getUserById){
    // This authenticateUser function is what will be called from /admin to make sure that the user is correct
    // Note: there is a callback function called done that is passed in and must be called within the function
    const authenticateUser = async (email, password, done) => {
        // The email parameter of this function is ignored because I just hardcoded the admin information here ...
        // ... which you normally wouldn't do but that will work for this project
        const user = getUserByEmail(email)
        // In case there is no user matching the 'email'
        if(user == null){
            // Handle the done callback
            return done(null, false, { message: 'Email Incorrect'})

        }

        try {
            if(await password == user.password) {
                // Handle the done callback
                return done(null, user)
            } else {
                // Handle the done callback
                return done(null, false, {message: "Password Incorrect"})
            }
        } catch(e) {
            // Handle the done callback
            return done(e)
        }
    } 



    

    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser))

    passport.serializeUser((user, done) => { done( null, user.id ) })

    passport.deserializeUser((id, done) => { 
        return done( null, getUserById(id) )
    })
}

module.exports = initialize