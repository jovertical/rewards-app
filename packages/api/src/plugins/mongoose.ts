import { FastifyInstance } from 'fastify';
import createPlugin from 'fastify-plugin';
import mongoose from 'mongoose';

interface ConnectionOptions {
  url: string;
  models: object;
}

let plugin = async (fastify: FastifyInstance, options: ConnectionOptions) => {
  try {
    mongoose.connection.on('connected', () => {
      fastify.log.info({ actor: 'MongoDB' }, 'connected');
    });

    mongoose.connection.on('disconnected', () => {
      fastify.log.error({ actor: 'MongoDB' }, 'disconnected');
    });

    await mongoose.connect(options.url);

    fastify.decorate('db', { models: options.models });
  } catch (error) {
    console.error(error);
  }
};

export default createPlugin(plugin);
