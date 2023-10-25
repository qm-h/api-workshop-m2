import express from 'express';
import createFootprintRouter from "./routes/footprint.route";
import createFoodPrintRouter from "./routes/foodprint.route";
import createOpenAIRouter from "./routes/openAI.route";

const app = express();
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/footprint', createFootprintRouter);
app.use('/api/foodprint', createFoodPrintRouter);
app.use('/openAI', createOpenAIRouter);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})