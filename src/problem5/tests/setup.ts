import mongoose from "mongoose";

beforeAll(async () => {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/test_db";

  if (!uri) {
    throw new Error("MONGO_URI is missing");
  }

  await mongoose.connect(uri);
}, 30000);

afterEach(async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.connection.close();
});