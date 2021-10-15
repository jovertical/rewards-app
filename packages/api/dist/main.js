"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const fastify_cors_1 = require("fastify-cors");
let server = (0, fastify_1.default)();
server.register(fastify_cors_1.default, {
    origin: '*',
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
            description: 'Win a front court seat to watch the Los Angeles Lakers live!',
            stock: 1,
        },
    ]);
});
server.listen(8080, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
