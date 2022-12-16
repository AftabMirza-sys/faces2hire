import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';

import { environment } from '../environments/environment';
@Component({
  selector: 'app-searchcompany',
  templateUrl: './searchcompany.component.html',
  styleUrls: ['./searchcompany.component.css']
})
export class SearchcompanyComponent implements OnInit{
  url:any;
  
  companydata:any= [];
  companysavedata:any;
  constructor(private route:Router, private http: HttpClient){}
  ngOnInit(): void {
    
  }

  message: boolean = false;
  onSubmit(searchcompany: any) {
   
    this.http.post(environment.baseUrl+'/user/searchCompanies',searchcompany).subscribe((result) => {
      
      this.companydata = result;
      
      for(let i=0;i<this.companydata.data.length;i++)
      {
          this.companysavedata=this.companydata.data[i];
      }
      
      this.message = true;
    });





}

}
