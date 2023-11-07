import {
  Filter,
  FilterExcludingWhere,
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  response
} from '@loopback/rest';
import {Locations} from '../models';
import {LocationsRepository} from '../repositories';

export class LocationsController {
  constructor(
    @repository(LocationsRepository)
    public locationsRepository: LocationsRepository,
  ) { }

  @get('/locations')
  @response(200, {
    description: 'Array of Locations model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Locations, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Locations) filter?: Filter<Locations>,
  ): Promise<Locations[]> {
    return this.locationsRepository.find(filter);
  }

  @get('/locations/{id}')
  @response(200, {
    description: 'Locations model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Locations, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Locations, {exclude: 'where'}) filter?: FilterExcludingWhere<Locations>
  ): Promise<Locations> {
    return this.locationsRepository.findById(id, filter);
  }
}
