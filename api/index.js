const express = require("express");
const path = require("path");
var cors = require("cors");
const fs = require("fs");

const pathData = "../data.json";
const app = express();

var allowedOrigins = ["http://localhost:3000", "https://cantina-starwars.vercel.app/"];
app.use(
    cors({
        origin: function (origin, callback) {
            // allow requests with no origin
            // (like mobile apps or curl requests)
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg = "The CORS policy for this site does not " + "allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
    })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

const randomId = function (length = 6) {
    return Math.random()
        .toString(36)
        .substring(2, length + 2);
};

// api/recipes
app.get("/api/recipes", (req, res) => {
    const { recipes } = require(pathData);
    return res.json(recipes);
});

app.post("/api/recipes", (req, res) => {
    const fileName = pathData;
    let data = require(pathData);
    const new_id = randomId(18);
    if (data.recipes.length >= 30) return res.status(500).send({ error: "Limite de recettes atteinte" });
    data.recipes.push({ ...req.body, id: new_id });
    fs.writeFile(fileName, JSON.stringify(data), function writeJSON(err) {
        if (err) return console.log(err);
    });
    return req.body ? res.json({ ...req.body, id: new_id }) : res.send(false);
});

// api/recipe/:id

app.get("/api/recipe/:id", (req, res) => {
    const { recipes } = require(pathData);
    const id = req.params.id;
    const data = recipes.find((e) => e.id == id);
    if (!data) return res.status(500).send({ error: "La recette n'existe pas" });

    return data ? res.json(data) : res.send(false);
});

app.delete("/api/recipe/:id", (req, res) => {
    const fileName = pathData;
    let data = require(pathData);
    const id = req.params.id;
    const index = data.recipes.findIndex((e) => e.id == id);
    if (index === -1) return res.status(500).send({ error: "La recette n'existe pas" });
    data.recipes = data.recipes.filter((e) => e?.id != id);
    fs.writeFile(fileName, JSON.stringify(data), function writeJSON(err) {
        if (err) return console.log(err);
    });
    return id ? res.json(id) : res.send(false);
});

app.put("/api/recipe/:id", (req, res) => {
    const fileName = pathData;
    let data = require(pathData);
    const id = req.params.id;
    const index = data.recipes.findIndex((e) => e.id == id);
    if (index === -1) return res.status(500).send({ error: "La recette n'existe pas" });
    data.recipes[index] = req.body;
    fs.writeFile(fileName, JSON.stringify(data), function writeJSON(err) {
        if (err) return console.log(err);
    });
    return id && req.body ? res.json(req.body) : res.send(false);
});

app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});
module.exports = app;
