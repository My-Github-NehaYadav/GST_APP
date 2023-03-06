const express = require('express');
const db = require('./DB/connection');
const app = express();
const {routes} = require("./routes/routes");
const pino = require('express-pino-logger')();
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerDocument = require('./config/swagger.json');
const PORT = process.env.PORT;

const specs = swaggerJsDoc(swaggerDocument);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(pino)
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use('/', routes)
app.listen(PORT, (err) => {
    if(err){console.log(`Error:- ${err}`)}
    else console.log(`Server is running on ${PORT}`)
})