const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
connectDB();


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contact", require("./routes/contactroutes"));
app.use("/api/admin", require("./routes/adminroutes"));
app.use("/api/projects", require("./routes/projectroutes"));





app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on port", PORT));
