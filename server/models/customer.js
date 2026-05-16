import mongoose from "mongoose";

const milkRecordSchema = new mongoose.Schema({
  date: String,
  morning: Number,
  evening: Number,
  totalMilk: Number,
  totalPrice: Number,
});

const customerSchema = new mongoose.Schema({
  image: String,
  name: String,
  code: Number,
  mobile: String,
  address: String,

  records: [milkRecordSchema],
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;