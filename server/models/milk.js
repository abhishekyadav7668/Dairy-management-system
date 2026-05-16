const mongoose = require("mongoose");

const milkSchema = new mongoose.Schema({

  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
  },

  date: {
    type: String,
    default: () => new Date().toISOString().split("T")[0]
  },

  morning: {
    type: Number,
    default: 0,
  },

  evening: {
    type: Number,
    default: 0,
  },

  pricePerLitre: {
    type: Number,
    default: 0,
  },

  totalMilk: {
    type: Number,
    default: 0,
  },

  totalPrice: {
    type: Number,
    default: 0,
  },

});

module.exports = mongoose.model("milk", milkSchema);