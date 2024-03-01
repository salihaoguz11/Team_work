const express=require("express")
const app=express()
const Port=3000


app.get('/sum', (req, res) => {
    const { num1, num2, num3, num4 } = req.query;
    const sum = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4);
    res.send(`The sum is ${sum}.`);
    });
   


app.get("/asd",logRequest,(req, res)=>{
    console.log(res.name)
   res.send("hello") 
})
app.listen(3000, ()=>{
console.log("contact")
})
function logRequest(req, res, next) {
    console.log(`${req.method} ${req.url} ${Port}`);
   res.name="tom"
    next();
    } 

