import { Axios } from './HttpService';

// eslint-disable-next-line import/prefer-default-export
export const Login = (param) => Axios('post', '/login', param);
export const getEarthWorkList = (param) => Axios('post', '/getEarthWorkList', param);
export const addEarthWorkList = (param) => Axios('post', '/addEarthWorkList', param);
export const delEarthWorkList = (param) => Axios('delete', '/delEarthWorkList', param);
export const getHorizontalBracingList = (param) => Axios('post', '/getHorizontalBracingList', param);
export const addHorizontalBracingList = (param) => Axios('post', '/addHorizontalBracingList', param);
export const delHorizontalBracingList = (param) => Axios('delete', '/delHorizontalBracingList', param);
export const getSteelAndFormList = (param) => Axios('post', '/getSteelAndFormList', param);
export const addSteelAndFormList = (param) => Axios('post', '/addSteelAndFormList', param);
export const delSteelAndFormList = (param) => Axios('delete', '/delSteelAndFormList', param);
