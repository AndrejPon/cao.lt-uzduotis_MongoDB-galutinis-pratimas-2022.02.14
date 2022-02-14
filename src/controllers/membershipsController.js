const {
  getAllMembershipsFromDb,
  addMembership,
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
  successResponce(res, 'createResult');
}

module.exports = { membershipsIndex, createMembership };
