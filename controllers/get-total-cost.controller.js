const GST_Model = require("../model/gst-billing-app.shcema");

const GetTotalCost = async(req, res) => {
    try{
        let result = await GST_Model.find({},{_id: 0, __v: 0});
        if(!result){
            res.send({"message": "Products not Found!"})
        }else{
          let getTotalCost = 0;
          for(value of result){
            let getGSTCost = value.product_price*value.product_gst/100
            getTotalCost= getTotalCost+(getGSTCost+value.product_price);
          }
          res.send({"getTotalCost": getTotalCost})
        }
    }
    catch(err){
        console.log(err)
    }
}

module.exports = GetTotalCost;