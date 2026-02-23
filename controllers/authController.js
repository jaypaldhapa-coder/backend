import sendOtp from "../services/emailService.js";

export const sendMail = async (req,res)=>{
    const {email} = req.body;
    try{
        await sendOtp(email);
        res.json({
            success:true,
            message:"email sent successfully"
        })
    }catch(err){
        res.json({
            success:false,
            message:"faild to sent email"
        })
    }
}