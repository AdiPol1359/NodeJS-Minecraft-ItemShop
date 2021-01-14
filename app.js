const express = require('express');
const https = require('https');
const path = require('path');
const colors = require('colors');
const parser = require('body-parser');

const pageRouter = require('./routes/page');

const errorController = require('./controllers/error');
const forwardingController = require('./controllers/forwarding');

const CertificateModel = require('./models/certificate');

const pageJSON = require('./configs/page.json');
const Certificate = require('./models/certificate');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '/public')));

app.use(parser.urlencoded({ extended: true }));

app.use(forwardingController.moveToHTTPS);

app.use(pageRouter);

app.use(errorController.get404Error);


app.listen(pageJSON.portHTTP, pageJSON.host, () => console.log("Web-Server zostal uruchomiony i nasluchuje na porcie ".cyan + `${pageJSON.portHTTP}`.yellow + "!".cyan));

if(pageJSON.enableHTTPS)
    https.createServer(CertificateModel.fetch(), app).listen(pageJSON.portHTTPS, pageJSON.host)