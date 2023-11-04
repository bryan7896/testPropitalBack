import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {RealEstateList} from '../models';
import {RealEstateListRepository} from '../repositories';

export class RealEstateListsController {
  constructor(
    @repository(RealEstateListRepository)
    public realEstateListRepository: RealEstateListRepository,
  ) { }

  @post('/real-estate-lists')
  @response(200, {
    description: 'RealEstateList model instance',
    content: {'application/json': {schema: getModelSchemaRef(RealEstateList)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RealEstateList, {
            title: 'NewRealEstateList',
            exclude: ['id'],
          }),
        },
      },
    })
    realEstateList: Omit<RealEstateList, 'id'>,
  ): Promise<RealEstateList> {
    return this.realEstateListRepository.create(realEstateList);
  }

  @get('/real-estate-lists/count')
  @response(200, {
    description: 'RealEstateList model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RealEstateList) where?: Where<RealEstateList>,
  ): Promise<Count> {
    return this.realEstateListRepository.count(where);
  }

  @get('/real-estate-lists')
  @response(200, {
    description: 'Array of RealEstateList model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RealEstateList, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RealEstateList) filter?: Filter<RealEstateList>,
  ): Promise<RealEstateList[]> {
    return this.realEstateListRepository.find(filter);
  }

  @patch('/real-estate-lists')
  @response(200, {
    description: 'RealEstateList PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RealEstateList, {partial: true}),
        },
      },
    })
    realEstateList: RealEstateList,
    @param.where(RealEstateList) where?: Where<RealEstateList>,
  ): Promise<Count> {
    return this.realEstateListRepository.updateAll(realEstateList, where);
  }

  @get('/real-estate-lists/{id}')
  @response(200, {
    description: 'RealEstateList model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RealEstateList, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RealEstateList, {exclude: 'where'}) filter?: FilterExcludingWhere<RealEstateList>
  ): Promise<RealEstateList> {
    return this.realEstateListRepository.findById(id, filter);
  }

  @patch('/real-estate-lists/{id}')
  @response(204, {
    description: 'RealEstateList PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RealEstateList, {partial: true}),
        },
      },
    })
    realEstateList: RealEstateList,
  ): Promise<void> {
    await this.realEstateListRepository.updateById(id, realEstateList);
  }

  @put('/real-estate-lists/{id}')
  @response(204, {
    description: 'RealEstateList PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() realEstateList: RealEstateList,
  ): Promise<void> {
    await this.realEstateListRepository.replaceById(id, realEstateList);
  }

  @del('/real-estate-lists/{id}')
  @response(204, {
    description: 'RealEstateList DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.realEstateListRepository.deleteById(id);
  }
}
