import { Request, Response } from 'express';
import * as CustomsTools from '../middleware/CustomsTools';
import * as CommonServices from '../services/CommonServices';

export const getAllDataList = async (req: Request, res: Response) => {
  try {
    const result = await CommonServices.getAllDataList(req.body);
    const status = CustomsTools.CodeStatus(1, 'Success', result)
    res.json(status);
  } catch (err) {
    const status = CustomsTools.CodeStatus(0, 'User_Name or password')
    res.json(status);
  }
};
