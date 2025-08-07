const Todo = require("../models/Todo");

exports.getTodos = async(req,res)=>{
    try{
        const allTodo = await Todo.find({});

        // if(!allTodo){
        //     res.status(400).json({
        //         success:false,
        //         message:`No todo found.`
        //     })
        // }
        console.log(`All todos:`,allTodo);
        res.status(200).json({
                success:true,
                message:`Data sent.`,
                data:allTodo,
            })

    }
    catch(error){
        console.error(error.message);
        res.status(500).json({
                success:false,
                message:`Internal server error while fetching all todos.`,
                error:error.message,
            })

    }
}


exports.getTodoByID = async(req,res)=>{
    
    try{
        // const id = req.params.id;
        const {id} = req.params;
        const todo = await Todo.find({_id:id});

        console.log(`Todo found: `,todo);
        res.status(200).json({
                success:true,
                message:`Todo found.`,
                data:todo,
            })
    }
    catch(error){
        console.error(error.message);
        res.status(500).json({
                success:false,
                message:`Internal server error while fetching all todos.`,
                error:error.message,
            })

    }
};