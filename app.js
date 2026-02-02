const express = require("express");
const app = express();

app.use(express.json());

let animals = [];
let fruits = [];

app.post("/drinks", (req, res) => {
  const drink = {
    id: drinks.length + 1,
    name: req.body.name
  };
  drinks.push(drink);
  res.status(201).json({
    message: "Drink created",
    data: drink
  });
});

app.get("/drinks", (req, res) => {
  res.json(drinks);
});

app.get("/drinks/:id", (req, res) => {
  const drink = drinks.find(d => d.id == req.params.id);
  res.json(drink || { error: "Drink not found" });
});

app.put("/drinks/:id", (req, res) => {
  const drink = drinks.find(d => d.id == req.params.id);
  if (!drink) return res.json({ error: "Drink not found" });

  drink.name = req.body.name;
  res.json({
    message: "Drink updated",
    data: drink
  });
});

app.delete("/drinks/:id", (req, res) => {
  drinks = drinks.filter(d => d.id != req.params.id);
  res.json({ message: "Drink deleted" });
});

app.post("/animals", (req, res) => {
  animals.push({
    id: animals.length + 1,
    name: req.body.name
  });
  res.json({ message: "Animal added" });
});

app.get("/animals", (req, res) => {
  res.json(animals);
});

app.post("/fruits", (req, res) => {
  fruits.push({
    id: fruits.length + 1,
    name: req.body.name
  });
  res.json({ message: "Fruit added" });
});

app.get("/fruits/search", (req, res) => {
  const name = req.query.name;
  const result = fruits.filter(f =>
    f.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(result);
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
