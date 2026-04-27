"use strict";
const { createServer } = require("http");

const data = JSON.stringify([
  {
    id: "A1",
    name: "Extracteur V-1",
    rrp: "4500.00",
    info: "Unité de récupération de débris en milieu hostile.",
  },
  {
    id: "A2",
    name: "Intercepteur Aeon",
    rrp: "12500.00",
    info: "Propulsion ionique optimisée pour le vol atmosphérique.",
  },
  {
    id: "B1",
    name: "Module C-22",
    rrp: "890.00",
    info: "Transport individuel compact à lévitation magnétique.",
  },
]);

const server = createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.end(data);
});

server.listen(3000);
