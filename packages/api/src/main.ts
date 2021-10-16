import fastify, { FastifyInstance } from 'fastify';
import bootstrap from './bootstrap';

let server = fastify();

bootstrap(server).then((app: FastifyInstance) => {
  app.listen(process.env.PORT || 8080, '0.0.0.0', (error, address): void => {
    if (error) {
      console.error(error);
      process.exit(1);
    }

    console.log(`Server listening at ${address}`);
  });
});
