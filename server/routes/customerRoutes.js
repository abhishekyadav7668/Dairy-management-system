import express from "express";
import Customer from "../models/customer.js";

const router = express.Router();


// GET ALL CUSTOMERS
router.get("/", async (req, res) => {
  try {

    const customers = await Customer.find();

    res.json(customers);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// GET SINGLE CUSTOMER
router.get("/:id", async (req, res) => {
  try {

    const customer = await Customer.findById(req.params.id);

    res.json(customer);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// ADD CUSTOMER
router.post("/", async (req, res) => {
  try {

    const newCustomer = new Customer({
      name: req.body.name,
      mobile: req.body.mobile,
      address: req.body.address,
      image: req.body.image,
      code: req.body.code,
      records: [],
    });

    await newCustomer.save();

    res.json(newCustomer);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

// DELETE CUSTOMER

router.delete("/:id", async (req, res) => {

  try {

    await Customer.findByIdAndDelete(req.params.id);

    res.json({
      message: "Customer deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// ADD RECORD
router.post("/:id/record", async (req, res) => {
  try {

    const customer = await Customer.findById(req.params.id);

    const morning = Number(req.body.morning || 0);
    const evening = Number(req.body.evening || 0);
    const price = Number(req.body.price || 0);

    const totalMilk = morning + evening;

    const totalPrice = totalMilk * price;

    const newRecord = {
      date: req.body.date,
      morning,
      evening,
      price,
      totalMilk,
      totalPrice,
    };

    customer.records.push(newRecord);

    await customer.save();

    res.json(customer);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// DELETE RECORD
router.delete("/:id/record/:index", async (req, res) => {
  try {

    const customer = await Customer.findById(req.params.id);

    customer.records.splice(req.params.index, 1);

    await customer.save();

    res.json(customer);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

export default router;