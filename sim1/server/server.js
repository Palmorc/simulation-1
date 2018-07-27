const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()


const gc=require('./controllers/gameController')

const app = express()
const port = 3005

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db=>{
  console.log('Connected!');
  app.set('db',db)
}).catch(err =>{
  console.log('Connection not established, error:', err);
})

app.get( '/api/game/:id', gc.getOne )
app.get( '/api/games', gc.getAll )
app.post( '/api/game', gc.create )
app.put( '/api/game/:id', gc.update )
app.delete( '/api/game/:id', gc.delete )


app.listen(port, () =>{ console.log('Server is listening on port:', port); })
