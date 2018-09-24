import fs from "fs";
import { MONGODB_URI } from "../utils/secrets";
import logger from "../utils/logger";

export class DbService {
    private mongoose: any;
    private yaml: any;
    private dookie: any;

    constructor() {
        this.yaml = require("js-yaml");
        this.dookie = require("dookie");
        this.mongoose = require("mongoose");
    }

    async seed(): Promise<boolean> {
        let success = false;
        const contents = fs.readFileSync("./src/config/test.yml", "utf8");
        const parsed = this.yaml.safeLoad(contents);
        // const backupDb = JSON.parse(fs.readFileSync("../config/backupDb.json", "utf8"));
        await this.dookie.push(MONGODB_URI, parsed)
            .then(() => {
                logger.info("DB poblada.");
                success = true;
            })
            .catch ( (err: any) => {
                logger.error("Error al poblar la DB (posiblemente ya este poblada). " + err);
            });
        return success;
     }
    async delete(): Promise<any> {
         const promise = await new Promise((resolve, reject) => {
            setTimeout(() => {
                this.mongoose.Promise = Promise;
                this.mongoose.connect(MONGODB_URI, {useMongoClient: true})
                    .then(() => { logger.info("  >Conexion establecida con mongoDB."); })
                    .catch( (err: any) => { logger.error("  >Error de conexion a la DB. (Posiblemente no tengas mongoDB lanzado en local)" + err); });
                this.mongoose.connection.on("open", () => {
                    this.mongoose.connection.db.dropDatabase()
                        .then(() => {
                            logger.info("DB borrada con exito.");
                            resolve(true);
                        })
                        .catch((err: any) => {
                            logger.error("Error al borrar DB. " + err);
                            resolve(false);
                        });
                });
            }, 100);
        });
        return promise;
    }
}
