import Party from "../database/models/partyModel.js";

//create party
export const addParty=async(req,res)=>{
    const {partyName,estd}=req.body
    let fileName;
    if(req.file){
        fileName=req.file.filename
    }else{
        fileName ="https://radiant.edu.np/wp-content/uploads/2024/07/360_F_412208819_p2xdpYNdB6CeUQeYMI6c1V2D8Y94f5sK.jpg"
    }
    try{
       const party= await Party.create({partyName,estd,partyImageUrl:fileName})
        res.status(200).json({message : "Party is successfully added",data:party})
    }catch(err){
        console.log(err)
        res.status(500).json({error : "Internal server error"})
    }
}

//read party
export const fetchAllparty=async(req,res)=>{
    const response=await Party.findAll();
    res.status(200).json({message:"Successfully fetched all the party!",data:response})
}

//read party
export const fetchSingleParty=async(req,res)=>{
    const id=req.params.id
    const response=await Party.findOne({where:{id:id}});
    res.status(200).json({message:"Successfully fetched single party!",data:response})
}

//delete party
export const deleteParty=async(req,res)=>{
    const id=req.params.id
    const response=await Party.destroy({where:{id:id}});
    res.status(200).json({message:"Successfully delete the party!"})
}

//delete party
export const updateParty=async(req,res)=>{
    const id=req.params.id
    const {partyName,estd}=req.body
    const response=await Party.update({partyName,estd},{where:{id:id}});
    res.status(200).json({message:"Successfully update the party!",data:response})
}
