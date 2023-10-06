const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
//middleware


app.get('/', (req,res) => {
    res.send("This is Batman's diary, do NOT read or feel my wrath.")
})

module.exports = app;