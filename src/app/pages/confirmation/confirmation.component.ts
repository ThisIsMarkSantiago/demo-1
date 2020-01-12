import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration, Province, City, Barangay } from 'src/app/interfaces';
import { ProvincesService } from 'src/app/services/provinces.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  registration?: Registration;
  provinces: Array<Province>;
  cities: Array<City>;
  barangays: Array<Barangay>;

  constructor(
    private router: Router,
    private provincesService: ProvincesService
  ) {
    this.registration = this.router.getCurrentNavigation().extras.state as Registration;
  }

  ngOnInit() {
    if (!this.registration) {
      this.router.navigateByUrl('/register');
    }
    this.provinces = this.provincesService.getProvinces();
    this.cities = this.provincesService.getCitiesByProvince(this.registration.province);
    this.barangays = this.provincesService.getBarangaysByProvinceAndCity(this.registration.province, this.registration.city);
  }
}
