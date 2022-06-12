const { request, response } = require('express');

const format = require('date-format')
const express= require('express')
const app = express()

const PORT = 4000 || process.env.PORT


//get request basic (for home directory)
app.get('/', (req ,res )=>{
    res.status(201).send('hello world utkarsh')
});

//get request for first route (instagram)
app.get('/api/v1/instagram', (req , res) => {
    //object to store all the key value pairs ie username followers follows
    const instaSocial = {
        Username : "Utkarsh_621",
        Followers: 999,
        Followes: 1111,
        date: format.asString("dd - hh:mm:ss",new Date()),
    };
    
    res.status(200).json(instaSocial );
})

//get request for second route (facebook)
app.get('/api/v1/facebook', (req , res) => {
    //object to store all the key value pairs ie username followers follows
    const fbSocial = {
        Username : "Utkarsh_621_facebook",
        Followers: 60,
        Followes: 100,
        date: format.asString("dd - hh:mm:ss",new Date()),
    };
    
    res.status(200).json(fbSocial );
})

//get request for third route (linkedIn)
app.get('/api/v1/LinkedIn', (req , res) => {
    //object to store all the key value pairs ie username followers follows
    const LinkedInSocial = {
        Username : "Utkarsh_621_LinkedIn",
        Followers: 680,
        Followes: 1070,
        date: format.asString("dd - hh:mm:ss",new Date()),
    };
    res.status(200).json(LinkedInSocial );
})

//for the default url
app.get("/api/v1/:token",(req , res)=>
{
    console.log(req.params.token);
    res.status(200).send( ` parameter is ${req.params.token}`);
});


app.listen(PORT , () =>
{
    console.log(`app is running on port number : ${PORT}`);

});
