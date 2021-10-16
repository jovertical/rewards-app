import { FastifyInstance } from 'fastify';
import bootstrap from './bootstrap';

bootstrap().then((server: FastifyInstance) => {
  server.listen(process.env.PORT || 8080, '0.0.0.0', (error, address): void => {
    if (error) {
      console.error(error);
      process.exit(1);
    }

    console.log(`Server listening at ${address}! 🚀🚀🚀 `);
  });
});
