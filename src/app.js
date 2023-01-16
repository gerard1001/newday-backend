import express from "express";
import bodyparser from "body-parser";
import db from "../src/database/models";
import routes from "./routes";
import cors from "cors";

import formData from "express-form-data";

const port = process.env.PORT;
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(formData.parse());
app.use(formData.union());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/api/v2/", routes);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on: http://localhost:${port}`);
  });
});
