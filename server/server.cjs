const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

/* Routes */
app.get("/api/ping", (req, res) => {
  console.log(req.body);
  res.send({ message: "pong" });
});

app.use(express.static("dist"));
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
