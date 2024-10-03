const express= require('express')

const cors=require('cors')

const app= express();

const dotenv=require('dotenv')

dotenv.config();

const locationData= require('./location.json')

app.use(cors())

app.get('/api/location',(req,res)=>{

const data = locationData;

res.json(data);

});

app.listen(process.env.PORT||3000);
