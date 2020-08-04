import 'dotenv/config';
import {ApolloServer} from 'apollo-server';
import mongoose from 'mongoose';// NoSql database

import schema from './schema';

const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === 'development'

})

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default server;