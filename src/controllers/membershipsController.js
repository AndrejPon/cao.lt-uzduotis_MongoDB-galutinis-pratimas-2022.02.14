const { getAllMembershipsFromDb } = require('../models/membershipsModels');
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

module.exports = { membershipsIndex };
