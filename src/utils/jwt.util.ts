import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  id: number,
  username: string,
};

function createToken(payload: TokenPayload): string {
  const token = jwt.sign(payload, secret);
  return token;
}

function getPayload(token: string): TokenPayload { 
  /* Ao utilizar Type Assertion para `TokenPayload`, garante-se que 
  a função `jwt.verify` sempre retornará o `id` e o `username` */
  const data = jwt.verify(token, secret) as TokenPayload;
  return data; 
}

export default {
  createToken,
  getPayload,
};