const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientMessageSchema = new Schema(
  {
    _id:{type:String,reqired:true,upsert:true},
    Message:[String]
  },
  {
    timestamps: true,
  }
);

const clientMessage = mongoose.model("clientMessage", clientMessageSchema);

module.exports = clientMessage;








