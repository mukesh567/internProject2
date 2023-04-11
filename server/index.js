
const express = require('express')
require('./db/conn');
const port = process.env.PORT || 5000;
const internRouter = require('./routers/internp')
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors());

app.use(internRouter);




app.listen(port, () => {
    console.log(`Run on port No. ${port}`);
})