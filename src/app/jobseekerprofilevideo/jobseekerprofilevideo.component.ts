import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-jobseekerprofilevideo',
  templateUrl: './jobseekerprofilevideo.component.html',
  styleUrls: ['./jobseekerprofilevideo.component.css']
})
export class JobseekerprofilevideoComponent implements OnInit {
  userid:any;
  privacylevel:any;
  constructor(private route:Router,private http:HttpClient)
  {
    this.userid = localStorage.getItem('token');
    this.privacylevel="634a672f021b840fb8f052c0";
    
  }
  ngOnInit(): void {
    
  }







  message: boolean = false;
  onSubmit(jobseekerprofilevideo: any) {
    console.warn('jobseekerprofilevideo',jobseekerprofilevideo);
    this.http.post(environment.baseUrl+'/user/saveJobSeekerProfileVideo',jobseekerprofilevideo).subscribe((result) => {
      console.warn("result", result);
      this.message = true;
    });
  
  }





}
