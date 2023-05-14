import { json } from "react-router-dom";

// const FIREBASE_DOMAIN =
//   "https://react-http-ec598-default-rtdb.europe-west1.firebasedatabase.app/";

// export async function getAllProducts() {
//   const response = await fetch(`${FIREBASE_DOMAIN}/products.json`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not fetch products.");
//   }

//   const transformedData = [];

//   for (const key in data) {
//     const productObj = {
//       prodId: key,
//       ...data[key],
//     };

//     transformedData.push(productObj);
//   }

//   return transformedData;
// }

// export async function getSingleProduct(productId) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/products/${productId}.json`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not fetch product.");
//   }

//   return data;
// }

// export async function loadProjects() {
//   const client = MongoClient.connect('mongodb+srv://yanakapura:kaz2y5@cluster0.yjsqqvo.mongodb.net/?retryWrites=true&w=majority')

//   const db = (await client).db('SMproject')

//   const projectsCollection = db.collection('projects')

//   // console.log(await meetupCollection.find().toArray());
//   let projects = await projectsCollection.find()
//   projects = await projects.toArray()
// }

export async function loadProjects() {
  const response = await fetch("http://localhost:8080/projects");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch projects." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
  
    const transformedData = [];
    for (const [key, value] of Object.entries(resData.projects)) {
      transformedData.push({
        id: value.id,
        name: value.name,
        category: value.category,
        image: [...value.image],
      });
    }
    return transformedData;
  }
}

export async function loadProjectDetail(id) {
  const response = await fetch("http://localhost:8080/projects/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected project." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.project;
  }
}
