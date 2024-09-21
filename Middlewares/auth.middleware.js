const jwt=require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    const findToken=req.cookie.synxToken
    if(!findToken){
        return res.json({success:false , message:"Token  not found"})
    }
    const decode= jwt.verify(token,Secret_key)
    if(decode){
        return res.json({success:false, message:"Not decoded"})
    }
    req.id=decode.id
    req.admin=decode.admin
    next()
}


const verifyAdmin=(req,res,next)=>{
    const admin=req.admin
    if(role===admin) 
     }