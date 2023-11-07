import {inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory} from '@loopback/repository';
import {MyDatabaseDataSource} from '../datasources';
import {Locations, LocationsRelations, RealEstateList} from '../models';

export class LocationsRepository extends DefaultCrudRepository<
  Locations,
  typeof Locations.prototype.id,
  LocationsRelations
> {

  public readonly realEstateLists: HasManyRepositoryFactory<RealEstateList, typeof Locations.prototype.id>;

  constructor(
    @inject('datasources.myDatabase') dataSource: MyDatabaseDataSource,
  ) {
    super(Locations, dataSource);
  }
}
