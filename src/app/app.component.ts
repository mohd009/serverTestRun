import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerData } from './interface/CustomerData';
import { FormServiceService } from './service/form-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emailTest';


  formInfo = new FormGroup({});

  custData = {} as CustomerData;
  

  constructor(private custService: FormServiceService) { }

  ngOnInit(): void {
    this.formInfo = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      details: new FormControl()
    })
    
  }

  onSubmit(){
    //check if null and all fields are filled
    this.custData.firstName = this.formInfo.get('firstName')?.value;
    this.custData.lastName = this.formInfo.get('lastName')?.value;
    this.custData.email = this.formInfo.get('email')?.value
    this.custData.phone = this.formInfo.get('phone')?.value
    this.custData.details = this.formInfo.get('details')?.value;
    console.log(this.custData)

    this.custService.sendToServer(this.custData);

    
  }


}
