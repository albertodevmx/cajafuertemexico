var nodemailer = require('nodemailer');
const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

// var transporter = nodemailer.createTransport('smtps://:@smtp.gmail.com');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'hmserviciosweb@gmail.com',
           pass: 'meganI0605'
       }
   });

exports.enviarMail = functions.https.onRequest((req, res) =>{

    
    cors(req, res, () => {
        // Your app stuff here

        // Send Response
        // res.status(200).send(<response data>);

        // console.log("req", res);
        elReq = "Nombre: " + req.body.nombre + "<br>"
        + "Teléfonos: " + req.body.telefonos + "<br>"
        + "e-mail: " + req.body.email + "<br>"
        + "Mensaje: " + req.body.mensaje + "<br>";

        var mailOptions={
            to: 'nestor_equipobancario@live.com',
            // to: 'facturacion.mxblind@gmail.com',
            subject: 'Mensaje de MX Blindajes',
            html: elReq
        }
        transporter.sendMail(mailOptions,function(err,response){
            if(err){
                res.status(500).send("Ocurrio un error, vuelva a intentarlo.");
                // res.end('Mail not sent');
            }
            else{
                res.status(200).send("Se envió correctamente");
                // res.end('Mail sent');
            }
        });
    });

    
});