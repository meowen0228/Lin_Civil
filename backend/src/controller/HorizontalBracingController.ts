import { Request, Response } from 'express';
import * as HorizontalBracingServices from '../services/HorizontalBracingServices';
import * as CustomsTools from '../middleware/CustomsTools';

export const getHorizontalBracingList = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    
    const result = await HorizontalBracingServices.getHorizontalBracingList(req.body);
    const status = CustomsTools.CodeStatus(1, 'Success', result)
    res.json(status);
  } catch (err) {
    console.log(err.message);
    res.statusCode = 400;
    res.json(`Bad Request:${err.message}`);
  }
};

export const addHorizontalBracingList = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const result = await HorizontalBracingServices.addHorizontalBracingList(req.body);
    const status = CustomsTools.CodeStatus(1, 'Success', result)
    res.json(status);
  } catch (err) {
    console.log(err.message);
    res.statusCode = 400;
    res.json(`Bad Request:${err.message}`);
  }
};

export const delHorizontalBracingList = async (req: Request, res: Response) => {
  try {
    const result = await HorizontalBracingServices.delHorizontalBracingList(req.body);
    const status = CustomsTools.CodeStatus(1, 'Success', result)
    res.json(status);
  } catch (err) {
    console.log(err.message);
    res.statusCode = 400;
    res.json(`Bad Request:${err.message}`);
  }
};
