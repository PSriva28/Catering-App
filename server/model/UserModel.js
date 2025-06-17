const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {type : String, require : [true, "Please enter you name. "]},
    email : {type : String , require: [true, "Please enter your email."], unique : true},
    password : {type : String, require : [true, "Please enter your password."]},
    //placed orders : [{orderid :{type : mongoose.Schema.Types.ObjectId, ref : "OrderModel"} , orderName : {type:String}, orderStatus :  },si]
},{
    timestampsb: true
})

module.exports = mongoose.model("UserModel", userSchema);