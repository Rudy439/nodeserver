var express=require('express')
var app=express();
app.get('/',function(req,res,){
 res.send('Hello world');

})

app.get('/home',(req,res)=>{
    res.status(200).send('I am home folder')
})
var server=app.listen(3000,function() {
    

     
});