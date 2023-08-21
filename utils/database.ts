import { MongoClient } from "mongodb";

// Replace the uri string with your connection string.
const uri =
  process.env.NEXT_PUBLIC_MONGODB_URI || "mongodb://localhost:27017";

export const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
  }
  catch(error){
    console.log(error);
  }
}
run().catch(console.dir);