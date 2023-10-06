const express = require('express');
const cors = require('cors');
const entryRouter = require('./routers/entries');

const app = express();
app.use(cors());
app.use(express.json());
//middleware
app.use("/entries", entryRouter)

app.get('/', (req,res) => {
    res.send("This is Batman's diary, do NOT read or feel my wrath.")
})

module.exports = app;