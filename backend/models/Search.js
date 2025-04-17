const mongoose=require('mongoose');
const searchSchema= new mongoose.Schema({
    title: String,
    description: String,
    link:String
},{collection :'searches'});

module.exports = mongoose.model('Search',searchSchema);