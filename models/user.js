/**
 * Created by huangmiao on 16-7-13.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userScheMa = new Schema({
    userid:String,
    password:String
});

exports.user = mongoose.model('users',userScheMa);
