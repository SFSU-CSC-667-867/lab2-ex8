const express = require('express');

const app2 = express();

app2.get(`/world`, (req, res) => res.send(`skrt`));

app2.listen(3001, () => console.log(`second app running...`));
