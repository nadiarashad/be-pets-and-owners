const fs = require("fs");

const createPet = (ownerId, data, cb) => { };

const fetchPetById = (id, cb) => { };

const fetchPetsByOwnerId = (ownerId, cb) => {
  fetchAllPets((err, petArray) => {

    const findPets = petArray.filter(pet => pet.owner === ownerId);

    if (findPets.length === 0) {
      cb({ msg: 'Error' })
    }
    else {
      cb(null, findPets);
    }
  })
}

const fetchAllPets = cb => {
  fs.readdir("./data/pets", (err, pets) => {
    const petArray = [];
    if (err) cb(err);

    else {
      for (let i in pets) {
        fs.readFile(`./data/pets/${pets[i]}`, (err, pet) => {
          if (err) {
            cb(err)
            console.log(err)
          }
          else {
            const parsedPet = JSON.parse(pet);
            // console.log(parsedPet)
            petArray.push(parsedPet);
            if (petArray.length === pets.length) {
              cb(null, petArray);
            }
          }
        });
      }
    }
  });

}

const deletePetById = (id, cb) => { };

module.exports = {
  createPet,
  fetchPetById,
  fetchPetsByOwnerId,
  deletePetById
};
