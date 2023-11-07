import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MyDatabaseDataSource} from '../datasources';
import {Locations, LocationsRelations, RealEstateList} from '../models';
import {RealEstateListRepository} from './real-estate-list.repository';

export class LocationsRepository extends DefaultCrudRepository<
  Locations,
  typeof Locations.prototype.id,
  LocationsRelations
> {

  public readonly realEstateLists: HasManyRepositoryFactory<RealEstateList, typeof Locations.prototype.id>;

  constructor(
    @inject('datasources.myDatabase') dataSource: MyDatabaseDataSource, @repository.getter('RealEstateListRepository') protected realEstateListRepositoryGetter: Getter<RealEstateListRepository>,
  ) {
    super(Locations, dataSource);
    this.realEstateLists = this.createHasManyRepositoryFactoryFor('realEstateLists', realEstateListRepositoryGetter,);
    this.registerInclusionResolver('realEstateLists', this.realEstateLists.inclusionResolver);
  }
}
