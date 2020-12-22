const mongoose=require('mongoose');// Referencing Mongoose
// ********** Defining Schema **********/
const ContactSchema = mongoose.Schema({
    lastName : {
        type: String,
        required: true
    },
    firstName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    age : {
        type: Number,
    }
})

module.exports = Users = mongoose.model('Users', ContactSchema);