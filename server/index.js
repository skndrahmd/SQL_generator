import express from "express";
import cors from 'cors';

const app = express();
app.use(cors({origin:""}));
const port = process.env.PORT || 3005;


app.get('/', (req, res) => {
    res.send("Hello from the server side")
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})