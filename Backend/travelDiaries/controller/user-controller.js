import User from "../models/User";
export const getALLUsers=async () =>
{
    let users;
    try{
        users=await User.find();
    } catch(err){
        console.log(err);
    }

    if(!users)
    {
        return res.status(500).json({message : "Unexpected Error Occured"});
    }
    
    return res.status(200).json({ users });
};