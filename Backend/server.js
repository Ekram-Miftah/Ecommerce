import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudnary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRouter.js'
import orderRouter from './routes/orderRoute.js'

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection:", reason);
});
console.log('Starting the server...');

//App config
const app=express()
const port=process.env.PORT||4000
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(cors())

//Api Endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.get('/',(req,res)=>{
    res.send("API Working Habibty relax:)")
})

app.listen(port,()=>console.log('server started on PORT:'+port))

export default app;