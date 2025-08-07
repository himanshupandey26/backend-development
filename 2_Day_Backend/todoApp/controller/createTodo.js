const Todo = require("../models/Todo");

exports.createTodo = async(req,res)=>{
    try{
        const {title, description} = req.body;

        if(!title || !description){
            res.status(400).json({
                success:false,
                message:`Both title & description are required`
            })
        }

        const response = await Todo.create({title, description});

        console.log(`Entry created successfully:`,response);
        res.status(200).json({
            success:true,
            message:`Entry created successfully`,
            data:response,
        })
    }
    catch(error){
        console.error(error.message);
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:`Issue in create todo.`,
            error:error.message,
        })
    }
};