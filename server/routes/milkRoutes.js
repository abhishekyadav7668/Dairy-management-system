const express = require("express");

const router = express.Router();

const Milk = require("../models/milk");


// ADD MILK ENTRY
router.post("/", async (req, res) => {

  try {

    const {
      customerId,
      morning,
      evening,
      pricePerLitre,
    } = req.body;

    const totalMilk =
      Number(morning) + Number(evening);

    const totalPrice =
      totalMilk * Number(pricePerLitre);

    const newMilk = new Milk({

      customerId,

      morning,

      evening,

      pricePerLitre,

      totalMilk,

      totalPrice,

    });

    await newMilk.save();

    res.status(201).json({
      message: "Milk Entry Added",
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});


// GET CUSTOMER MILK RECORDS
router.get("/:customerId", async (req, res) => {

  try {

    const milkRecords = await Milk.find({
      customerId: req.params.customerId,
    });

    res.json(milkRecords);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});


// DELETE MILK ENTRY
router.delete("/:id", async (req, res) => {

  try {

    await Milk.findByIdAndDelete(req.params.id);

    res.json({
      message: "Milk Entry Deleted",
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});


module.exports = router;