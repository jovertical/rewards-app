import { FastifyInstance, FastifyReply } from 'fastify';
import Prize from './models/Prize';

export default (app: FastifyInstance) => {
  app.get('/', async function (request, reply): Promise<FastifyReply> {
    return reply.send('ResMan Rewards API');
  });

  app.get(
    '/api/prizes',
    async function (request, reply): Promise<FastifyReply> {
      let prizes = await Prize.find();

      return reply.header('Content-Type', 'application/json').send(prizes);
    }
  );
};
