import { AppDataSource } from '../data-source';
import { Earthwork } from '../entity/Earthwork';
import { EarthworkExcavator } from '../entity/EarthworkExcavator';

export const getEarthWorkList = async () => {
  const result = await AppDataSource.getRepository(Earthwork)
    .createQueryBuilder()
    .select()
    .getMany();
  return result;
};

export const addEarthWorkList = async (body) => {
  return await AppDataSource.manager
    .transaction(async (transactionalEntityManager) => {
      const result = await AppDataSource.createQueryBuilder()
        .insert()
        .into(Earthwork)
        .values([body.data])
        .execute();
      const new_id = result.identifiers[0].ID;
      const detail = body.data.detail
      detail.forEach((element) => {
        element["Earth_id"] = new_id;
      });
      const detailResult = await AppDataSource.createQueryBuilder()
        .insert()
        .into(EarthworkExcavator)
        .values(detail)
        .execute();
      return result;
    })
    .then((x) => {
      return x;
    });
};

export const delEarthWorkList = async (body) => {
  const ID = body.data.ID;
  const result = await AppDataSource.createQueryBuilder()
    .delete()
    .from(Earthwork)
    .where(`earthwork."ID" = :ID`, { ID: ID })
    .execute()
  return result;
};
