import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { LookuplistService } from '../services/lookuplist.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-jobseekerdashboard',
  templateUrl: './jobseekerdashboard.component.html',
  styleUrls: ['./jobseekerdashboard.component.css']
})
export class JobseekerdashboardComponent implements OnInit {

jobseekerwebs : any;
token_id :any;
constructor(private route:Router, private http: HttpClient, private lookupdata:LookuplistService){
  this.lookupdata.lookupdata().subscribe((lookupdata)=>{

this.jobseekerwebs = lookupdata;
this.token_id = localStorage.getItem('token');

  });
}
 ngOnInit(): void { 

  }
  
  message: boolean = false;
  onSubmit(jobseekerweblinks: any) {
    console.warn('jobseekerweblinks',jobseekerweblinks);
    this.http.post(environment.baseUrl+'/user/saveJobSeekerWebLinks',jobseekerweblinks).subscribe((result) => {
      console.warn("result", result);
      this.message = true;
    });

  }
  removemessage() {
    this.message = false;

  }


  onlogout()
  {
    localStorage.removeItem('token');
    this.route.navigate(['./']);
  }

}
