const express = require("express");
const router = express.Router();
const FoodModel = require('../model/FoodModel.js')
router.route("/getFood").get(async(req,res)=>{
    try {
        const getFood = await FoodModel.find();
        if(!getFood || getFood.length === 0) {
            return res.status(404).json({message : "No data Found"})
        }
        return res.status(200).json({message : "Data Found", getFood})
    }
    catch(err){
        return res.status(500).json({error : err.message})
    }
});

router.route("/getFood/:id").get(async(req,res) =>{
    const id = req.params.id;
    try{
        if(!id){
            return res.status(404).json({message : "Id not found!"})
        }
        const getFood = await FoodModel.findById(req.params.id);
        if(!getFood)
        {
            return res.status(404).json({message: "Food Not Found!"})
        }
        return res.status(200).json({message : "Food Found!", getFood});
    }
    catch(err){
        return res.status(500).json({error:err.message})
    }
});

router.route("/postFood").post(async(req,res) =>{
    const { name, type, calories, description, isVeg, price, imageUrl, available } = req.body;
    try{
        if(!name || !type || !calories || !description || !isVeg ||!price || !imageUrl || !available){
            return res.status(400).json({message : "All fields are required!!"});
        }
        const foodCheck = await FoodModel.findOne({name});
        if(foodCheck){
            return res.status(400).json({message: "Food Item Already there!!"})
        }
        const newItem = await FoodModel.create({name, type, calories, description, isVeg, price, imageUrl, available})
        if(!newItem){return res.status(404).json({error : "Please try again."})}
        else {
            return res.status(201).json({message : "Item added done.", newItem})
        }
    }
    catch(err){
        return res.status(500).json({error : err.message})
    }
    
}); 

router.route("/updateFood/:id").put(async(req,res)=>{
    const { name, type, calories, description, isVeg, price, imageUrl, available } = req.body;
    const id = req.params.id;
    try{
        if(!name || !type || !calories || !description || !isVeg ||!price || !imageUrl || !available){
            return res.status(404).json({message : "All fields are mandatory!"});
        }
        const checkItem = await FoodModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!checkItem){return res.status(400).json({message:"error occured, try again!"})}
        else{
            return res.status(201).json({message : "Update successfully!", checkItem})
        }
    }
    catch(err){
        return res.status(500).json({error : err.message})
    }
});

router.route("/delFood/:id").delete(async(req,res)=>{
    const id = req.params.id;
    try{
        if(!id){
            return res.status(404).json({message : "Food Id not found."})
        }
        const delFood = await FoodModel.findByIdAndDelete(req.params.id);
        if(!delFood){
            return res.status(400).json({message : "Please delete again.."})
        }
        return res.status(200).json({message : "Food Item deleted. ", delFood})
    }
    catch(err){
        return res.status(500).json({error : err.message})
    }
});

module.exports= router;