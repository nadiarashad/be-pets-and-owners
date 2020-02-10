const {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById
} = require("../models/owners.js");

const allOwners = (request, response) => {
  fetchAllOwners((err, ownerArray) => {
    const body = { ownerArray };
    response.send(body);
  });
};

const ownersById = (request, response) => {
  fetchAllOwners((err, ownerArray) => {

    const requestedOwner = ownerArray.find(owner => owner.id === request.params.id)
    const body = { owner: requestedOwner }
    response.send(body)
  })
}


module.exports = { allOwners, ownersById };
