const router = require('express').Router();
const db = require('./dog-model.js')

router.get("/", (req, res)=>{
    db.getDogs()
    .then(dogs=>{
        res.status(200).json({ data: dogs});
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({ message: "Could not get dogs"});
    })
})

router.post("/", (req, res) => {
    db.addDog(req.body)
        .then(dog => {
            res.status(201).json({
                message: "Dog added succesfully",
                data: dog
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Could not add dog" });
        })
})

router.delete("/:id", (req, res)=>{
    db.delDog(req.params.id)
    .then(numDel=>{
        if(numDel > 0){
            res.status(200).json({ message: `${numDel} dog deleted`})
        }else{
            res.status(500).json({ message: "Error while deleting dog" })
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({ message: "Cannot delete dog" })
    })
})


module.exports = router;
