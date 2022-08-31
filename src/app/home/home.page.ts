import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = environment.options;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public httpClient: HttpClient) {
    this.loadData();
  }
  loadData() {
    this.httpClient
      .get<any>(`https://open-weather13.p.rapidapi.com/city/landon`, options)
      .subscribe((results) => {
        console.log(results);
      });
  }
}
