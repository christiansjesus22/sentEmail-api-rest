const { json } = require("body-parser")
const nodeMailer = require ("nodemailer")
require('dotenv').config()

//funcion de enviaar correo
const sendEmails   =  async (req, res) =>{
    var body = req.body

    //configuracion del host
    var config =  nodeMailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure: false,
        auth:{
            user:process.env.hostUser,
            //la contrasenha debe ser generada por app-password de google
            pass:process.env.hostPassword,
        }
    })

    //cuerpo del correo
    const contentHTML =   `
    <h1>CONTACTO</h1>
    <ul>
    <li> user-Email: ${body.email}</li>
    <li> user-name: ${body.name} </li>
    <li> user-phone: ${body.phone} </li>
    <li> subject: ${body.subject}</li>
    </ul>
    <p>${body.message}</p>
    `

    //enviando email
    const info = await config.sendMail({
        from:` 'email-from' <${process.env.hostUser}> `,
        //el email que va a recibir el correo desde el formulario
        to: `${process.env.myEmail}`,
        subject :'formulario de contacto',
        html : contentHTML
    })
    
    console.log (info)
    res.send ({ok:"hi"})
}

module.exports = {sendEmails} 