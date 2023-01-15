import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConnectCredentialsService {

  constructor(public http: HttpClient) { }
  apiBaseUrl = environment.apiBaseUrl + 'result-dashboard-bi';
  getCredentials(){
    return this.http.get<any>(`${this.apiBaseUrl}/bi-reports`)
  }
}
