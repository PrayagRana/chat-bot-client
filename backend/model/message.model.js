const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientMessageSchema = new Schema(
  {
    email: {type: String,required:true},
    emailClient:{type:String,required:true},
    message:{type:String,reqired:true}
  },
  {
    timestamps: true,
  }
);

const clientMessage = mongoose.model("clientMessage", clientMessageSchema);

module.exports = clientMessage;








