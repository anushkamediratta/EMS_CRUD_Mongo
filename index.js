const express = require('express')
const engine= require('express-handlebars').engine
const handlebars=require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const app=express()
const connectToMongo = require("./model/db");
connectToMongo();

app.engine('handlebars',engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
}));
app.set('view engine', 'handlebars');
app.set('views', './views');



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/emp",require('./controllers/routes'))

const PORT= process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))
 
