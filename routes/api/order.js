const express = require("express");
const { check, validationResult } = require("express-validator");

const config = require("config");
// model
const Order = require("../../models/Order");
// auth middlware

const auth = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin");

const { Router } = require("express");

const router = express.Router();

// @router GET /api/order
// @desc  get all orders
// @access private
router.get("/", (req, res) => {});

// @router GET /api/order
// @desc  get orders of a user
// @access private
router.get("/my", auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send("SERVER ERROR");
  }
});

// @router GET /api/order
// @desc  get a specific order
// @access private
// router.get("/waiting/:order", (req, res) => {});

// @router POST /api/order
// @desc  add an order
// @access private
router.post("/", async (req, res) => {
  const { user, orderItems, shipping, payment, totalPrice } = req.body;

  console.log(req.body);

  try {
    const order = new Order({
      user,
      orderItems,
      shipping,
      payment,
      totalPrice,
    });

    await order.save();

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send("SERVER ERROR");
  }
});

module.exports = router;
