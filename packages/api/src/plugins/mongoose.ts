import { FastifyInstance } from 'fastify';
import createPlugin from 'fastify-plugin';
import mongoose from 'mongoose';

interface ConnectionOptions {
  url: string;
  models: object;
}

let reloadRecordPlugin = function reloadRecord(schema: mongoose.Schema) {
  schema.methods.reload = async function () {
    const record = await this.constructor.findById(this);
    Object.assign(this, record);
    return record;
  };
};

mongoose.plugin(reloadRecordPlugin, {});

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
