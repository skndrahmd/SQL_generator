import express from "express";
import cors from 'cors';
import generate from "./generate.js";

const app = express();
app.use(cors({origin:""}));
const port = process.env.PORT || 3005;
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello from the server side")
})

app.post('/generate', async (req, res) => {
    const queryDescription = req.body.queryDescription;
    try {
        const sqlQuery = await generate(queryDescription)
        res.json({response: sqlQuery})
    }
    catch (error) {
            console.error(error)
            res.status(500).send("internal server error")
    }

})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})