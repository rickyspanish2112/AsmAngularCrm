import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crm-account';

  account: any;

  ngOnInit(): void {
    this.account = {
      shortCode: 'APIClient001',
      accountNumber: '1234567',
      externalId: 'extId',
      accountName: 'API CLIENT',
      mainTelephone: '3234234',
      fax: 'R U Joking',
      countryCode: 'GB',
      country: 'United Kingdom',
      tin: 'GB685803794000',
      website: 'www.apiclient.com',
      createdBy: 'api',
      description: 'Test Api Client',
      street1: 'Ashford House',
      street2: '41-45 Church Road',
      town: 'Ashford',
      county: 'Middlesex',
      postcode: 'TW15 2TQ',
      firstName: 'Joe',
      lastName: 'Bloggs',
      jobTitle: 'National Accountability Manager',
      telephone: '234345345',
      mobile: '4534345345',
      email: 'joe.bloggs@asm.org.uk',
      notes: 'important info goes here',
      exportAccount: true,
      importAccount: false,
      customer: true,
      supplier: true,
      prospect: true,
      invoicee: false,
      collection: true,
      delivery: true,
      airwaybill: true,
      warehouse: true,
      invoice: true,
      consignee: true,
      shipper: true,
      airlineMesaging: false,
      oceanDocument: true
    };
  }
}
