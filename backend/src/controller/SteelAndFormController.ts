import { Request, Response } from 'express';
import * as SteelAndFormServices from '../services/SteelAndFormServices';
import * as CustomsTools from '../middleware/CustomsTools';

export const getSteelAndFormList = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    
    const result = await SteelAndFormServices.getSteelAndFormList(req.body);
    const status = CustomsTools.CodeStatus(1, 'Success', result)
    res.json(status);
  } catch (err) {
    console.log(err.message);
    res.statusCode = 400;
    res.json(`Bad Request:${err.message}`);
  }
};

export const addSteelAndFormList = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const result = await SteelAndFormServices.addSteelAndFormList(req.body);
    const status = CustomsTools.CodeStatus(1, 'Success', result)
    res.json(status);
  } catch (err) {
    console.log(err.message);
    res.statusCode = 400;
    res.json(`Bad Request:${err.message}`);
  }
};

export const delSteelAndFormList = async (req: Request, res: Response) => {
  try {
    const result = await SteelAndFormServices.delSteelAndFormList(req.body);
    const status = CustomsTools.CodeStatus(1, 'Success', result)
    res.json(status);
  } catch (err) {
    console.log(err.message);
    res.statusCode = 400;
    res.json(`Bad Request:${err.message}`);
  }
};
