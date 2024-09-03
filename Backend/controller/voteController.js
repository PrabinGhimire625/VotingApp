import Vote from "../database/models/voteModel.js";
import Candidate from "../database/models/candidateModel.js";
import User from "../database/models/userModel.js";

//add the vote
export const addVote = async (req, res) => {
  const userId = req.user.id;
  const candidateId = req.params.candidateId;

  try {
      // Check if the user has already voted for this candidate
      const existingVote = await Vote.findOne({
          where: { userId, candidateId },
      });

      if (existingVote) {
          return res.status(400).json({ message: "You have already voted for this candidate." });
      }

      // Create a new vote
      const newVote = await Vote.create({ userId, candidateId });

      // Increment the vote count for the candidate
      await Candidate.increment('voteCount', { where: { id: candidateId } });

      res.status(200).json({ message: "Vote successfully recorded", data: newVote });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
  }
};



//count vote and sort according top vote
export const countVote = async (req, res) => {
    try {
      const candidates = await Candidate.findAll({
        order: [['voteCount', 'DESC']], 
      });
  
      const voteRecord = candidates.map((data) => {
        return {
          candidateName: data.candidateName,
          count: data.voteCount,
        };
      });
      return res.status(200).json(voteRecord);
    } catch (error) {
      console.error("Error fetching vote counts:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };


//delete vote
// export const deleteVote = async (req, res) => {
//     const userId = req.user.id;
//     const candidateId = req.params.candidateId;
  
//     try {
//         // Find the vote record to be deleted
//         const vote = await Vote.findOne({
//             where: { userId, candidateId }
//         });

//         if (!vote) {
//             return res.status(404).json({ message: "Vote not found." });
//         }
//         // Delete the vote record
//         await Vote.destroy({
//             where: { userId, candidateId }
//         });

//         // Decrement the vote count for the candidate
//         await Candidate.decrement('voteCount', {
//             where: { id: candidateId }
//         });
//         const user = await User.findByPk(userId);
//         res.status(200).json({ message: "Vote successfully deleted." });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };
