import express from "express";
import { Response } from "express";
import { request } from "express";
const app = express();
app.use(express.json());

app.get('/health', (req : request, res: Response) => {
  res.send({ status : 'ok'})
});

export default app;