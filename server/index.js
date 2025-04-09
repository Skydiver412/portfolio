const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

app.post("/api/contact", (req, res) => {
  console.log("Contact form submitted:", req.body);
  res.status(200).json({ message: "Form recieved" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
