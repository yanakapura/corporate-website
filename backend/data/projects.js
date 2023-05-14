// const { v4: generateId } = require('uuid');

const { NotFoundError } = new Error()
const { connectDB } = require('./util');

async function getAll() {

  const projectsCollection = await connectDB()
  let projects = await projectsCollection.find()
  projects = await projects.toArray()
  
  if (!projects) {
    throw new Error('Could not find any events.');
  }
  return projects;
}
// async function getAll() {

  
//   // const storedData = await readData();
  
//   if (!storedData) {
//     throw new Error('Could not find any events.');
//   }
//   return storedData;
// }

async function get(id) {

  const projectsCollection = await connectDB()
  const selectedProject = await projectsCollection.findOne({id: id})

  if (!selectedProject) {
    throw new Error('Could not find project for id ' + id);
  }

  return selectedProject;
}
// async function get(id) {
//   const storedData = await readData();
  
//   const project = storedData[id]

//   if (!project) {
//     throw new Error('Could not find project for id ' + id);
//   }

//   return project;
// }

// async function add(data) {
//   const storedData = await readData();
//   storedData.events.unshift({ ...data, id: generateId() });
//   await writeData(storedData);
// }

// async function replace(id, data) {
//   const storedData = await readData();
//   if (!storedData.events || storedData.events.length === 0) {
//     throw new NotFoundError('Could not find any events.');
//   }

//   const index = storedData.events.findIndex((ev) => ev.id === id);
//   if (index < 0) {
//     throw new NotFoundError('Could not find event for id ' + id);
//   }

//   storedData.events[index] = { ...data, id };

//   await writeData(storedData);
// }

// async function remove(id) {
//   const storedData = await readData();
//   const updatedData = storedData.events.filter((ev) => ev.id !== id);
//   await writeData({ ...storedData, events: updatedData });
// }

exports.getAll = getAll;
exports.get = get;
// exports.add = add;
// exports.replace = replace;
// exports.remove = remove;
