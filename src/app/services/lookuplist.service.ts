import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LookuplistService {

  url = environment.baseUrl+"/lookup/listLookup";
  constructor(private http:HttpClient) { }
  lookupdata()
  {
return this.http.get(this.url);

  }
}
