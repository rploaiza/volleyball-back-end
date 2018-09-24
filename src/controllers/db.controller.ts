import { DbService } from "../services/db.service";
import { Request, Response } from "express";
import { HttpStatusCode } from "../utils/http-status-codes.enum";

export class DbController {
    private dbService: DbService;

    constructor() {
        this.dbService = new DbService();
    }

    async seed(req: Request, res: Response): Promise<any> {
        const success: boolean = await this.dbService.seed();
        success ? res.status(HttpStatusCode.OK).end() : res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
    }
    async delete(req: Request, res: Response): Promise<any> {
        const success: boolean = await this.dbService.delete();
        success ? res.status(HttpStatusCode.OK).end() : res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
    }
}

