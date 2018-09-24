import { Request, Response } from "express";
import { HttpStatusCode } from "../utils/http-status-codes.enum";
import { Team } from "../models/team.model";
import { TeamResource } from "../resources/team.resource";
import { TeamOutputDto } from "../dtos/output/teamOutput.dto";
import { TeamInputDto } from "../dtos/input/teamInput.dto";
import { ConverterModelsToDtosService } from "../services/converterModelsToDtos.service";

export class TeamController {
    private teamResource: TeamResource;
    private converterModelsToDtosService: ConverterModelsToDtosService;

    constructor() {
        this.teamResource = new TeamResource();
        this.converterModelsToDtosService = new ConverterModelsToDtosService();
    }
    async create(req: Request, res: Response): Promise<any> {
        const team: Team = await this.teamResource.create(req.body.name);
        const teamOutputDto: TeamOutputDto = this.converterModelsToDtosService.toTeamOutputDto(team);
        team ? res.status(HttpStatusCode.CREATED).json(teamOutputDto) : res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
    }
    async findAll(req: Request, res: Response): Promise<any> {
        const teams: Team[] = await this.teamResource.findAll();
        const teamOutputDtos: TeamOutputDto[] = this.converterModelsToDtosService.toArrayTeamOutputDto(teams);
        teams ? res.status(HttpStatusCode.OK).json(teamOutputDtos) : res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
    }
    async findByCode(req: Request, res: Response): Promise<any> {
        const code: number = req.params.code;
        const team: Team = await this.teamResource.findByCode(code);
        const teamOutputDto: TeamOutputDto = this.converterModelsToDtosService.toTeamOutputDto(team);
        team ? res.status(HttpStatusCode.OK).json(teamOutputDto) : res.status(HttpStatusCode.NOT_FOUND).end();
    }
    async update(req: Request, res: Response) {
        const code: number = req.params.code;
        const teamInputDto: TeamInputDto = req.body;
        const team: Team = await this.teamResource.update(code, teamInputDto.score);
        const teamOutputDto: TeamOutputDto = this.converterModelsToDtosService.toTeamOutputDto(team);
        team ? res.status(HttpStatusCode.OK).json(teamOutputDto) : res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
    }
}
