import jwt from "jsonwebtoken"

const ProtectedApp =(options)=>{
  const { secret, tokenName, getUserId,userModel } = options
  return async(req,res,next)=>{
     try {
        const token = req.cookies[tokenName]
        if(!token){
            return res.status(400).json({
                message:'Unauthorised User No token is provided'
            })
        }
        const decoded = jwt.verify(token,secret)
        const userId = getUserId(decoded);
        if (!userId) {
            return res.status(401).json({
              message: 'Unauthorized'
            });
          }
    
        if(!decoded){
            return res.status(401).json({
                message:'Invalid Token'
            })
        }
      const user = await userModel.findById(userId)
      req.user = user;
      next()
     } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
     }
  }
}

export default ProtectedApp



