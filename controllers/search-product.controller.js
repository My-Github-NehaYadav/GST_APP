const GST_Model = require("../model/gst-billing-app.shcema");

const search = async(req, res) => {
    try{
        let {product_code, product_name} = req.query;
        let result = await GST_Model.find({
            $or: [
                {product_code},
                {product_name}
            ]
        }, {_id: 0, __v: 0})
        if(result.length === 0 || result === 'undefind' || result === null){
            res.send({"message": "Not found product"})
        }
        else {
            res.send(result[0])
        }
    }
    catch(err){
        console.log(err)
    }
}

module.exports = search;