import request from "supertest";
import app from "../../src/app";
import { HttpStatusCode } from "../../src/utils/http-status-codes.enum";
import { TeamOutputDto } from "../../src/dtos/output/teamOutput.dto";
import { TeamInputDto } from "../../src/dtos/input/teamInput.dto";

const chai = require("chai");
const expect = chai.expect;

const END_POINT = "/team";
const ID = "/:id";


describe("POST " + END_POINT, () => {
    it(`expect return: ${HttpStatusCode.CREATED} + TeamOutputDto`, (done) => {
        return request(app).post(END_POINT)
            .send({"name": "BocaJuniorTest" })
            .end(  async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.CREATED);
                const teamOutputDto: TeamOutputDto = res.body;
                expect(teamOutputDto.name).to.equal("BocaJuniorTest");
                done();
            });
    });
});


describe("GET " + END_POINT, () => {
    it(`expect return: ${HttpStatusCode.OK} + TeamOutputDto[]`, (done) => {
        return request(app).get(END_POINT)
            .end( async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.OK);
                const teamOutputDtos: TeamOutputDto[] = res.body;
                expect(teamOutputDtos.length).to.be.above(2);
                done();
            });
    });
});
describe("GET " + END_POINT + ID, () => {
    it(`expect return: ${HttpStatusCode.OK} + TeamOutputDto`, (done) => {
        const teamCode = 2;
        return request(app).get(END_POINT + "/" + teamCode)
            .end( async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.OK);
                const teamOutputDto: TeamOutputDto = res.body;
                expect(teamOutputDto.code).to.equal(teamCode);
                done();
            });
    });
});

describe("PUT " + END_POINT + ID, () => {
    it(`expect return: ${HttpStatusCode.OK} + TeamOutputDto`, (done) => {
        const teamCode = "2";
        const teamInputDto: TeamInputDto = {score: 100};
        return request(app).put(END_POINT + "/" + teamCode)
            .send(teamInputDto)
            .end(async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.OK);
                const unitOutputDto: TeamOutputDto = res.body;
                expect(unitOutputDto.score).to.equal(teamInputDto.score);
                done();
            });
    });
});