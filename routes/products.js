const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product.js');


router.get('/', async (req, res, next) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(products);
    } catch (err) {
        next(err);
    }
});


router.post('/', async (req, res, next) => {
    try {
        const post = await Product.create(req.body);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const post = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const post = await Product.findByIdAndDelete(req.params.id);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
