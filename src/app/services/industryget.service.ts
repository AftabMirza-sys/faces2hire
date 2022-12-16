import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class IndustrygetService {

  url = environment.baseUrl+"/industry/listIndustry";
  constructor(private http:HttpClient) { }
  industrydata()
  {
return this.http.get(this.url);

  }
}
