import { FastifyReply, FastifyRequest, preHandlerHookHandler } from 'fastify';
import JWT from 'jsonwebtoken';
import User from '../models/User';

export default function (
  request: FastifyRequest,
  reply: FastifyReply,
  next: Function
) {
  let token =
    (request.headers['x-access-token'] as string) ||
    request.headers.authorization;

  if (!token) {
    return reply.status(401).send({ message: 'Unauthorized' });
  }

  JWT.verify(token, process.env.JWT_SECRET || '', async (error, decoded) => {
    if (error) {
      console.log(`JWT: ${error.message}`);

      return reply.status(401).send({ message: 'Unauthorized', error });
    }

    // @ts-ignore
    request.user = await User.findOne({ _id: decoded.userId });

    next();
  });
}
