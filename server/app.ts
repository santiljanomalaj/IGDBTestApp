import express from "express"
const dotenv = require('dotenv')
const connectDatabase = require('./src/db')
const cors = require('cors');

dotenv.config()

connectDatabase()

const app = express()

// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(urlencodedParser);

app.use(cors({ origin: '*' }));
app.use(require('./src/routes'))

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server started at ${process.env.APP_URL}:${process.env.SERVER_PORT}`)
})

export default app