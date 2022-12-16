import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
status:any;
message:any;
token:any;
 constructor(private authservice:AuthserviceService,private route : Router)
 {


 }

 ngOnInit(): void {
   
 }

 onsubmit( logindata:any)
{
this.authservice.login(logindata).subscribe(res=>{console.log(res);
this.status = res.status;



if(this.status == true){
  this.token = res.data.id;
  localStorage.setItem('token',this.token);
if(logindata.account == "employer" && logindata.email == "employee@faces2hire.com")
{
  this.route.navigate(['./employerdashboard']);
  this.message = res.message;
  
}else if(logindata.account == "jobseeker" && logindata.email == "jobseeker@faces2hire.com")
{
  this.route.navigate(['./jobseekerdashboard']);
  this.message = res.message;
}else
{
  this.route.navigate(['./']);
  this.message = "Please Select Your Account Type";
}
}
else
{
  this.route.navigate(['./']);
  this.message = res.message;
}




});
  

}

}
