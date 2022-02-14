const { getAllUsersFromDb, addUser } = require('../models/usersModel');
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

async function createUser(req, res) {
  const { body } = req;
  const createResult = await addUser(body);
  if (createResult === false) {
    failResponce(res);
    return;
  }
  successResponce(res, createResult);
}

module.exports = { usersIndex, createUser };
