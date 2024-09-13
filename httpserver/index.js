const express = require("express")
const zod = require("zod")
const app = express()
app.use(express.json())

app.listen(3000)

const schema = zod.array(zod.number())

app.get("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if (!response.success) {
        res.status(411).json({
            msg: "Invalid input"
        })
    } else {
        res.send({
            response
        })
    }
})