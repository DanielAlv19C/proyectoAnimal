/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rics35dax@gmail.com',
        pass: 'fjic hmfi aorr hegw'
    }
});

app.post('/send-email', (req, res) => {
    const { subject, email, description } = req.body;

    console.log(`Subject: ${subject}`);
    console.log(`Email: ${email}`);
    console.log(`Description: ${description}`);

    let mailOptions = {
        from: 'rics35dax@gmail.com',
        to: email,
        subject: subject,
        text: `Descripcion de los datos"${description}", reviselos a la brevedad, recuerde ser puntual.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).send(error.toString());
        }
        res.status(200).json({ message: 'Correo enviado: ' + info.response });
    });
});
app.post('/send-email1', (req, res) => {
    const { email } = req.body;

    console.log(`Email: ${email}`);

    let mailOptions = {
        from: 'rics35dax@gmail.com',
        to: 'firebaseequipotw@gmail.com',  
        subject: 'Solicitud de Información',
        text: `El correo ${email} solicito información: "que sea informacion acerca de la adopcion"`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).send(error.toString());
        }
        res.status(200).json({ message: 'Correo enviado: ' + info.response });
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});
