const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// MongoDB setup
const dbURI = "mongodb+srv://raa2205:raa2205@clusterwebdev.skt3q8d.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Define API routes
app.use("/api/notes", require("./routes/notes")); // route for notes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get("/", (req, res) => {
    res.send("Hello, this is the root route.");
  });
  