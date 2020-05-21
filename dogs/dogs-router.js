const router = require('express').Router();
const db = require('./dog-model.js')

router.post("/", (req, res) => {
    db.addDog(req.body)
        .then(dog => {
            res.status(201).json({
                message: "Dog added succesfully",
                data: dog
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Could not add dog" })
        })
})


module.exports = router;
