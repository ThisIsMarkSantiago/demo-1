import { Injectable } from '@angular/core';
import Provinces from '../../assets/provinces.json';
import { Province, City, Barangay } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {
  provinces: Array<Province>;

  constructor() { }

  getProvinces(): Array<Province> {
    return (Provinces.provinces || [])
      .map(province => this.toProvince(province));
  }

  getCitiesByProvince(provinceId: string): Array<City> {
    return ((this.getProvinces()
      .filter((province: Province) => {
        return province.id === provinceId;
      })[0] || {} as Province)
      .cities || [])
      .map(city => this.toCity(city));
  }

  getBarangaysByProvinceAndCity(provinceId: string, cityId: string): Array<Barangay> {
    return ((this.getCitiesByProvince(provinceId)
      .filter((city: City) => {
        return city.id === cityId;
      })[0] || {} as City)
      .barangays || [])
      .map(barangay => this.toBarangay(barangay));
  }

  toProvince(object: any): Province {
    const { id, name, cities } = object;
    return { id, name, cities };
  }

  toCity(object: any): City {
    const { id, name, barangays } = object;
    return { id, name, barangays };
  }

  toBarangay(object: any): Barangay {
    const { id, name } = object;
    return { id, name };
  }
}
