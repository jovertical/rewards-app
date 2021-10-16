import { FastifyInstance, FastifyRegisterOptions } from 'fastify';
import S from 'fluent-json-schema';
import bcrypt from 'bcrypt';
import User from '../models/User';
import { createAuthToken } from '../helpers';

interface LoginType {
  email: string;
  password: string;
}

interface RegisterType {
  name: string;
  email: string;
  password: string;
}

export default (
  app: FastifyInstance,
  options: FastifyRegisterOptions<Object>,
  done: Function
) => {
  app.post<{ Body: RegisterType }>(
    '/api/auth/register',
    {
      schema: {
        body: S.object()
          .required(['name', 'email', 'password'])
          .prop('name', S.string())
          .prop('email', S.string().format('email'))
          .prop('password', S.string().minLength(8)),
      },
    },
    async function (request, reply) {
      let user = await User.findOne({ email: request.body.email });

      if (user) {
        return reply.code(422).send({
          message: 'User with the same email address already exists',
        });
      }

      let newUser = await User.create(request.body);

      return reply.send({
        data: newUser,
      });
    }
  );

  app.post<{ Body: LoginType }>(
    '/api/auth/login',
    {
      schema: {
        body: S.object()
          .required(['email', 'password'])
          .prop('email', S.string())
          .prop('password', S.string()),
      },
    },
    async function (request, reply) {
      let user = await User.findOne({ email: request.body.email }).select(
        '+password'
      );

      if (!user) {
        return reply.code(404).send({
          message: 'User not found',
        });
      }

      if (!bcrypt.compareSync(request.body.password, user.password)) {
        return reply.code(422).send({
          message: 'Invalid login credentials',
        });
      }

      return reply.send({
        data: {
          token: createAuthToken({
            userId: user._id,
          }),
        },
      });
    }
  );

  app.post('/api/auth/logout', async function (request, reply) {
    return reply.send('Ok');
  });

  done();
};
