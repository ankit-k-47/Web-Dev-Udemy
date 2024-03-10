//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import ex from "express";
import bd from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
//import bd from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = ex();
const port = 3000;
app.use(bd.urlencoded({extended:true}));
// app.get("/",(res,req)=>{
// res.sendFile(__dirname+"/public/index.html");
// });
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
app.post("/check", (req, res) => {
    console.log(req.body);
    if(req.body["password"]==="ILovePro")
    res.sendFile(__dirname+"/public/secret.html");
    else
    res.sendFile(__dirname + "/public/index.html");
  });
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });