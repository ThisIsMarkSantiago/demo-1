import { Barangay } from './Barangay';

export interface City {
  id: string,
  name: string;
  barangays: Array<Barangay>;
};
