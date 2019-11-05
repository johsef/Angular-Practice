// App routes

const express = require('express')
const router = express.Router()

//Require DB model in our Model

let service = require('./service')

//Define Added route
router.route('/add').post(service.add)

  //Define get Record route
  router.route('/').get(service.getAll)

  //Defined edit route
  router.route('/edit/:id').get(service.edit)

  //Define Update route
  router.route('/update/:id').put(service.update)

  //Define delete route
  router.route('/delete/:id').delete(service.update)
  
  module.exports = router
