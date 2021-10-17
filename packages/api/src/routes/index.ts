import { FastifyInstance } from 'fastify';
import multer from 'fastify-multer';
import authenticateMiddleware from '../middleware/authenticate.middleware';
import Prize from '../models/Prize';
import authRoutes from './auth';

interface PrizeType {
  name: string;
  description: string;
  stock?: number;
  image_url?: string; // TODO: this must be a file...
}

export default (app: FastifyInstance): void => {
  let upload = multer({ dest: 'uploads' });

  app.get('/', async function (request, reply) {
    return reply.send('ResMan Rewards API');
  });

  app.get(
    '/api/me',
    {
      preHandler: authenticateMiddleware,
    },
    async function (request, reply) {
      return reply.send({
        // @ts-ignore
        data: request.user,
      });
    }
  );

  app.get<{ Params: { id: string } }>(
    '/api/prizes',
    async function (request, reply) {
      let prizes = await Prize.find();

      return reply.header('Content-Type', 'application/json').send({
        data: prizes,
      });
    }
  );

  app.get<{ Params: { id: string } }>(
    '/api/prizes/:id',
    {
      preHandler: authenticateMiddleware,
    },
    async function (request, reply) {
      let prize = await Prize.findOne({ _id: request.params.id });

      return reply.header('Content-Type', 'application/json').send({
        data: Object.assign(prize._doc, {
          // @ts-ignore
          redeemed: request.user.hasRedeemedPrize(prize._id.toString()),
        }),
      });
    }
  );

  app.post<{ Params: { id: string } }>(
    '/api/prizes/:id/redeem',
    {
      preHandler: authenticateMiddleware,
    },
    async function (request, reply) {
      let prize = await Prize.findOne({ _id: request.params.id });

      // @ts-ignore
      let user = await request.user.reload();

      if (!prize) {
        return reply.code(404).send({ message: 'Prize not found' });
      }

      if (user.hasRedeemedPrize(prize._id.toString())) {
        return reply
          .code(422)
          .send({ message: 'You can only redeem a prize once!' });
      }

      if (prize.stock === 0) {
        return reply.code(422).send({ message: 'Prize run out of stock!' });
      }

      await prize.update({
        $inc: {
          stock: -1,
        },
      });

      // @ts-ignore
      await request.user.update({
        $push: {
          redeemed_prizes: {
            prize: prize._id,
          },
        },
      });

      let newPrize = await prize.reload();

      return reply.header('Content-Type', 'application/json').send({
        data: Object.assign(newPrize._doc, {
          // @ts-ignore
          redeemed: (await request.user.reload()).hasRedeemedPrize(
            prize._id.toString()
          ),
        }),
      });
    }
  );

  // TODO: Require authentication && access control...
  app.post<{ Body: PrizeType }>('/api/admin/prizes', {
    preHandler: upload.single('image'), // TODO: Process the uploaded file...
    handler: async function (request, reply) {
      let prize = await Prize.create({
        name: request.body.name,
        description: request.body.description,
        stock: request.body.stock,
        image_url: request.body.image_url, // TODO: this must be generated from an uploaded file...
      });

      return reply.header('Content-Type', 'application/json').send(prize);
    },
  });

  app.register(authRoutes);
};
