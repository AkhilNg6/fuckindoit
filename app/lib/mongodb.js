import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI; // Reads from .env.local
const options = {};

let client;
let clientPromise;

if (!process.env.MONGO_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;