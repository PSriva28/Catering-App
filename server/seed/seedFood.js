// Seeding is preloading data with sample or initial data for test purposes. You only need to use the it once for adding sample data
//Do you require to add Post Api? Yes, seeding script is run only once. The next as an admin you have to add manually item.
const foodData = require("../data/foodData.js")
const FoodModel = require("../model/FoodModel.js");
const dbConnect = require("../config/dbConnect.js");

const seedFood = async () =>{
    try {
    await dbConnect();
    await FoodModel.deleteMany();  console.log("All Data removed!!");
    await FoodModel.insertMany(foodData);
    console.log("🍽️ Food data seeded successfully");
    process.exit();
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
};
seedFood();