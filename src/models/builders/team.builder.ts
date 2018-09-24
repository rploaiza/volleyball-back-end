import { Team } from "../team.model";

export class TeamBuilder {
    private team: Team;

    constructor(name: string) {
        this.team = new Team(name);
    }

    setId(id: string): TeamBuilder {
        this.team.setId(id);
        return this;
    }

    setName(name: string): TeamBuilder {
        this.team.setName(name);
        return this;
    }

    setCode(code: number): TeamBuilder {
        this.team.setCode(code);
        return this;
    }

    setScore(score: number): TeamBuilder {
        this.team.setScore(score);
        return this;
    }

    build(): Team {
        return this.team;
    }
}