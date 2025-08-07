const Todo = require("../models/Todo");

exports.getTodos = async(req,res)=>{
    try{
        const allTodos = await Todo.find({});
        // if(!allTodos){
        //     res.status(400).json({

        //     })
        // }
        res.status(200).json({
            success:true,
            data:allTodos,
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            data:`Internal server error.`,
            message: error.message,
        });
    }
}
