const {
  createPet,
  fetchPetById,
  fetchPetsByOwnerId,
  deletePetById
} = require("../models/pets.js");

const allOwnedPets = (req, res) => {
  // console.log(req.params);

  fetchPetsByOwnerId(req.params.owner, (err, findPets) => {
    // const findPets = petArray.filter(pet => pet.owner === req.params.owner);
    const body = { Pets: findPets };
    res.send(body);
  });
};

module.exports = { allOwnedPets };
