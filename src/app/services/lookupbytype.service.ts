import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LookupbytypeService {
  url = environment.baseUrl+"/lookup/getLookupByType/employmentStatus";
  constructor(private http:HttpClient) { }
  lookemployement()
  {
return this.http.get(this.url);

  }
}
