import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MyDatabaseDataSource} from '../datasources';
import {RealEstateList, RealEstateListRelations, Locations} from '../models';
import {LocationsRepository} from './locations.repository';

export class RealEstateListRepository extends DefaultCrudRepository<
  RealEstateList,
  typeof RealEstateList.prototype.id,
  RealEstateListRelations
> {

  public readonly locations: BelongsToAccessor<Locations, typeof RealEstateList.prototype.id>;

  constructor(
    @inject('datasources.myDatabase') dataSource: MyDatabaseDataSource, @repository.getter('LocationsRepository') protected locationsRepositoryGetter: Getter<LocationsRepository>,
  ) {
    super(RealEstateList, dataSource);
    this.locations = this.createBelongsToAccessorFor('locations', locationsRepositoryGetter,);
    this.registerInclusionResolver('locations', this.locations.inclusionResolver);
  }
}
