import { sign, verify } from 'jsonwebtoken';

const createToken = (data: any) => {
  return sign(data, process.env.JWT_SECRET_KEY);
};

const verifyToken = (token: string) => {
  return verify(token, process.env.JWT_SECRET_KEY);
};


export { createToken, verifyToken, };
