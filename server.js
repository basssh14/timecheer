const express = require("express")

const app = express()

app.get("/", (req, res) => res.send("API Running"))

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))
