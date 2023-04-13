import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IProperty } from '../model/IProperty';
import { IPropertyBase } from '../model/IPropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm:NgForm={} as NgForm;
@ViewChild('formTabs') formTabs: TabsetComponent = {} as TabsetComponent;

 // Will come from masters
 propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
 furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

 propertyView: IPropertyBase = {
   Id: null,
   Name: '',
   Price: null,
   SellRent: null,
   PType: '',
   FType: '',
   BHK: null,
   BuiltArea: null,
   City: '',
   RTM: null
 };


 constructor(private router: Router) { }

 ngOnInit() {
 }

 onBack() {
   this.router.navigate(['/']);
 }

 onSubmit() {
   console.log('Congrats, form Submitted');
   console.log('SellRent=' + this.addPropertyForm.value.BasicInfo.SellRent);
   console.log(this.addPropertyForm);
 }

 selectTab(tabId: number) {
   this.formTabs.tabs[tabId].active = true;
 }
}
