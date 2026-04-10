const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const weController = require("./controllers/workexperiencesController");


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API-endpoints
app.get("/api/v1/workexperiences", weController.getAllWorkexperiences);
app.post("/api/v1/workexperiences", weController.createWorkexperience);
app.put("/api/v1/workexperiences/:id", weController.updateWorkexperience);
app.delete("/api/v1/workexperiences/:id", weController.deleteWorkexperience);

// Starta server
app.listen(process.env.PORT, () => {
    console.log("Servern är igång och lyssnar på inkommande förfrågningar")
});
