//importing modules
var express= require('express');
var mongoose= require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
var path =require('path');

var app = express();

const route=require('./routes/route');
const route2=require('./routes/route2');
const route3=require('./routes/route3');
mongoose.connect('mongodb://localhost:27017/librarypro', function(err){
if(err){
    console.log('not connected:' +err);

}
else{
    console.log('successfully connected to mongodb @27017');
}
}

);
mongoose.connect('mongodb://localhost:27017/librarypro', function(err){
if(err){
    console.log('not connected:' +err);

}
else{
    console.log('successfully connected to mongodb @27017');
}
}

);
mongoose.connect('mongodb://localhost:27017/librarypro', function(err){
if(err){
    console.log('not connected:' +err);

}
else{
    console.log('successfully connected to mongodb @27017');
}
}
);
//connect to mongodb
// mongoose.connect('mongodb://localhost:27017/librarypro', { useUnifiedTopology: true, useNewUrlParser: true } );
//  //on connection

// mongoose.connection.on('conected',()=>{
//   console.log('Connected to database mongodb @ 27017');  
// });

// mongoose.connection.on('error',(err)=>{
//     if(err)
//     {
//         console.log('Error in connecting',err);
//     }
     
//   });


//portno
const port =3000;
//adding middleware
app.use(cors());
//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));


//routes
app.use('/api',route);
app.use('/api',route2);
app.use('/api',route3);
// app.use('/api',route3);
//tesing server
app.get('/',(req,res)=>{
    res.send('footbar');
});
app.listen(port,()=>{
   console.log('Server started at port:' +port);

});