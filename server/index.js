/**
 * 
 * MVC
 * 
 * User -> tampilan ke view, proses ke controller
 * 
 * example : user minta gambar kucing, diproses di controleer, diteruskan ke model (database), dapet gambarnya dari model, ke controller lagi baru dioper ke view
 * 
 * cara proses mvc
 * 
 * ada request -> controller -> 
 * 
 * Kalo di client server = Controller, Model, Root
 * 
 * 
 */

const express = require('express')
const EntryPointController = require("./con")

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/cek', EntryPointController.cekExpress)

app.get('/datauser', EntryPointController.getDataUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})