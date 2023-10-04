const express = require("express");
const PORT = 3000 || process.env.PORT;

const app = express();

app.use(express.json());

/* Routes */
app.get("/api/ping", (req, res) => {
  console.log(req.body);
  res.send({ message: "pong" });
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
