

// fs.writeFile("hey.txt" , "hey hello kaise ho " , function(err){
//     if(err) console.error(err);
//     else console.log("done");
// }
// )
// fs.rename("hey.txt" , "hello.txt" , function(err){
//     if(err) console.log(err)
//         else console.log("done");
// })

const express= require("express");
const app=express();
const port=3000;


app.get("/" , (req,res)=>{
    res.send("hello world");
})

app.get("/twitter" ,(req, res)=>{
    res.send("Hello hiteshdotcom");
})


app.listen(process.env.PORT ,()=>{


console.log(`Example app listening on port ${port}`);
});   


    




 