import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url = environment.baseUrl+"/skill/listSkill";
  constructor(private http:HttpClient) { }
  skilldata()
  {
return this.http.get(this.url);

  }
}
