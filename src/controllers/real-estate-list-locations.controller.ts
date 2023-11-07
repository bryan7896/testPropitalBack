import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  RealEstateList,
  Locations,
} from '../models';
import {RealEstateListRepository} from '../repositories';

export class RealEstateListLocationsController {
  constructor(
    @repository(RealEstateListRepository)
    public realEstateListRepository: RealEstateListRepository,
  ) { }

  @get('/real-estate-lists/{id}/locations', {
    responses: {
      '200': {
        description: 'Locations belonging to RealEstateList',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Locations),
          },
        },
      },
    },
  })
  async getLocations(
    @param.path.string('id') id: typeof RealEstateList.prototype.id,
  ): Promise<Locations> {
    return this.realEstateListRepository.locations(id);
  }
}
