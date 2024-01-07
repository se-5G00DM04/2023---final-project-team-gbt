const express = require("express");
const router = express.Router();

let SHOPPING = [
  {
    name: "Apple",
    items: 5,
    id: 1,
  },
  {
    name: "Banana",
    items: 20,
    id: 2,
  },
  {
    name: "Orange",
    items: 25,
    id: 3,
  },
];

router.get("/", (req, res) => {
  res.send(SHOPPING);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const Shopping = SHOPPING.find((c) => c.id === id);
  if (!Shopping) {
    res.status(404).json({ message: "Not found" });
  }
  res.json(Shopping);
});

router.post("/", (req, res) => {
  const newShopping = req.body;
  if (!newShopping.name) {
    return res.status(400).json({ error: "Name is a required field." });
  }
  newShopping.id = SHOPPING.length + 1;
  newShopping.items = newShopping.items || 1;
  SHOPPING.push(newShopping);
  res.status(201).json(newShopping);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updatedShopping = req.body;

  const shoppingIndex = SHOPPING.findIndex((c) => c.id === id);
  if (shoppingIndex === -1) {
    return res.status(404).json({ message: "Not found" });
  }

  SHOPPING[shoppingIndex] = { ...SHOPPING[shoppingIndex], ...updatedShopping };
  res.json(SHOPPING[shoppingIndex]);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const shoppingIndex = SHOPPING.findIndex((c) => c.id === id);
  if (shoppingIndex === -1) {
    return res.status(404).json({ message: "Not found" });
  }
  SHOPPING = SHOPPING.filter((c) => c.id !== id);
  res.json({ message: "Shopping deleted" });
});

module.exports = router;
