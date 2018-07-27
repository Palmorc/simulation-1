module.exports = {
  create:(req,res)=>{
    const db = req.app.get('db')

    let { name,developer,price,rating } = req.body

    db.addGame([name,developer,price,rating])
    .then( ()=>res.sendStatus(200) )
    .catch( err => {
      res.status(500).send({ errorMsg : 'I need healing! ***CREATE***' })
      console.log(err);
    } )
  },


  getAll:(req,res)=>{
    const db = req.app.get('db')

    db.readAll()
    .then( (results) => res.status(200).send(results) )
    .catch( err => {
      res.status(500).send({ errorMsg : 'I require assistance! ***GET ALL***' })
      console.log(err);
    } )
  },


  getOne:(req,res)=>{
    const db = req.app.get('db')
    let { id } = req.params

    db.readOneGame(id)
    .then( (results) => res.status(200).send(results))
    .catch( err => {
      res.status(500).send({ errorMsg : 'Shit\'s broke dinkle ***GET ONE***'})
      console.log(err);
    } )
  },


  update:(req,res)=>{
    const db = req.app.get('db')
    let { id } = req.params
    let { price } = req.body

    db.updateGame([price,id])
    .then( (results)=> res.status(200).send(results) )
    .catch(err => {
      res.status(500).send( { errorMsg: 'Uh Oh! ***UPDATE*** is not working!' } )
      console.log(err);
    })
  },


  delete:(req,res)=>{
    const db = req.app.get('db')
    let { id } = req.params

    db.deleteGame(id)
    .then( (results) => res.status(200).send(results) )
    .catch( err => {
      res.status(500).send({ errorMsg : '***DELETE*** machine broke' })
      console.log(err);
    } )
  }
};
