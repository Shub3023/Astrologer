import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
    return this.http.post<any>('http://api.homekodi.com/auth/signin', data);

}

// public profileApi(){
  // const data=localStorage.getItem('token');
  // const header=new Headers();
  // return this.http.get<any>('http://api.homekodi.com/asg/profile',{data})
// }
public userProfile(){
  const login_token = localStorage.getItem('token');

  const headers = new HttpHeaders().set('Authorization','Bearer '+login_token);
return this.http.get<any>('http://api.homekodi.com/asg/profile',{headers});
}
}
