const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            requires:true,
            maxLength:50,
        },
        description:{
            type:String,
            requires:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            requires:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            requires:true,
            default:Date.now(),
        },
    }
);

module.exports=mongoose.model("Todo",todoSchema);