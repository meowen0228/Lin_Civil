import { AppDataSource } from '../config/dataSource';
import { HorizontalBracing, HorizontalBracingMaterial } from '../entity';

export const getHorizontalBracingList = async (data) => {
  const Area = data.area;
  const result = await AppDataSource.getRepository(HorizontalBracing)
    .createQueryBuilder()
    .select()
    .getMany();
  const detailResult = await AppDataSource.getRepository(HorizontalBracingMaterial)
    .createQueryBuilder()
    .select()
    .getMany();
  for (let i = 0; i < result.length; i++) {
    let list = [];
    for (let j = 0; j < detailResult.length; j++) {
      if (result[i].id == detailResult[j].bracingId) {
        list.push(detailResult[j])
      }
    }
    result[i]["detail"] = list;
  }
  if (Area && Area != 'All') {
    const resultFilter = result.filter((e) => {
      if (e.area.indexOf(Area) > 0) {
        return e
      }
    });
    return resultFilter;
  }
  return result;
};

export const addHorizontalBracingList = async (data) => {
  return await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
    const result = await AppDataSource.createQueryBuilder()
      .insert()
      .into(HorizontalBracing)
      .values([data])
      .execute();
    const new_id = result.identifiers[0].id;
    const detail = data.detail
    detail.forEach((element) => {
      element.bracingId = new_id;
    });
    const detailResult = await AppDataSource.createQueryBuilder()
      .insert()
      .into(HorizontalBracingMaterial)
      .values(detail)
      .execute();
    return result;
  }).then((x) => {
    return x;
  });
};

export const delHorizontalBracingList = async (data) => {
  const id = data.id;
  const result = await AppDataSource.createQueryBuilder()
    .delete()
    .from(HorizontalBracing)
    .where(`id = :id`, { id: id })
    .execute()
  const result2 = await AppDataSource.createQueryBuilder()
    .delete()
    .from(HorizontalBracingMaterial)
    .where(`bracingId = :id`, { id: id })
    .execute();
  return { result, result2 };
};
