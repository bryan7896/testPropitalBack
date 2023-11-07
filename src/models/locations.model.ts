import {Entity, model, property, hasMany} from '@loopback/repository';
import {RealEstateList} from './real-estate-list.model';

@model({settings: {strict: false}})
export class Locations extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  parentId: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'date',
    required: true,
  })
  createdAt: string;

  @property({
    type: 'date',
    required: true,
  })
  updatedAt: string;

  @hasMany(() => RealEstateList)
  realEstateLists: RealEstateList[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Locations>) {
    super(data);
  }
}

export interface LocationsRelations {
  // describe navigational properties here
}

export type LocationsWithRelations = Locations & LocationsRelations;
