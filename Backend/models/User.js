
const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const UserSchema= new Schema ({
firstname: {
    type:String ,
    required: true,

},
lastname: {
    type:String ,
    required: true,
    
},
email: {
    type:String ,
    required: true,
    
},

password:{
    type : Number ,
    required : true 
},
number :{
type : Number ,
required: false 
}


})
const User = mongoose.model("User", UserSchema)
module.exports= User ;