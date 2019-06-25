const bcrypt = require('bcrypt');

module.exports = {

    registerUser: (req, res) => {
        console.log(req.body)
        const {first_name, last_name, email, password} = req.body
        const db = req.app.get('db')

        //does user already exist?
        db.find_user(email)
        .then(cucumber_email => {
            if(cucumber_email.length > 0) {
                res.status(403).json({error: 'email already registered'})
            } else {
                bcrypt.hash(password, 10).then(newPassword => {
                    //create new user
                    db.add_user(first_name, last_name, email, newPassword).then(() => {
                        res.status(200).json(email)
                    })
                })
            }
        })
    },


    loginUser: (req,res) => {
        const {email, password} = req.body
        const db = req.app.get('db')

        db.find_user(email)
        .then(user => {
            if(!user.length) {
                res.status(404).json({error: 'USER_DOES_NOT_EXIST'})
            } else {
                bcrypt.compare(password, user[0].password).then(doesMatch => {
                    if(!doesMatch) {
                        res.status(403).json({error: 'USERNAME_OR_PASSWORD_INCORRECT'})
                    } else {
                        req.session.user = {
                            // id: user[0].users_id,
                            email: user[0].email,
                            first_name: user[0].first_name,
                            last_name: user[0].last_name,
                            cart: [],
                            total: 0
                        }
                        console.log("this is session after user",req.session)
                        res.status(200).json(req.session.user)
                    }
                })
            }
        })
    },

    getUser: (req, res) => {
        if(req.session.user) {
            res.json(req.session.user)
        } else {
            res.status(401).json({error: 'Please log in.'})
        }
    },

    logOutUser: (req, res) => {
        req.session.destroy()
        res.status(200).send(req.session)
    }
}