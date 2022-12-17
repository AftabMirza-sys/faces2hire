import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MajordataService {
  url = environment.baseUrl+"/major/listMajor";
  constructor(private http:HttpClient) { }
  majorrecord()
  {
return this.http.get(this.url);

  }
}
