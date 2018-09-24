import { TeamOutputDto } from "../dtos/output/teamOutput.dto";
import { Team } from "../models/team.model";

export class ConverterModelsToDtosService {
    wantMinimunDto: boolean;

    constructor() {
        this.wantMinimunDto = false;
    }

    toTeamOutputDto(team: Team): TeamOutputDto {
        let teamOutputDto: TeamOutputDto = undefined;
        if (team) {
            teamOutputDto = {
                code: team.getCode(),
                name: team.getName(),
                score: team.getScore()};
        }
        return teamOutputDto;
    }
    toArrayTeamOutputDto(teams: Team[]): TeamOutputDto[] {
        const teamOutputDtos: TeamOutputDto[] = [];
        if (teams.length > 0) {
            for (let i = 0 ; i < teams.length ; i++ ) {
                teamOutputDtos.push(this.toTeamOutputDto(teams[i]));
            }
        }
        return teamOutputDtos;
    }
}
