import dbRoutes from "./db/db.route";
import express from "express";
import teamRoutes from "./team/team.route";

const api = express.Router();

api.use("/db", dbRoutes);
api.use("/team", teamRoutes);

export default api;