import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonHttpEndpointsService implements OnInit {
  object1: any | [];
  // data:any = {
  // "alias":"LOCALHOST5400",
  //  "phone":"8510941831"
  // }
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  public getApiData(parameter: string): Observable<any> {
    return this.http.get<any>(
      'http://api.homekodi.com/asg/elementro/search?mode=' + parameter
    );
  }

  public postApi(data: any) {
    return this.http.post<any>('http://api.homekodi.com/auth/generate/otp', data);
      // .subscribe((res: any) => {
        // if (res.messagestatus && this.data.phone == '') {
          // alert('OTP sent successfully');
        // } else {
          // alert('failed');
        // }
      // });
  }
  public postApi1(data: any) {
    return this.http.post<any>('http://api.homekodi.com/auth/signin',data, {observe:'response'});
}

// public profileApi(){
  // const data=localStorage.getItem('token');
  // const header=new Headers();
  // return this.http.get<any>('http://api.homekodi.com/asg/profile',{data})
// }
public userProfile(){
  // const login_token = localStorage.getItem('token');
  // const headers = new HttpHeaders().set('Authorization','Bearer '+login_token);
// return this.http.get<any>('http://api.homekodi.com/asg/profile',{headers});
const token:string=(localStorage.getItem(('token')))!;
   console.log(JSON.parse(token));
    const headers = new HttpHeaders().set('Authorization',JSON.parse(token));
return this.http.get<any>('http://api.homekodi.com/asg/profile',{headers});
}  

// public profileUpload(data:any){
  // console.log(data);
  // 
  // const token:string=(localStorage.getItem(('token')))!;
  // const headers = new HttpHeaders().set('Authorization','Bearer '+token);
  // return this.http.post('http://api.homekodi.com/asg/upload/profilephoto',data,{headers});
// }
public profileUpload(image:File): Observable<any> {
  const token:string=(localStorage.getItem(('token')))!;
  // var updatedtoken= token.split(" ")[1];
  console.log("Token",token);
  // console.log("UToken",updatedtoken);
  const formData = new FormData();
  formData.append('file',image);
  const headers = new HttpHeaders().set('Authorization', JSON.parse(token) );
  console.log("Headers",headers);
  console.log(formData);
  
  return this.http.post('http://api.homekodi.com/asg/upload/profilephoto', formData, { headers })
  }
}


