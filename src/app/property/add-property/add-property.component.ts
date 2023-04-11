import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IProperty } from '../model/IProperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm:NgForm={} as NgForm;
@ViewChild('formTabs') formTabs: TabsetComponent = {} as TabsetComponent;

propertyTypes:Array<string>=['House','Apartment','Duplex'];

furnishingTypes:Array<string>=['Fully','Semi','Unfurnished'];

propertyView: IProperty={
  Id:0,
  Name:'',
  Price:0,
  Type:'',
  TransactionType:0

};
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(Form: NgForm){
    console.log(Form);
  }

  selectedTab(tabId:number){
    this.formTabs.tabs[tabId].active=true;
  }
}
