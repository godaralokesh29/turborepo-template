import express from 'express';
export { NUMBER} from '@repo/common';
const app = express();
app.use(express.json());

app.get("/",(req, res) => {
    res.json({
        message: "Hello from your godara app!",
        status: "success"
    });
    
})

app.listen(3000,()=>{
   console.log("Server is running on port 3000");
})