import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { MajordataService } from '../services/majordata.service';
import { environment } from '../environments/environment';
import { LookuplistService } from '../services/lookuplist.service';
import { LookupbytypeService } from '../services/lookupbytype.service';

@Component({
  selector: 'app-jobseekereducation',
  templateUrl: './jobseekereducation.component.html',
  styleUrls: ['./jobseekereducation.component.css']
})
export class JobseekereducationComponent implements OnInit{

userId :any;
sendlookup:any;
  constructor(private http:HttpClient,private majorrecord:MajordataService,private lookupdata:LookuplistService,private route:Router)
{
  this.userId = localStorage.getItem('token');
  this.lookupdata.lookupdata().subscribe((lookupdata)=>{

    this.sendlookup = lookupdata;
    });
}


ngOnInit(): void {
  
}
message: boolean = false;
onSubmit(jobseekereducation: any) {
  console.warn('jobseekereducation',jobseekereducation);
  this.http.post(environment.baseUrl+'/user/saveJobSeekerWebLinks',jobseekereducation).subscribe((result) => {
    console.warn("result", result);
    this.message = true;
  });

}
removemessage() {
  this.message = false;

}





}
