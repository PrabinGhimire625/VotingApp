const errorHandler=(fn)=>{
    return (req, res)=>{
        fn(req,res)
        .catch((err)=>{
            console.log(err)  //optional
            return res.status(500).json({
                message:"Internal server error",
                errorMessage:err.message
            })
        })
    }
}
export default errorHandler




