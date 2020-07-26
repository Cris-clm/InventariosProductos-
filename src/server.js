const express=require('express')
let app=express()
const arrayProductos=[]
app.get('/',(req,res)=>{
    res.send('Bienvenido a tu servidor, Amo.')
})


app.post

app.listen(3000,()=>{
    console.log('servidor corriendo desde puerto 3000')
})
