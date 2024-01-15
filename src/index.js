import express from "express";
import mongoose from "mongoose";
import { engine } from "express-handlebars";
import methodOverride from "method-override";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routers/index.js";
import { PORT, DATABASE_URl } from "./config.js";

const app = express();

// view engine (handlebars)
app.engine(
  "handlebars",
  engine({
    helpers: {
      increaseOne: (index) => index + 1,
      isEmpty: (list) => (Array.isArray(list) ? list.length === 0 : list === 0),
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", "./src/views");

// set static files
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "public")
  )
);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// routers
router(app);

// connect database
mongoose
  .connect(DATABASE_URl)
  .then(() => {
    console.log("connect successfully!!!!");
    app.listen(PORT, () =>
      console.log(`server is running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.log("something went wrong, cannot access database! ");
    console.log(err);
  });
