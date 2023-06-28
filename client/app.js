const express = require("express");
const { AllRoutes } = require("./routers/index.routes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(AllRoutes);
app.listen(4000, () => {
    console.log("Client runing over port 4000");
})