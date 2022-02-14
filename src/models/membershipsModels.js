const dbClient = require('../db');

async function getAllMembershipsFromDb() {
  try {
    await dbClient.connect();
    const dataFromDb = await dbClient
      .db('caoMongoDb')
      .collection('services')
      .find()
      .toArray();
    await dbClient.close();

    return dataFromDb;
  } catch (error) {
    console.warn('getAllMembershipsFromDb function error', error);
    return false;
  }
}

async function addMembership(newMembershipFromUser) {
  try {
    await dbClient.connect();
    const createResult = await dbClient
      .db('caoMongoDb')
      .collection('services')
      .insertOne(newMembershipFromUser);
    await dbClient.close();
    return createResult;
  } catch (error) {
    console.warn('error in addMembership', error);
    return false;
  }
}

module.exports = { getAllMembershipsFromDb, addMembership };
