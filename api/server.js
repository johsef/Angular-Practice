// Node Server connection

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./db'),
      router = require('./app.route')





//MongoDb connection
mongoose.Promise = global.Promise
mongoose.connect(config.db, {useNewUrlParser: true,
                            useFindAndModify: false})
                .then(() => {console.log('Database is connected')},
                err => {console.log('Can not connect to the database'+ err)}
                )



// Beginning of app
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())


//Api routes
app.use('/api', router)

//Start Server
let port = process.env.PORT || 8000



//Find 404 and heand over to error handler
app.use((req,res,next) =>{
  next(createError(404))
})

app.listen(port, () =>{
  console.log('Listening on port ' + port)
})
