const Todo = require("../models/Todo");

exports.updateTodo = async(req,res)=>{
    try{
        const {title="",description=""} = req.body;
        const {id} = req.params;

        const modifiedTodo = await Todo.findByIdAndUpdate(id,
            {
                title,description
            }, {new:true}
        )

        
        res.status(200).json({
            success:true,
            message:`Entry updated successfully`,
            data:modifiedTodo,
        })
    }
    catch(error){
        console.error(error.message);
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:`Issue while update todo.`,
            error:error.message,
        })
    }
};