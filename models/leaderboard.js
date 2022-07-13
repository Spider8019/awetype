import mongoose from "mongoose"

const leaderSchema = new mongoose.Schema({
    ip: { type: "string", unique: true, required: true },
    name: { type: "string", default: "NA" },
    wpm: { type: Number, required: true },
    acc: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
})

module.exports = new mongoose.model("Leaders", leaderSchema)