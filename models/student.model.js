const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name:{type:String,required:true,max:100},
    section:{type:String,required:true,max:9},
    field:{type:String,required:true,max:100},
    GPA:{type:Number,required:true,max:6}
}) ;
module.exports = mongoose.model('Student',StudentSchema);