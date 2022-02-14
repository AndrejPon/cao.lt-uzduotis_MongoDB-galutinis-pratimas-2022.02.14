const { getAllUsersFromDb } = require('../models/usersModel');
const {
  successResponce,
  failResponce,
} = require('../routes/helpers/dbHelpers');

async function usersIndex(req, res) {
  const allUsers = await getAllUsersFromDb();
  if (allUsers === false) {
    failResponce(res);
    return;
  }
  successResponce(res, allUsers);
}

module.exports = { usersIndex };
