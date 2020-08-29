const express = require("express");
const { check, validationResult } = require("express-validator");

const config = require("config");
// model
const User = require("../../models/User");
const Product = require("../../models/Product");
// auth middlware

const auth = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin");

const multer = require("multer");
const { Router } = require("express");

const router = express.Router();

// where to upload and storage

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" || ext !== ".png") {
      return cb(res.status(400).end("only jpg, png are allowed"), false);
    }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single("file");

// @router POST /api/product
// @desc  upload product image
// @access private

router.post("/uploadImage", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

// @router POST /api/product
// @desc  upload product
// @access private

router.post("/uploadProduct", async (req, res) => {
  const { writer, title, description, price, continent, images } = req.body;

  try {
    const product = new Product({
      writer,
      title,
      description,
      price,
      continent,
      images,
    });

    await product.save();

    return res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("SERVER ERROR");
  }
});

// @router GET /api/product
// @desc  get all products
// @access public

router.post("/", async (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);

  try {
    const products = await Product.find()
      .populate("user")
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit);

    return res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("SERVER ERROR");
  }
});

module.exports = router;
