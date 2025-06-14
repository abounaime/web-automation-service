import express,  { Response, Request } from "express";
const app = express();
app.use(express.json());

app.get('/health', (req : Request, res: Response) => {
  res.send({ status : 'ok'})
});

export default app;