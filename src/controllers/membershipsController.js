const {
  getAllMembershipsFromDb,
  addMembership,
  deleteMembershipFromDb,
} = require('../models/membershipsModels');
const {
  successResponce,
  failResponce,
} = require('../routes/helpers/dbHelpers');

async function membershipsIndex(req, res) {
  const allMemberships = await getAllMembershipsFromDb();
  if (allMemberships === false) {
    failResponce(res);
    return;
  }
  successResponce(res, allMemberships);
}

async function createMembership(req, res) {
  const { body } = req;
  const createResult = await addMembership(body);
  if (createResult === false) {
    failResponce(res);
    return;
  }
  successResponce(res, createResult);
}

async function removeMembership(req, res) {
  const { id } = req.params;
  if (!id) {
    throw new Error('Nepaduotas id išstrynimui');
  }
  const removeResult = await deleteMembershipFromDb(id);
  if (removeResult === false) {
    failResponce(res);
    return;
  }
  if (removeResult.deletedCount !== 1) {
    failResponce(res, 'Ištrynti nepavyko', 400);
  }
  successResponce(res, removeResult);
}

module.exports = { membershipsIndex, createMembership, removeMembership };
