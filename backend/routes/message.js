const router = require('express').Router();
let clientMessage = require('../model/message.model');
const axios=require("axios");
const { ObjectId } = require('bson');

router.route('/').get((req, res) => {
  clientMessage.find()
    .then(clientMessages => res.json(clientMessages))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/clientCustomerMessage').post((req, res) => {
  const id=req.body.emailClient+req.body.emailClientCustomer;
  const message=req.body.emailClientCustomer+': '+req.body.message;  
     
 

  
    
     clientMessage.findOneAndUpdate({
    _id:id
    },{$push:{Message:message}}, (
      err,
      result
    )=> {
      if (err) {
        res.send(err);
      } 
      else if (result===null)
      {
      
        const _id=id;
        var  Message=[];
        Message.push(message);
        
        const newMessageArray = new clientMessage({
       _id,        
       Message 
      });
      newMessageArray.save()
      .then(() => res.json('Message added!'))
      .catch(err => res.status(400).json('Error: ' + err));
        
      }
      else
      {
        
        res.send(result);
      }
    });
    
    
  

  


});
router.route('/clientMessage').post((req, res) => {
  const id=req.body.emailClient+req.body.emailClientCustomer;
  const message=req.body.emailClient+': '+req.body.message;  
     
      clientMessage.findOneAndUpdate({
     _id:id
     },{$push:{Message:message}}, (
       err,
       result
     )=> {
       if (err) {
         res.send(err);
       } 
       else if (result===null)
       {
       
         const _id=id;
         
         
         
          
           var  Message=[];
 
         Message.push(message);
         
         const newMessageArray = new clientMessage({
        _id,        
        Message 
       });
       newMessageArray.save()
       .then(() => res.json('Message added!'))
       .catch(err => res.status(400).json('Error: ' + err));
         
       }
       else
       {
         
         res.send(result);
       }
     });
     
     
   
 
   
 
 
 });


router.route("/:id").get((req, res) => {
  clientMessage.findById(req.params.id)
    .then((message) => res.json(message))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
