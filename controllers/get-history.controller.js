const GST_Model = require("../model/gst-billing-app.shcema");

const GetBillHistory = async(req, res) => {
    try{
        let {date_range} = req.params;
        let result = await GST_Model.find({addedAt: { $lte: new Date(date_range)}}, {_id: 0, __v: 0});
        if(result.length == 0 || result == null) res.send({"message": "No history by given date range!"})
        else res.send(result)
    }
    catch(err){
        console.log(err);
    }
}

module.exports = GetBillHistory;