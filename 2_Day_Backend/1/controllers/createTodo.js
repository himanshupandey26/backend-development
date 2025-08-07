const Todo = require("../models/Todo");

exports.createTodo = async(req,res)=>{
    try{

        const {title, description} = req.body;

        const todoResponse = await Todo.create({title, description});

        res.status(200).json({
            success:true,
            data:todoResponse,
            message:`Entry created successfully...!!!`
        });
    }
    catch (error){
        console.error(error.message);
        console.log(error.message);
        res.status(500).json({
            success:false,
            data:`Internal server error`,
            message: error.message,
        });
    }

}