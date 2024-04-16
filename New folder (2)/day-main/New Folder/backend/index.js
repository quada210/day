// 1.  import the express
const express=require('express')
const rest=require('./models')
const cors=require('cors')

// 2
const app=new express()
// middleware
app.use(express.urlencoded({extended:true}))
app.use (express.json())
app.use(cors())




// api for add
app.post('/add',async(req,res)=>{
    let result=await new rest(req.body);
    result.save();
    res.send("data added");
})
// api for view 

app.get('/view',async(req,res)=>{
    let result=await rest.find();
    res.json(result);

})

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    rest.findOne({email :email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("no data existed")
        }
       
})
       
})



// create a localhost port

app.listen(4040,()=>{
    console.log("port is running at 8080")
})