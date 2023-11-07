import {
  Filter,
  repository,
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
} from '@loopback/rest';
import {
  RealEstateList,
} from '../models';
import {LocationsRepository} from '../repositories';

export class LocationsRealEstateListController {
  constructor(
    @repository(LocationsRepository) protected locationsRepository: LocationsRepository,
  ) { }

  @get('/locations/{id}/real-estate-lists', {
    responses: {
      '200': {
        description: 'Array of Locations has many RealEstateList',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(RealEstateList)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<RealEstateList>,
  ): Promise<RealEstateList[]> {
    return this.locationsRepository.realEstateLists(id).find(filter);
  }
}
