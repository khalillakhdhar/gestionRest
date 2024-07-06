const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;
app.use(bodyParser.json());
// Connexion à MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/gestion_rappels_contacts", {
  //useNewUrlParser: true,
 //useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erreur de connexion MongoDB:"));
db.once("open", () => {
  console.log("Connecté à MongoDB");
});
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
