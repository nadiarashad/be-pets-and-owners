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

const ownersById = (req, res) => {

  fetchOwnerById(req.params.id, (err, requestedOwner) => {
    const body = { owner: requestedOwner }
    res.send(body)
  })
}


module.exports = { allOwners, ownersById };
