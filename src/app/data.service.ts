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
  constructor(public router:Router, private http:HttpClient) { }

 public headerName(data:[]){
   this.userData=data;
   console.log(this.userData);
   this.router.navigate(['/profile'])
 }
 public signInData(phone:string){
  this.mobile=phone
 }
 public getApiData(parameter: string):Observable<any>{
   return this.http.get<any>('http://api.homekodi.com/asg/elementro/search?mode='+parameter);
  // .subscribe((res) => {
    // this.object = res;
  // });
 }
}
