const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next).catch((err) => next(err)));
  };
};

export { asyncHandler };

// const asyncHandler = ()=>()=>{}
// const asyncHandler = (func)=>{()=>{}}
// const asyncHandler = (func)=>()=>{}
// const asyncHandler = async (func)=>()=>{}

// const asyncHandler = (fn) => async (req, res, next) => {
//   // asyncHandler - higher order function, can take function as a parameter or returned also
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.send(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
