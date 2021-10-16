import { FastifyInstance, FastifyReply } from 'fastify';
import multer from 'fastify-multer';
import Prize from './models/Prize';

interface PrizeType {
  name: string;
  description: string;
  stocks?: number;
  image_url?: string; // TODO: this must be a file...
}

export default (app: FastifyInstance) => {
  let upload = multer({ dest: 'uploads' });

  app.get('/', async function (request, reply): Promise<FastifyReply> {
    return reply.send('ResMan Rewards API');
  });

  // TODO: Require authentication...
  app.get(
    '/api/prizes',
    async function (request, reply): Promise<FastifyReply> {
      let prizes = await Prize.find();

      return reply.header('Content-Type', 'application/json').send(prizes);
    }
  );

  // TODO: Require authentication...
  app.get<{ Params: { id: string } }>(
    '/api/prizes/:id',
    async function (request, reply): Promise<FastifyReply> {
      let prize = await Prize.findOne({ _id: request.params.id });

      return reply.header('Content-Type', 'application/json').send(prize);
    }
  );

  // TODO: Require authentication...
  app.post<{ Body: PrizeType }>('/api/admin/prizes', {
    preHandler: upload.single('image'), // TODO: Process the uploaded file...
    handler: async function (request, reply): Promise<FastifyReply> {
      let prize = await Prize.create({
        name: request.body.name,
        description: request.body.description,
        stocks: request.body.stocks,
        imageUrl: request.body.image_url, // TODO: this must be generated from an uploaded file...
      });

      return reply.header('Content-Type', 'application/json').send(prize);
    },
  });
};
