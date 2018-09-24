import { TeamDao } from "../daos/team.dao";
import { Team } from "../models/team.model";

export class TeamResource {
    private teamDao: TeamDao;

    constructor() {
        this.teamDao = new TeamDao();
    }

    async create(name: string): Promise<Team> {
        return await this.teamDao.create(name);
    }
    async findAll(): Promise<Team[]> {
        return await this.teamDao.findAll();
    }
    async findByCode(code: number): Promise<Team> {
        return await this.teamDao.findByCode(code);
    }

    async findById(id: string): Promise<Team> {
        return await this.teamDao.findById(id);
    }
    async update(code: number, score: number): Promise<Team> {
        let team: Team = await this.findByCode(code);
        team = team ? await this.teamDao.update(team.getId(), score) : undefined;
        return team;
    }
}
