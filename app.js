const express = require("express")
const path= require("path")
const app = express();
const port= 8000;//8000 host is using here
//EXPRESS SPECIFIC STUFF
app.use("/static", express.static('static'))//serving static file
app.use(express.urlencoded())
//PUG SPECIFIC STUFF
app.set('view engine', 'pug')//set the template engine
app.set('views',path.join(__dirname,'views'))//set the views directory
//ENDPOINTS
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',params);
});
app.get('/contact',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug',params);
});
//Start the server
app.listen(port,()=>{
    console.log(`the app works on port ${port}`)
})