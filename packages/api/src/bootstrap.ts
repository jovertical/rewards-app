import { FastifyInstance } from 'fastify';
import fastifyCors from 'fastify-cors';
import fastifyEnv from 'fastify-env';
import fastifyMongodb from 'fastify-mongodb';
import loadRoutes from './routes';

export default async (server: FastifyInstance) => {
  await server.register(fastifyEnv, {
    dotenv: {
      path: `${__dirname}/../.env`,
      debug: true,
    },
    schema: {
      type: 'object',
      required: ['PORT', 'DATABASE_URL'],
      properties: {
        PORT: {
          type: 'string',
          default: 8080,
        },
        DATABASE_URL: {
          type: 'string',
          default: 'mongodb://localhost:27017/rewards_app',
        },
      },
    },
  });

  server.register(fastifyCors, {
    origin: '*', // TODO: Only accept official frontend origins
  });

  server.register(fastifyMongodb, {
    forceClose: true,
    // @ts-ignore
    url: server.config.DATABASE_URL,
  });

  loadRoutes(server);

  return server;
};
