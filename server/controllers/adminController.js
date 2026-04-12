import jwt from 'jsonwebtoken'


export  const adminLogin = async (req,res) =>{
    try {
        const {username, password}= req.body;

        if(username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD){
            return res.json({success :false, message :"invalid credentials"})
        }

        const token =jwt.sign({username},process.env.JWT_SECRET)
        res.json({success: true, token})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}