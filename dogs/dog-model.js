const db= require('../data/dbConfig.js')
module.exports={
    addDog,
    getDogs,
    delDog

}

function addDog(dog){
    return db("dogs").insert(dog)
    .then(id =>{
        return db("dogs").where("dogs.id", id[0])
    })
}

function getDogs(){
    return db("dogs")
}

function delDog(id){
    return db("dogs").where("dogs.id", id).del()
}