import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { UserService } from '../services/user.service'; 
import { environment } from '../environments/environment';

@Component({
  selector: 'app-getallapplied',
  templateUrl: './getallapplied.component.html',
  styleUrls: ['./getallapplied.component.css']
})
export class GetallappliedComponent implements OnInit {
applieddata:any;
userId:any;
resultdata:any;
  constructor(private route:Router, private http: HttpClient, private userdata:UserService)
  {

    
    this.userdata.userdata().subscribe((userdata)=>{

      this.applieddata = userdata;
      });
this.userId = localStorage.getItem('token');
  }

  ngOnInit(): void {
  
}

message: boolean = false;
onSubmit(appliedform: any) {
  console.warn('appliedform',appliedform);
  this.http.post(environment.baseUrl+'/job/getAllApplied',appliedform).subscribe((result) => {
    this.resultdata = result;
    console.log(result);
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
