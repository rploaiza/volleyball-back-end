import { Document } from "mongoose";
import { TeamBuilder } from "../models/builders/team.builder";
import { Team } from "../models/team.model";

export class ConverterDocumentsToModelsService {
    constructor() {
    }
    static toTeam(document: Document): Team {
        return new TeamBuilder(document.get("name")).setId(document.get("_id")).setCode(document.get("code")).setScore(document.get("score")).build();
    }
    static toArrayTeams(documents: Document[]): Team[] {
        const teams: Team[] = [];
        for (let i = 0; i < documents.length; i++) {
            teams.push(ConverterDocumentsToModelsService.toTeam(documents[i]));
        }
        return teams;
    }
}
