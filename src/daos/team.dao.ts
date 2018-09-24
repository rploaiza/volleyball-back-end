import { Document } from "mongoose";
import logger from "../utils/logger";
import { ConverterDocumentsToModelsService } from "../services/converterDocumentsToModels.service";
import { TeamBuilder } from "../models/builders/team.builder";
import { Team } from "../models/team.model";
import TeamSchema from "../schemas/team.schema";

export class TeamDao {
    constructor() {
    }
    async create(name: string): Promise<Team> {
        const team: Team = new TeamBuilder(name).build();
        const teamSchema = new TeamSchema(team);
        return teamSchema.save()
            .then( (teamDocument: Document) => {
                const team: Team = teamDocument ? ConverterDocumentsToModelsService.toTeam(teamDocument) : undefined;
                return team;
            })
            .catch ( err => {
                logger.error(err);
                return undefined;
            });
    }
    async findById(id: string): Promise<Team> {
        return await TeamSchema.findById(id)
            .then( (teamDocument: Document) => {
                const team: Team = teamDocument ? ConverterDocumentsToModelsService.toTeam(teamDocument) : undefined;
                return team;
            })
            .catch ( err => {
                logger.error(err);
                return undefined;
            });
    }

    async findByCode(code: number): Promise<Team> {
        return await TeamSchema.findOne({ code: code })
            .then( (teamDocument: Document) => {
                const team: Team = teamDocument ? ConverterDocumentsToModelsService.toTeam(teamDocument) : undefined;
                return team;
            })
            .catch ( err => {
                logger.error(err);
                return undefined;
            });
    }
    async findAll(): Promise<Team[]> {
        return await TeamSchema.find({})
            .then( (teamsDocument: Document[]) => {
                const teams: Team[] = teamsDocument ? ConverterDocumentsToModelsService.toArrayTeams(teamsDocument) : undefined;
                return teams;
            })
            .catch ( err => {
                logger.error(err);
                return undefined;
            });
    }

    async update(id: string, score: number): Promise<Team> {
        return await TeamSchema.findOneAndUpdate({ _id: id }, { $set: {score: score }}, { new: true })
            .then(async () => {
                const team: Team = await this.findById(id);
                return team;
            })
            .catch ( err => {
                logger.error(err);
                return undefined;
            });
    }
}
