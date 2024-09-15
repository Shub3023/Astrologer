import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public userData:any | [];
  public object:any | [];
  mobile: string | undefined;
  otp: any;
  type: any;
  mediaType:any;
  constructor(public router:Router, private http:HttpClient) { }

 public headerName(data:[]){
   this.userData=data;
   console.log(this.userData);
   this.router.navigate(['/profile'])
 }
 public medialPopUp(data:[],media:string){
  // this.router.navigate(['/media-icon-pop-up'])
  
  this.userData=data;
  this.mediaType=media;
  console.log(this.userData);
  console.log("Data File",media);
  
}
 public signInData(phone:string){
  this.mobile=phone
 }
 public sendOtp(data:any){
  this.otp=data;
 }
 
 public getApiData(parameter: string):Observable<any>{
   return this.http.get<any>('http://api.homekodi.com/asg/elementro/search?mode='+parameter);
  // .subscribe((res) => {
    // this.object = res;
  // });
 }

 
}
