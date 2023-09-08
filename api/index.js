import express from "express";
import cors from "cors";

const app = express();

app.request(express.json());
app.request(cors());

app.listen(8800);