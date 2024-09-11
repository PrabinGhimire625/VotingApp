import Category from "../database/models/CategoryModel.js";

const categoryData = [
  { categoryName: "stateLevel" },
  { categoryName: "proviceLevel" },
  { categoryName: "municipalityLevel" },
  { categoryName: "localLevel" },
];

// Category seeder function
export const seedCategory=async()=>{
  try {
    const category = await Category.findAll();
    if (category.length === 0) {
      await Category.bulkCreate(categoryData); // bulkCreate inserts multiple records into the database
      console.log("Category seeded successfully");
    } else {
      console.log("Categories already seeded");
    }
  } catch (error) {
    console.error("Error seeding categories:", error);
  }
}

//add category
export const addCategory = async (req, res) => {
  const { categoryName } = req.body;
  if (!categoryName) {
      return res.status(400).json({ message: "categoryName is required" });
  }
      const category = await Category.create({ categoryName });
      res.status(200).json({ message: "Category successfully added", data: category });
};
//fetch category
export const fetchAllCategory=async(req,res)=>{
  const category=await Category.findAll()
  res.status(200).json({message:"All Category is successfully fetched",data:category})
}

//delete category
export const deleteCategory=async(req,res)=>{
  const id=req.params.id
  await Category.destroy({where:{id:id}})
  res.status(200).json({message:"Category is successfully deleted"})
}

//update category
export const updateCategory=async(req,res)=>{
  const {categoryName}=req.body
  const id=req.params.id
  await Category.update({categoryName},{where:{id:id}})
  res.status(200).json({message:"Category is successfully updated"})
}