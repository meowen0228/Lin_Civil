import { Request, Response } from 'express';
import * as AccountServices from '../services/AccountServices';
import * as CustomsTools from '../middleware/CustomsTools';

export const login = async (req: Request, res: Response) => {
  try {
    const result = await AccountServices.login(req.body);
    const status = CustomsTools.CodeStatus(1, 'Success', result)
    res.json(status);
  } catch (err) {
    const status = CustomsTools.CodeStatus(0, 'userName or password')
    console.log(err.message);
    res.json(status);
  }
};
