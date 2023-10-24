import express from 'express';
import createFootprintRouter from "./routes/footprint.route";

const app = express();
const port = 3000;


app.use('/footprint', createFootprintRouter);

app.listen(port, () => {
    console.log('Example app listening on port 3000!');
})