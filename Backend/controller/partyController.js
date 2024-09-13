import Party from "../database/models/partyModel.js";
import fs from "fs"

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

//updated party
export const updateParty = async (req, res) => {
    try {
      const id = req.params.id;
      const { partyName, estd } = req.body;
  
      // Fetch the existing party data
      const oldData = await Party.findByPk(id);
      if (!oldData) {
        res.status(404).json({ message: "Party not found" });
        return;
      }
  
      // Set the default image URL from old data or an empty string if undefined
      let fileName = oldData.imageUrl || '';
      if (req.file) {
  
        // Only attempt to delete the old image if there's an existing image URL
        if (fileName) {
          const localHostUrlLength = "http://localhost:3000/".length;
          const newOldImagePath = fileName.slice(localHostUrlLength);
  
          fs.unlink(`storage/${newOldImagePath}`, (err) => {
            if (err) {
              console.error("Error deleting old image:", err);
            } else {
              console.log("Old image deleted successfully");
            }
          });
        }
        fileName = req.file.filename;
        //fileName = "http://localhost:3000/" + req.file.filename;
      }
  
      // Update the party data in the database
      const [parties] = await Party.update(
        { partyName, estd, partyImageUrl: fileName },
        { where: { id: id } }
      );
  
      // Check if the update was successful
      if (parties > 0) {
        const updatedParty = await Party.findByPk(id);
        res.status(200).json({ message: "Successfully updated the party", data: updatedParty });
      } else {
        res.status(404).json({ message: "Party not found or no changes made" });
      }
    } catch (error) {
      console.error("Error updating party:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  