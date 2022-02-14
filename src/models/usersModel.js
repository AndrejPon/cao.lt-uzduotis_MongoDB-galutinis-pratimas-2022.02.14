// const { ObjectId } = require('mongodb');
const dbClient = require('../db');

async function getAllUsersFromDb() {
  try {
    await dbClient.connect();
    const dataFromDb = await dbClient
      .db('caoMongoDb')
      .collection('users')
      .find()
      .toArray();
    await dbClient.close();

    return dataFromDb;
  } catch (error) {
    console.warn('getAllUsersFromDb function error', error);
    return false;
  }
}

module.exports = { getAllUsersFromDb };
