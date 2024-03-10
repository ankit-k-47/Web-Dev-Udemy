import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bd from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bd.urlencoded({extended:true}));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Success");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
