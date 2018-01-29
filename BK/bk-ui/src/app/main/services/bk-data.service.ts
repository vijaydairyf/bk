import { Injectable } from '@angular/core';
import { Http, Response, Headers  } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { error } from 'selenium-webdriver';
import { changePasswordViewModel } from '../content/change-password/change-password.component';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { RegisterModel } from '../models/registerModel';
import { MemberModel } from '../models/memberModel';
import { FamilyModel } from '../models/familyModel';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class bkDataService {
  private API_URL = "http://localhost:60067/api/";
  @BlockUI() blockUI: NgBlockUI;

  constructor(private http: Http, public authHttp: AuthHttp) { }

  login(userName: string, password: string): Observable<any> {
    
    this.blockUI.start("Please wait...");

    return this.http.post(this.API_URL + "login", "username=" + userName + "&password=" + password + "&grant_type=password").map(response => {    
      this.blockUI.stop();
      return response;
    }).catch((error: any) => this.handleAPIError(error));      
  };

  sendResetPasswordEmail(emailAddress: string) {

    this.blockUI.start("Please wait...");

    return this.http.get(this.API_URL + "sendResetPasswordEmail?emailAddress=" + emailAddress).map((res) => {
      return this.handleAPIResponse(res);
    }).catch((error: any) => this.handleAPIError(error));
  };

  resetPassword(password: string, token: string)
  {
    this.blockUI.start("Please wait...");

    return this.http.get(this.API_URL + "resetPassword?password=" + password + "&token=" + token).map((res)=>{
      return this.handleAPIResponse(res);
    }).catch((error : any) => this.handleAPIError(error));
  }

  changePassword(model: changePasswordViewModel)
  { 
    this.blockUI.start("Please wait...");
           
    return this.authHttp.post(this.API_URL + "changePassword", model).map((res) =>{
      return this.handleAPIResponse(res);
    }).catch((error : any) => this.handleAPIError(error));
  }

  register(model: RegisterModel)
  {
    this.blockUI.start("Please wait...");
           
    return this.http.post(this.API_URL + "register", model,{headers: this.getPublicHeader()}).map((res) =>{
      return this.handleAPIResponse(res);
    }).catch((error : any) => this.handleAPIError(error));
  }

  getMember(){
    this.blockUI.start("Please wait...");

    return this.authHttp.get(this.API_URL + "getMember").map((res)=>{
      return this.handleAPIResponse(res);
    }).catch((error : any) => this.handleAPIError(error));
  }

  saveMember(model: MemberModel){
    this.blockUI.start("Please wait...");
           
    return this.authHttp.post(this.API_URL + "saveMember", model).map((res) =>{
      return this.handleAPIResponse(res);
    }).catch((error : any) => this.handleAPIError(error));
  }

  saveFamily(model: FamilyModel){
    this.blockUI.start("Please wait...");
           
    return this.authHttp.post(this.API_URL + "saveFamily", model).map((res) =>{
      return this.handleAPIResponse(res);
    }).catch((error : any) => this.handleAPIError(error));
  }

  getFamilyLookup()
  {
    this.blockUI.start("Please wait...");
               
    return this.authHttp.get(this.API_URL + "familyLookup").map((res) =>{
      return this.handleAPIResponse(res);
    }).catch((error : any) => this.handleAPIError(error));
  }

  getFamilyDetail(familyId: number)
  {
    this.blockUI.start("Please wait...");
               
    return this.authHttp.get(this.API_URL + "family?familyId=" + familyId).map((res) =>{
      return this.handleAPIResponse(res);
    }).catch((error : any) => this.handleAPIError(error));
  }

  private getPublicHeader(): Headers{    
    const headers = new Headers(
      {
        'Content-Type': 'application/json'        
      }
    );

    return headers;
  }

  private handleAPIResponse(response: any) {    
    this.blockUI.stop();
    return JSON.parse(response._body);
  }

  private handleAPIError(error: any): any {         
    this.blockUI.stop();

    if (error.message)    
      return Observable.throw(error.message);
    else
      return Observable.throw(JSON.parse(error._body));
  };
}
