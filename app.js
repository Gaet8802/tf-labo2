const express = require("express");
const cors = require("cors");

require("dotenv").config();

const homeRouter = require("./routes/home-router");

// Configuration des variables
const PORT = process.env.PORT || 8080;

// Génération du server web
const app = express();

app.use(cors());

app.use(express.json());

app.use(homeRouter)





app.listen(PORT, () => console.log(`Server up on port ${PORT}`));