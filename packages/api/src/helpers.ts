import JWT from 'jsonwebtoken';

interface AuthTokenPayload {
  userId: string;
}

export const createAuthToken = (payload: AuthTokenPayload): string => {
  let token = JWT.sign(payload, process.env.JWT_SECRET || '', {
    expiresIn: '15m',
  });

  return token;
};
