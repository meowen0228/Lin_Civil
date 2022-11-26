import { Request, Response } from 'express';
import * as AccountServices from '../services/AccountServices';
import * as CustomsTools from '../middleware/CustomsTools';

export const login = async (req: Request, res: Response) => {
  try {
    const result = await AccountServices.login(req.body);
    const status = CustomsTools.CodeStatus(1, 'Success', result)
    res.json(status);
  } catch (err) {
    const status = CustomsTools.CodeStatus(0, 'User_Name or password')
    res.json(status);
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const result = await AccountServices.addUser(req.body);
    const status = CustomsTools.CodeStatus(1, 'Success', result)
    res.json(status);
  } catch (err) {
    res.statusCode = 400;
    res.json(`Bad Request:${err.message}`);
  }
};
