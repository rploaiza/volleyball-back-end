export class Team {
    private _id: string;
    private code: number;
    private name: string;
    private score: number;

    constructor(name: string) {
        this.name = name;
    }

    setId(id: string) {
        this._id = id;
    }
    setName(name: string) {
        this.name = name;
    }
    setCode(code: number) {
        this.code = code;
    }
    setScore(score: number) {
        this.score = score;
    }
    getId(): string {
        return this._id;
    }
    getName(): string {
        return this.name;
    }
    getCode(): number {
        return this.code;
    }
    getScore(): number {
        return this.score;
    }
}
