import { Request, Response } from 'express';
import * as EarthworkServices from '../services/EarthworkServices';
import * as CustomsTools from '../middleware/CustomsTools';

export const getEarthWorkList = async (req: Request, res: Response) => {
  try {
    const result = await EarthworkServices.getEarthWorkList(req.body);
    const status = CustomsTools.CodeStatus(1, 'Success', result)
    res.json(status);
  } catch (err) {
    console.log(err.message);
    res.statusCode = 400;
    res.json(`Bad Request:${err.message}`);
  }
};

export const addEarthWorkList = async (req: Request, res: Response) => {
  try {    
    const result = await EarthworkServices.addEarthWorkList(req.body);
    const status = CustomsTools.CodeStatus(1, 'Success', result)
    res.json(status);
  } catch (err) {
    console.log(err.message);
    res.statusCode = 400;
    res.json(`Bad Request:${err.message}`);
  }
};

export const delEarthWorkList = async (req: Request, res: Response) => {
  try {
    const result = await EarthworkServices.delEarthWorkList(req.body);
    const status = CustomsTools.CodeStatus(1, 'Success', result)
    res.json(status);
  } catch (err) {
    console.log(err.message);
    res.statusCode = 400;
    res.json(`Bad Request:${err.message}`);
  }
};
