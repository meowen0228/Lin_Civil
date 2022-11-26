import { AppDataSource } from '../dataSource';
import { HorizontalBracing, HorizontalBracingMaterial } from '../entity';

export const getHorizontalBracingList = async (data) => {
  const Area = data.Area;
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
      if (result[i].ID == detailResult[j].Bracing_id) {
        list.push(detailResult[j])
      }
    }
    result[i]["dataDetail"] = list;
  }
  if (Area && Area != 'All') {
    const resultFilter = result.filter((e) => {
      if (e.Area.indexOf(Area) > 0) {
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
    const new_id = result.identifiers[0].ID;
    const detail = data.detail
    detail.forEach((element) => {
      element["Bracing_id"] = new_id;
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
  const ID = data.ID;
  const result = await AppDataSource.createQueryBuilder()
    .delete()
    .from(HorizontalBracing)
    .where(`"ID" = :ID`, { ID: ID })
    .execute()
  const result2 = await AppDataSource.createQueryBuilder()
    .delete()
    .from(HorizontalBracingMaterial)
    .where(`"Bracing_id" = :ID`, { ID: ID })
    .execute();
  return { result, result2 };
};
