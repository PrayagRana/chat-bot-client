const router = require('express').Router();
let clientMessage = require('../model/message.model');

router.route('/').get((req, res) => {
  clientMessage.find()
    .then(clientMessages => res.json(clientMessages))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
  const email=req.body.email;
  const emailClient=req.body.emailClient;
  const Message = req.body.message;
  
  const newMessage = new Message({    
      

      email,
      emailClient,
      message
      
    
    });

  
  newMessage.save()
    .then(() => res.json('Message added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;