import mongoose from "mongoose";

const AutoIncrement = require("mongoose-sequence")(mongoose);
const Team = new mongoose.Schema({
    code: { type: Number, required: false, unique: true },
    name: { type: String, required: true },
    score: { type: Number, required: false, default: "0"}
});
Team.plugin(AutoIncrement, {
    inc_field: "code",
    startAt: 3,
    incrementBy: 1
});
Team.plugin(require(`mongoose-autopopulate`));

const TeamSchema = mongoose.model("Team", Team);
export default TeamSchema;