const fs = require("fs");

const createOwner = (data, cb) => { };

const fetchAllOwners = cb => {
  fs.readdir("./data/owners", (err, owners) => {
    const ownerArray = [];
    if (err) cb(err);
    else {
      for (let i in owners) {
        fs.readFile(`./data/owners/${owners[i]}`, "utf8", (err, owner) => {
          const parsedOwner = JSON.parse(owner);
          ownerArray.push(parsedOwner);
          if (ownerArray.length === owners.length) {
            cb(null, ownerArray);
          }
        });
      }
    }
  });
};

const fetchOwnerById = (id, cb) => {
  fetchAllOwners((err, ownerArray) => {

    const requestedOwner = ownerArray.find(owner => owner.id === id)
    cb(null, requestedOwner)
  })
};

const updateOwner = (id, data, cb) => { };

const deleteOwnerById = (id, cb) => { };

module.exports = {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById
};
