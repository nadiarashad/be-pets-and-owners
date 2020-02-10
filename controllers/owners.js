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

module.exports = { allOwners };
