import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Locations} from './locations.model';

@model({settings: {strict: false}})
export class RealEstateList extends Entity {
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
  neighborhood: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  images: string[];

  @property({
    type: 'number',
    required: true,
  })
  lat: number;

  @property({
    type: 'number',
    required: true,
  })
  lng: number;

  @property({
    type: 'string',
    required: true,
  })
  state: string;

  @property({
    type: 'number',
    required: true,
  })
  bedrooms: number;

  @property({
    type: 'number',
    required: true,
  })
  bathrooms: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

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

  @belongsTo(() => Locations)
  locationsId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RealEstateList>) {
    super(data);
  }
}

export interface RealEstateListRelations {
  // describe navigational properties here
}

export type RealEstateListWithRelations = RealEstateList & RealEstateListRelations;
