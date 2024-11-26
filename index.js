const express = require('express');
const path = require('path');
const fs = require('fs');
const { constrainedMemory } = require('process');
const { error } = require('console');

const app = express();
const PORT = process.env.PORT || 2001;
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))

});

app.listen(PORT,() =>{
    console.log(`Server started on port ${PORT}`);
})