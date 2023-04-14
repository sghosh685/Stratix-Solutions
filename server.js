const express = require('express');
const app = express();
const port = 8080;

app.use(express.static("public")); 

app.get("/", function (req, res) {
    res.status(200).send ('<h1>200 OK</h1>');
})

app.listen(port, () => console.log(`Listening on port: ${port}`));
