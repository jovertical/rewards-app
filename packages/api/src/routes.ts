import { FastifyInstance, FastifyReply } from 'fastify';
import Prize from './models/Prize';

interface PrizeType {
  name: string;
  description: string;
  stocks?: number;
  imageUrl?: string; // TODO: this must be a file...
}

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

  app.post<{ Body: PrizeType }>('/api/admin/prizes', {
    handler: async function (request, reply): Promise<FastifyReply> {
      let prize = await Prize.create({
        name: request.body.name,
        description: request.body.description,
        stocks: request.body.stocks,
        imageUrl: request.body.imageUrl, // TODO: this must be generated from an uploaded file...
      });

      return reply.header('Content-Type', 'application/json').send(prize);
    },
  });
};
