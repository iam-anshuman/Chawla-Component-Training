"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function connection() {
    return (0, mongoose_1.connect)("mongodb://localhost:27017/express-mongo").then(() => {
        console.log("Database connected");
    }).catch((err) => {
        console.log(err);
    });
}
exports.default = connection;
