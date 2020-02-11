const fs = require("fs");

const createPet = (ownerId, data, cb) => {};

const fetchPetById = (id, cb) => {};

const fetchPetsByOwnerId = cb => {
  //split

  fs.readdir("./data/pets", (err, pets) => {
    const petArray = [];
    if (err) cb(err);
    else {
      for (let i in pets) {
        fs.readFile(`./data/pets/${pets[i]}`, (err, pet) => {
          const parsedPet = JSON.parse(pet);
          petArray.push(parsedPet);
          if (petArray.length === pets.length) {
            cb(null, petArray);
          }
        });
      }
    }
  });

  // Get all pets and filter only pets belonging to owner
};

const deletePetById = (id, cb) => {};

module.exports = {
  createPet,
  fetchPetById,
  fetchPetsByOwnerId,
  deletePetById
};
