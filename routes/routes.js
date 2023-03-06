const signup = require("../controllers/signup.controller");
const login = require("../controllers/login.controller");
const addProduct = require("../controllers/add-product.controller");
const search = require("../controllers/search-product.controller");
const getTotalCost = require("../controllers/get-total-cost.controller");
const getBillHistory = require("../controllers/get-history.controller");
const express = require("express");
const routes = express();

routes.post("/signup", signup);
routes.post("/login", login);
routes.post("/addproduct", addProduct);
routes.get("/searchproduct", search);
routes.get("/getTotalCost", getTotalCost);
routes.post("/getBillHistory/:date_range", getBillHistory);

module.exports = {routes}