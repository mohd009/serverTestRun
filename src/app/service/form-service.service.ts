import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CustomerData } from '../interface/CustomerData';
import { WINDOW } from './window-token';
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http: HttpClient, @Inject(WINDOW) private window: Window) { }

//if edit anything in angular, then delete the dist folder in emailServerCopy, then when done
//editing, rn command ng build , this willl create anmother dist folder, move it to emailServercOPy folder

 //call to server
  sendToServer(cust: CustomerData){
   

     var loc: any;
   //gets the actual origin and uses that
    loc =  (this.window.location.origin + "/apis/send")
  
   this.http.post(loc, {cust})
  .subscribe(val => {
      console.log("success on both")
   })

  }
}