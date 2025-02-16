import orderModel from '../models/orderModel.js'; 
import userModel from "../models/userModel.js";





// Placing orders useing COD
const placeOrder= async (req,res) => {
    console.log("Received data:", req.body); // Debugging log
try {
    const {userId,items,amount,address }=req.body;
    const orderData={
        userId,
        items,
        address,
        amount,
        paymentMethod:"COD",
        payment:false,
        date:Date.now()

    }

    const newOrder=new orderModel(orderData)
    await newOrder.save()
    // console.log("Saved order in database:", newOrder);

    await userModel.findByIdAndUpdate(userId,{cartData:{}})
    res.json({success:true,message:"Order Placed"})


} catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
    
    
}
}

// Placing orders useing Stripe
const placeOrderStripe= async (req,res)=>{
    
}

// Placing orders usein Razor
const placeOrderRazorpay= async (req,res)=>{
    
}

// All orders data for Admin Panal

const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        console.log("Orders found:", orders);
        console.log("Orders found:", orders); 
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//User order data for frontend
const userOrders= async (req,res)=>{
   try {
    const {userId}=req.body
    console.log("Fetching orders for userId:", userId); //debug eyadergku
    const orders=await orderModel.find({userId })
    console.log("Orders found:", orders); // Debugging log
    res.json({success:true,orders})
   } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})

   } 
}

//update order Status from Admin Panal
const updateStatus= async (req,res)=>{

    try {
        const {orderId,status}=req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true,message:'status Updated'})
    } catch (error) {
        console.log(error)
    res.json({success:false,message:error.message})

    }
}

export {placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus}
