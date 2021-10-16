import { FastifyInstance, FastifyReply } from 'fastify';
import { Collection } from 'mongodb';

export default (server: FastifyInstance) => {
  server.get('/', async function (request, reply): Promise<FastifyReply> {
    return reply.send('ResMan Rewards API');
  });

  server.get(
    '/api/prizes',
    async function (request, reply): Promise<FastifyReply> {
      // @ts-ignore
      let collection: Collection = this.mongo.db.collection('prizes');

      let prizes = await collection.find({}).toArray();

      return reply.header('Content-Type', 'application/json').send(prizes);
    }
  );
};
