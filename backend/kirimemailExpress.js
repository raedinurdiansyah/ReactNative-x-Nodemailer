const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(bodyParser.json())

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'raedinurdiansyah@gmail.com',
        clientId: '563086871118-t193fjf1v0s8fc1h41ppb9ett1327dit.apps.googleusercontent.com',
        clientSecret: 'mTHceoySSIFPDtMq69SE4pWf',
        refreshToken: '1/3zjiD98vJYakuf2SEOC8Fn9WlEResb9VaI4E4nTRZN8'
    }
})


app.post('/kirimemail', (req, res)=>{



// var ngirim = {
//     from: 'Mr.Y <wkwk@dolphinbay.com>',
//     to: 'raedinurdiansyah@gmail.com',
//     subject: 'Tes Nodemailer',
//     text: 'Halo gan!',
//     html: '<h1> Ini Email </h1>'

    var ngirim = {
        to: req.body.email,
        subject: req.body.subjek,
        text: req.body.message,
    
    }

    transporter.sendMail(ngirim, (x, y) => {
        res.send("Email berhasil terkirim")
        if (x) {
            console.log('Email Gagal Terikirm')
            res.send('Email Gagal Terikirm')
        }
        else {
            console.log('Email berhasil terkirim')
            res.send('Email berhasil terkirim')
        }

})
})

app.get('/', (req,res)=>{
    transporter.sendMail(ngirim, (err,res2) => {
        if (err) { 
            console.log('Email gak dikirim!');
            res.send('Email gak dikirim!');}
        else { console.log('EMAIL DIKIRIM');
            res.send('EMAIL DIKIRIM') };
    });
})


app.listen(3210, ()=>{
    console.log('RUN RUN RUN @3210')
});