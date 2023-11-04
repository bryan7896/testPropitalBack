import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MyDatabaseDataSource} from '../datasources';
import {Locations, LocationsRelations} from '../models';

export class LocationsRepository extends DefaultCrudRepository<
  Locations,
  typeof Locations.prototype.id,
  LocationsRelations
> {
  constructor(
    @inject('datasources.myDatabase') dataSource: MyDatabaseDataSource,
  ) {
    super(Locations, dataSource);
  }
}
