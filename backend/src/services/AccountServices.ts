import { AppDataSource } from '../dataSource';
import { Account } from '../entity/Account'
import { ILogin } from '../type';
import CreateToken from '../middleware/CreateToken';

export const login = async (data: ILogin) => {
  console.log(data);
  const AccountResult = await AppDataSource
    .createQueryBuilder()
    .select(['Account.User_Name', 'Account.Password'])
    .from(Account, 'Account')
    .where('Account.User_Name = :User_Name', { User_Name: data.User_Name })
    .andWhere('Account.Password = :Password', { Password: data.Password })
    .getOne();

  if (AccountResult[0] === 0) {
    let msg = 'account or pasword wrong';
    return msg;
  } else {
    const token = await CreateToken(data);
    const result = {
      id: AccountResult.ID,
      token: token,
    };
    return result;
  }
};

export const addUser = async (data) => {
  console.log(data);
  const result = await AppDataSource.createQueryBuilder()
    .insert()
    .into(Account)
    .values(data)
    .execute();
  if (result.identifiers) {
    const token = await CreateToken(data);
    const tokenResult = {
      id: result.identifiers[0].id,
      token: token,
    };
    return tokenResult;
  } else {
    return result;
  }
};

