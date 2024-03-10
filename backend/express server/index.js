import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(path.join(__dirname, 'express server')));

app.get("/", (req, res) => {
    res.send("Hello humans");
    console.log(req.headers);
});

app.get("/fu", (req, res) => {
    res.send("Hello dusfus");
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'express server', 'index.html'));
});

app.post("/about", (req, res) => {
    res.send("<h1>Press A Key to </h1>");
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
