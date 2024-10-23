const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String
})


// Password hash middleware.

UserSchema.pre('save', async function save(next) {
    const user = this
    if (!user.isModified('password')) { return next() }
    
    try {
        const salt = await bcrypt.genSalt()
        user.password = await bcrypt.hash(user.password, salt)
        next()
    } catch (err) {
            return next(err)
        }
    })


// Helper method for validating user's password.

UserSchema.methods.comparePassword = function comparePassword(candidatePassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
            if(err) {
                return reject(err);
            }
            resolve(isMatch);
        })    
    })
}

module.exports = mongoose.model('User', UserSchema)