import express from 'express';
import createFootprintRouter from "./routes/footprint.route";
import createFoodPrintRouter from "./routes/foodprint.route";

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/footprint', createFootprintRouter);
app.use('/foodprint', createFoodPrintRouter);

app.listen(port, () => {
    console.log('Example app listening on port 3000!');
})