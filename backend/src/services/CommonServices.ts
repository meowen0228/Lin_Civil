import { AppDataSource } from '../config/dataSource';
import { Account } from '../entity/Account/Account'
import { ILogin } from '../type';
import CreateToken from '../middleware/CreateToken';

export const getAllDataList = async (data: ILogin) => {
  try {
    console.log(data);
    const AccountResult = await AppDataSource
      .createQueryBuilder()
      .select(['Account.userName', 'Account.password'])
      .from(Account, 'Account')
      .where('Account.userName = :userName', { userName: data.userName })
      .andWhere('Account.password = :password', { password: data.password })
      .getOne();

    if (AccountResult[0] === 0) {
      let msg = 'account or pasword wrong';
      return msg;
    } else {
      const token = await CreateToken(data);
      const result = {
        id: AccountResult.id,
        token: token,
      };
      return result;
    }
  } catch (error) {
    throw error
  }
};
