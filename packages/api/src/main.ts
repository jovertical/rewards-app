import fastify from 'fastify';
import fastifyCors from 'fastify-cors';

let server = fastify();

server.register(fastifyCors, {
  origin: '*', // TODO: Only accept official frontend origins
});

server.get('/', async (request, reply) => {
  return reply.send('ResMan Rewards API');
});

server.get('/api/health', async (request, reply) => {
  return reply.send({ message: 'OK' });
});

server.get('/api/prices', async (request, reply) => {
  return reply.header('Content-Type', 'application/json').send([
    {
      id: 1,
      name: 'Win a Flyaway',
      description: 'All expense paid trip to the US',
      stock: 3,
    },

    {
      id: 2,
      name: 'Watch the NBA',
      description:
        'Win a front court seat to watch the Los Angeles Lakers live!',
      stock: 1,
    },
  ]);
});

server.listen(process.env.PORT || 8080, (error, address) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(`Server listening at ${address}`);
});
