const Todo = require("../models/Todo");

exports.deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);

        // console.log(`Deleted Todo: `,deletedTodo);
        res.status(200).json({
            success:true,
            message:`Todo deleted successfully`,
            data:deletedTodo,
        })
    }
    catch(error){
        console.error(error.message);
        // console.log(error.message);
        res.status(500).json({
            success:false,
            message:`Issue while deleting todo.`,
            error:error.message,
        })
    }
};