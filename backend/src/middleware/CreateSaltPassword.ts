import { Request, Response, NextFunction } from 'express';
import { createHmac } from 'crypto';

const CreateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const salt_password = 'meo' + data.Password + 'wen';
    const hash = createHmac('sha256', salt_password)
      .update('I love cupcakes')
      .digest('hex');
    data.Password = hash;

    next();
  } catch (err) {
    return err;
  }
};

export default CreateToken;
