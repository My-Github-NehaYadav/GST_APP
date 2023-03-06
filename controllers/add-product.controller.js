const GST_Model = require("../model/gst-billing-app.shcema");

const addProduct = async (req, res) => {
    try{
        let {product_code, product_name} = req.body;
        let userRes = await GST_Model.findOne(
            {
                $or: [
                    {product_code},
                    {product_name}
                ]
            }
        )
        if(!userRes){
            let date = new Date()
            if(!req.body.addedAt){req.body.addedAt = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1}`}
            let newProduct = GST_Model(req.body);
            newProduct.save();
            res.send({"message": "new product added successfully."});
        }else{
            res.send({"message": "this product already added."});
        }
    }
    catch(err){
        console.log(err)
    }
}


module.exports = addProduct;