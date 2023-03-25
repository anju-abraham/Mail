const express=require('express')
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
const PORT=process.env.PORT||3000
const nodemailer=require('nodemailer')
const logger=require('morgan')
dotenv.config();

app.use(logger('dev'))
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json());

var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        // user:process.env.EMAIL,
        // pass:process.env.PASSWORD,
        user:'anjuatvm@gmail.com',
        pass:'mtwqowelnbvljbdj',
    }
});

var mailOptions={
    from:'anjuatvm@gmail.com',
    to:'anueden09@gmail.com',
    subject:'sending mail using nodemailer',
    text: 'Hello '
}
transporter.sendMail(mailOptions,function(error,info){
    if(error)
    console.log(error)
    else
    console.log('Email sent '+info.response);
});

app.listen(PORT,function(){
    console.log(`server running on port:${PORT}`)
})