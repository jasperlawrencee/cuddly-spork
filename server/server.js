const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    //AMBOT UNSA ALGORITHM DIRI
    // res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.listen(5000, () => { console.log("Server started on port 5000") })