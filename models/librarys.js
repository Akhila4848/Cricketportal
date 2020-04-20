const mongoose=require('mongoose');

const  Libschema = mongoose.Schema({

    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    doj:{
        type:String,
        required:true
    },
    bday:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },

});

const Library = module.exports = mongoose.model('Library',Libschema);