const fs = require("fs");

const createPet = (ownerId, data, cb) => { };

const fetchPetById = (id, cb) => { };

const fetchPetsByOwnerId = (ownerId, cb) => {
  //split

  fs.readdir('./data/pets', (err, pets) => {
    const petArray = [];
    if (err) cb(err);
    else {
      for (let i in pets) {
        fs.readFile(`./data/pets/${pets[i]}`, (err, pet) => {
          const parsedPet = JSON.parse(pet)

          if (pet.id === ownerId) { petArray.push(parsedPet) }
          console.log(petArray)
        })
      }
    }


  })

  // Get all pets and filter only pets belonging to owner
};

const deletePetById = (id, cb) => { };

module.exports = {
  createPet,
  fetchPetById,
  fetchPetsByOwnerId,
  deletePetById,
};
