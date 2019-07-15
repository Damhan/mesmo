const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//make our schema
const UserSchema = new Schema(
    {
        email:{
            type: String,
            required: true,
            index: {unique: true}
        },
        password: {
            type: String,
            required: true,
        }
    }
);

module.exports = User = mongoose.model('user', UserSchema);