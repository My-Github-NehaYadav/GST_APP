const mongoose = require('mongoose');


const GST_Bill_Schema = new mongoose.Schema({
    product_code: {
        type: Number,
        required: true,
        unique: true
    },
    product_name: {
        type: String,
        required: true,
        unique: true
    },
    product_price: {
        type: Number,
        required: true
    },
    product_gst: {
        type: Number,
        required: true
    },
    addedAt: {
        type: Date
    }
})

module.exports = mongoose.model('gst-bill', GST_Bill_Schema);