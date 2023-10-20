import express from "express";
import { Router } from "express";
import { model, connect } from "mongoose";
import { Cachorro } from "./models/cachorro.model";
import { Gato } from "./models/gato.model";

import animaisRoute from "./routes/animais.route";
import gatoRoute from "./routes/gatos.route";
import cachorrosRoute from "./routes/cachorro.route";

let cachorros: Cachorro[] = [];
let gatos: Gato[] = [];

const app = express();
const route = Router();

app.use(express.json());

(async function () {
  await connect(
    "mongodb+srv://italosiqueira:Wp4GjKZGP0toovrC@custumer-0.hahdytj.mongodb.net/animais?retryWrites=true&w=majority"
  );
  console.log("mongodb connected");
})();

app.use("/animais/", animaisRoute);
app.use("/animais/", cachorrosRoute);
app.use("/animais/", gatoRoute);
app.use(route);

app.listen(3333, () => "server running on port 3333");
