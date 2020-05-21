const db= require('../data/dbConfig.js')
module.exports={
    addDog,

}

function addDog(dog){
    return db("dogs").insert(dog)
    .then(id =>{
        return db("dogs").where("dogs.id", id[0])
    })
}