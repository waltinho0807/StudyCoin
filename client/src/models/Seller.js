const  mongoose = require('mongoose');

const { String, Number } = mongoose.Schema.Types;

const SellerSchema = new mongoose.Schema({
    
    hash: {
        type: String,
        
    }
},{
    timestamps: true
});

module.exports = mongoose.models.Seller || mongoose.model('Seller', SellerSchema);