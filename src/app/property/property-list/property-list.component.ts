import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

import { HomeforsaleService } from 'src/app/services/homeforsale.service';
import { TransactionType } from '../enum/TransactionType';
import { IProperty } from '../model/IProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

 properties: Array<IProperty> = [];
 errorMessage: string = '';
 transactionType:TransactionType=TransactionType.Rent;
 constructor(private route:ActivatedRoute, private homeforSaleService:HomeforsaleService){

 }

  ngOnInit(): void {

    console.log(this.route.snapshot.url.toString());
    var selectedRoute=this.route.snapshot.url.toString();

    if (selectedRoute)
    {
        this.transactionType=(selectedRoute==="rent-property") ? TransactionType.Rent : TransactionType.Buy;
    }

    this.homeforSaleService.getAllProperties().subscribe({
      next: properties => {

        if (selectedRoute)
        {
         this.properties = properties;//.filter(property => property.TransactionType === this.transactionType);
        }
        else{
          this.properties = properties;
        }
      },
      error: err => this.errorMessage = err
    });


  }
}
