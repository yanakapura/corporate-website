const fs = require("fs");
const util = require("util");
const { MongoClient } = require('mongodb');

const readFileContent = util.promisify(fs.readFile);
const writeFileContent = util.promisify(fs.writeFile);

// async function readData() {
//   const data = await readFileContent('projects.json', 'utf8');
//   return JSON.parse(data);
// }

// async function writeData(data) {
//   await writeFileContent('projects.json', JSON.stringify(data));
// }

async function connectDB() {
  const url = 'mongodb+srv://yanakapura:kaz2y5@cluster0.yjsqqvo.mongodb.net/?retryWrites=true&w=majority'
  const client = new MongoClient(url)
  await client.connect();

  const db = (await client).db('SMproject')
  const projectsCollection = db.collection('projects')
  return projectsCollection;
}
 
async function readData() {
  const url = 'mongodb+srv://yanakapura:kaz2y5@cluster0.yjsqqvo.mongodb.net/?retryWrites=true&w=majority'
  const client = new MongoClient(url)
  await client.connect();

  const db = (await client).db('SMproject')
  const projectsCollection = db.collection('projects')
  
  let projects = await projectsCollection.find()
  projects = await projects.toArray()
  return projects;
}

async function writeData(data) {
  await writeFileContent('projects.json', JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;
exports.connectDB = connectDB;