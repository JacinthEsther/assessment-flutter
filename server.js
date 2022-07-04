const express = require('express')
const app = express()
const router = express.Router()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use('/', router)

const transaction = require('./transaction')

router.get('/', (req, res)=>{
    res.send("Running")
})

router.post("/split-payments/compute", (req, res)=>{

    const {ID, Amount, SplitInfo} = req.body
    const result = transaction({ID, Amount, SplitInfo})
    res.status(200).send(result)
})


app.listen(process.env.PORT || 4000, ()=>{
    console.log('Server listening in on port 4000...')
})