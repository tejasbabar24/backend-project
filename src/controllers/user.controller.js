import asyncHandler from '../utils/asyncHandler.js'

const registerUser = asyncHandler ( async (req ,res)=>{
     res.status(200).json({
        message:"teja bhai ke age kaun bol sakta hai kya"
    })
})


export default registerUser