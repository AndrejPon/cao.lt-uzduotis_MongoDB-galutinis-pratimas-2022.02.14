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

async function getOrderedUsersFromDb(order) {
  try {
    await dbClient.connect();
    const dataFromDb = await dbClient
      .db('caoMongoDb')
      .collection('users')
      .aggregate([{ $match: {} }, { $sort: { name: -1 } }])
      .toArray();
    await dbClient.close();

    return dataFromDb;
  } catch (error) {
    console.warn('getOrderedUsersFromDb function error', error);
    return false;
  }
}

async function addUser(newUserFromUser) {
  try {
    await dbClient.connect();
    const createResult = await dbClient
      .db('caoMongoDb')
      .collection('users')
      .insertOne(newUserFromUser);
    await dbClient.close();
    return createResult;
  } catch (error) {
    console.warn('error in addUser', error);
    return false;
  }
}

module.exports = { getAllUsersFromDb, addUser, getOrderedUsersFromDb };
