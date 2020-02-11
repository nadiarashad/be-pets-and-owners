const {
  createPet,
  fetchPetById,
  fetchPetsByOwnerId,
  deletePetById
} = require("../models/pets.js");

const allOwnedPets = (req, res, next) => {
  // console.log(req.params);

  fetchPetsByOwnerId(req.params.owner, (err, findPets) => {
    if (err) next(err)
    else {
      const body = { Pets: findPets };
      res.send(body);
    }
  });
};

module.exports = { allOwnedPets };
