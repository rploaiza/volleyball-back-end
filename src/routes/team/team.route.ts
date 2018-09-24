import { TeamController } from "../../controllers/team.controller";
import express from "express";

const teamRoutes = express.Router();
const teamController: TeamController = new TeamController();
const CODE = "/:code";


teamRoutes.post("", (req, res) => {
    teamController.create(req, res);
});

teamRoutes.get("", (req, res) => {
    teamController.findAll(req, res);
});

teamRoutes.get(CODE, (req, res) => {
    teamController.findByCode(req, res);
});

teamRoutes.put(CODE, (req, res) => {
    teamController.update(req, res);
});

export default teamRoutes;
