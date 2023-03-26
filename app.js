import express from 'express';
import cors from 'cors';

import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/tuiter');
const app = express();
app.use(express.json());
app.use(cors());

TuitsController(app);
HelloController(app);
UserController(app);
app.listen(4000);