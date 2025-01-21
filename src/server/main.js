import dotenv from "dotenv";
dotenv.config();
import express from "express";
import ViteExpress from "vite-express";
import routes from '../server/Routes/index.js';

const app = express();

// api/top-stories
app.use('/api', routes);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
