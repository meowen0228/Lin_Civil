import { AppDataSource } from '../config/dataSource';
import { SteelAndForm, SteelAndFormDetail } from '../entity';

export const getSteelAndFormList = async (data) => {
  const Area = data.Area;
  const result = await AppDataSource.getRepository(SteelAndForm)
    .createQueryBuilder()
    .select()
    .getMany();
  const detailResult = await AppDataSource.getRepository(SteelAndFormDetail)
    .createQueryBuilder()
    .select()
    .getMany();
  for (let i = 0; i < result.length; i++) {
    let list = [];
    for (let j = 0; j < detailResult.length; j++) {
      if (result[i].id == detailResult[j].steelAndFormId) {
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

export const addSteelAndFormList = async (data) => {
  return await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
    const result = await AppDataSource.createQueryBuilder()
      .insert()
      .into(SteelAndForm)
      .values([data])
      .execute();
    const new_id = result.identifiers[0].id;
    const detail = data.detail
    detail.forEach((element) => {
      element.steelAndFormId = new_id;
    });
    const detailResult = await AppDataSource.createQueryBuilder()
      .insert()
      .into(SteelAndFormDetail)
      .values(detail)
      .execute();
    return result;
  }).then((x) => {
    return x;
  });
};

export const delSteelAndFormList = async (data) => {
  const id = data.id;
  const result = await AppDataSource.createQueryBuilder()
    .delete()
    .from(SteelAndForm)
    .where(`id = :id`, { id: id })
    .execute()
  const result2 = await AppDataSource.createQueryBuilder()
    .delete()
    .from(SteelAndFormDetail)
    .where(`steelAndFormId = :id`, { id: id })
    .execute();
  return { result, result2 };
};
