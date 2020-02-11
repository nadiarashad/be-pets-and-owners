const fs = require("fs");

const createPet = (ownerId, data, cb) => {};

const fetchPetById = (id, cb) => {};

const fetchPetsByOwnerId = (ownerId, cb) => {
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
            const findPets = petArray.filter(pet => pet.owner === ownerId);
            console.log(findPets);
            cb(null, findPets);
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
