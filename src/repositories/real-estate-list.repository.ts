import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MyDatabaseDataSource} from '../datasources';
import {RealEstateList, RealEstateListRelations} from '../models';

export class RealEstateListRepository extends DefaultCrudRepository<
  RealEstateList,
  typeof RealEstateList.prototype.id,
  RealEstateListRelations
> {
  constructor(
    @inject('datasources.myDatabase') dataSource: MyDatabaseDataSource,
  ) {
    super(RealEstateList, dataSource);
  }
}
