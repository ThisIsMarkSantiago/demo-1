import { City } from './City';

export interface Province {
  id: string,
  name: string;
  cities: Array<City>;
};
