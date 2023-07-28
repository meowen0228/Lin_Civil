import { AppDataSource } from '../config/dataSource';
import { Earthwork, EarthworkExcavator } from '../entity';

export const getEarthWorkList = async (data) => {
  const Area = data.area;
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
      if (result[i].id == detailResult[j].earthId) {
        list.push(detailResult[j]);
      }
    }
    result[i]['detail'] = list;
  }
  if (Area && Area != 'All') {
    const resultFilter = result.filter((e) => (
      e.area.includes(Area)
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
      const new_id = result.identifiers[0].id;
      const detail = data.detail;
      detail.forEach((element) => {
        element.earthId = new_id;
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
  const id = data.id;
  const result = await AppDataSource.createQueryBuilder()
    .delete()
    .from(Earthwork)
    .where(`earthwork.id = :id`, { id: id })
    .execute();
  const result2 = await AppDataSource.createQueryBuilder()
    .delete()
    .from(EarthworkExcavator)
    .where(`earthId = :id`, { id: id })
    .execute();
  return { result, result2 };
};
