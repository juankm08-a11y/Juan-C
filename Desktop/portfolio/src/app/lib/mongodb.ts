import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) {
  throw new Error("Error: MONGODB_URI no definido");
}

interface Cache {
  conn: mongoose.Connection | null;
  promise: Promise<typeof mongoose> | null;
}

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace NodeJS {
    interface Global {
      _mongooseCache?: Cache;
    }
  }
}
/* eslint-enable @typescript-eslint/no-namespace */

const globalNode: NodeJS.Global = global as NodeJS.Global;
const cache: Cache = globalNode._mongooseCache || { conn: null, promise: null };

export async function connectToDB(): Promise<mongoose.Connection> {
  if (cache.conn) return cache.conn;

  if (!cache.promise) {
    cache.promise = mongoose.connect(MONGODB_URI, {
      dbName: "Porfolio",
      bufferCommands: false,
    });
  }

  const mongooseObj = await cache.promise;
  cache.conn = mongooseObj.connection;
  globalNode._mongooseCache = cache;

  return cache.conn;
}
