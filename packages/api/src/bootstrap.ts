import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import fastifyEnv from 'fastify-env';
import fastifyMongodb from 'fastify-mongodb';
import loadRoutes from './routes';

export default async () => {
  let app = fastify();

  await app.register(fastifyEnv, {
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

  app.register(fastifyCors, {
    origin: '*', // TODO: Only accept official frontend origins
  });

  app.register(fastifyMongodb, {
    forceClose: true,
    // @ts-ignore
    url: app.config.DATABASE_URL,
  });

  loadRoutes(app);

  return app;
};
