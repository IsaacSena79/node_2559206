const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8010

//Servidor de contenido estatico
app.use(express.static('public'))

//Configuración del directorio de las vistas hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')


//Configuración del directorio que guarda los archivos partials hbs
hbs.registerPartials(__dirname + '/public/views/partials');


app.get('/', (req, res) =>{
    res.render('home',
    {
        titulo: 'Parisina',
        nombre: 'Jerundio Mendoza'
    })
})

app.get('/productos', (req, res) =>{
    res.render('productos',
    {
        titulo: 'Productos',
        nombre: 'Jerundio Mendoza',
        rol: 'Admin'
    })
})

app.get('/usuarios.hbs', (req, res) =>{
    res.render('usuarios',
    {
        titulo: 'Usuarios',
        nombre: 'Jerundio Mendoza'
    })
}) 

app.get('/ventas.hbs', (req, res) =>{
    res.render('ventas',
    {
        titulo: 'Ventas',
        nombre: 'Jerundio Mendoza'
    })
}) 


app.listen(puerto, ()=> {
    console.log(`Escuchando por el puerto ${puerto}`)
})







