import http from 'http'
import fs from 'fs'
import express from 'express'
 
const app = express()
app.set('view engine' , 'ejs')
app.listen(3000)
app.get('/' , (req , res) =>{
    res.render('index')

}
)


//  http.createServer((req , res) => {
// // console.log(req);
// const url = req.url
// const method = req.method
// if(url === "/"){
// res.write('<html>')
// res.write('<body><form method="post" action="/message"><input name="message" type="text"><button type="submit">submit</button></form></body>')
// res.write('</html>')
//  return res.end()}
// if(url === "/message" && method === "POST")
// {
//     const body = []
//     req.on('data' , (chunk) => {
//         console.log(chunk)
//         body.push(chunk) })
//         req.on('end' , () => {
//                 const parsedData = Buffer.concat(body).toString()
//                     var message = parsedData.split('=')[1]
//                     message = message.replaceAll('+' , " ")
//                     console.log(message);
//                     fs.writeFileSync ('message.txt' , message
//                 )
//             })
// res.writeHead(302 ,  { 'Location': '/' });
// return res.end()
// }
// })
// server.listen(3000)