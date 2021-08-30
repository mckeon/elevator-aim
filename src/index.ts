import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send(`what's up?`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}` ));
