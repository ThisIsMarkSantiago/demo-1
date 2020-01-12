import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Province, City, Barangay, Registration } from 'src/app/interfaces';
import { ProvincesService } from 'src/app/services/provinces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registration: Registration;
  provinces: Array<Province>;

  constructor(
    private provinceService: ProvincesService,
    private router: Router
  ) {
    this.registration = {} as Registration;
    this.provinces = this.provinceService.getProvinces();
  }

  ngOnInit() { }

  getCities(): Array<City> {
    return this.provinceService.getCitiesByProvince(this.registration.province);
  }

  getBarangays(): Array<Barangay> {
    return this.provinceService.getBarangaysByProvinceAndCity(this.registration.province, this.registration.city);
  }

  onProvinceChange() {
    this.registration.city = undefined;
    this.onCityChange();
  }

  onCityChange() {
    this.registration.barangay = undefined;
  }

  fullnameValidator(event) {
    const pattern = /[^A-Z. ]/g;
    event.target.value = (event.target.value || '').toUpperCase().trim();
    if (pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(pattern, '');
    }
  }

  onSubmit(form: FormControl) {
    if (form.valid) {
      this.router.navigateByUrl('/confirm', {
        state: this.registration
      });
    }
  }
}
