import { AppDataSource } from '../config/dataSource';
import { Earthwork, EarthworkExcavator } from '../entity';

export const getEarthWorkList = async (data) => {
  const Area = data.Area;
  const result = await AppDataSource.getRepository(Earthwork)
    .createQueryBuilder()
    .select()
    .getMany();
  const detailResult = await AppDataSource.getRepository(EarthworkExcavator)
    .createQueryBuilder()
    .select()
    .getMany();
  for (let i = 0; i < result.length; i++) {
    let list = [];
    for (let j = 0; j < detailResult.length; j++) {
      if (result[i].ID == detailResult[j].Earth_id) {
        list.push(detailResult[j]);
      }
    }
    result[i]['detail'] = list;
  }
  if (Area && Area != 'All') {
    const resultFilter = result.filter((e) => (
      e.Area.includes(Area)
    ));
    return resultFilter;
  }
  return result;
};

export const addEarthWorkList = async (data) => {
  return await AppDataSource.manager
    .transaction(async (transactionalEntityManager) => {
      const result = await AppDataSource.createQueryBuilder()
        .insert()
        .into(Earthwork)
        .values([data])
        .execute();
      const new_id = result.identifiers[0].ID;
      const detail = data.detail;
      detail.forEach((element) => {
        element['Earth_id'] = new_id;
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

export const delEarthWorkList = async (data) => {
  const ID = data.ID;
  const result = await AppDataSource.createQueryBuilder()
    .delete()
    .from(Earthwork)
    .where(`earthwork."ID" = :ID`, { ID: ID })
    .execute();
  const result2 = await AppDataSource.createQueryBuilder()
    .delete()
    .from(EarthworkExcavator)
    .where(`"Earth_id" = :ID`, { ID: ID })
    .execute();
  return { result, result2 };
};
