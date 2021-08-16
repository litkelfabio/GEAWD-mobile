import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  mockData = [
    {
      first_name: 'John',
      last_name: 'Doe',
      account_number: '123456789',
      address: 'Bailen, Cavite'
    }
  ]

}
