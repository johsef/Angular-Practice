let DB = require('./db.model')

module.exports ={
    _delete,
    update,
    edit,
    add,
    getAll
}

function _delete(req,res){
    let _id=req.params.id
    DB.findByIdAndDelete(_id,(err,req,res) => {
      if(err){
        res.json(err);
        console.log('Error deleting record '+err)
        return next (err)
    }
      else {
        
        console.log('Candidate with id number '+_id+ ' has been successfully removed')
      }
    })
  }

  function update(req,res,next ){
    DB.findByIdAndUpdate(req.params.id,
      {$set: req.body},
       (err, record)=>{
      if(err){
        res.status(404).send('Record not found')
        console.log(err)
      }
      else{

        res.json(record)
        console.log('Record Updated Successfuly')

      }
    })
  }

  function edit(req,res){
    let id = req.params.id
    DB.findById(id, function(err, record){
      res.json(record)
    })
  }


  function getAll(req,res){
    DB.find(function (err, records){
      if (err){
        console.log(err)
      }
      else{
        res.json(records)
      }
    })
  }

  function add(req,res,next){
    DB.create(req.body, (err, data) =>{
      if (err) return console.log(err)
      else{
        res.json(data)
      }
    })
  }

