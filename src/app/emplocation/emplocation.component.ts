import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';

import { UserService } from '../services/user.service';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-emplocation',
  templateUrl: './emplocation.component.html',
  styleUrls: ['./emplocation.component.css']
})
export class EmplocationComponent implements OnInit {
emplocationdatasend:any;
id:any;
privacyLevel:any;
constructor(private route:Router, private http: HttpClient, private userdata:UserService)
{
  this.userdata.userdata().subscribe((userdata)=>{
    this.emplocationdatasend = userdata;
});

this.id=localStorage.getItem('token');
this.privacyLevel = "true";

}
  ngOnInit(): void {
}

message: boolean = false;
onSubmit(emplocation: any) {
  console.warn('emplocation',emplocation);
  this.http.post(environment.baseUrl+'/empLocation/addEmpLocation',emplocation).subscribe((result) => {
    console.warn("result", result);
    this.message = true;
  });

}
removemessage() {
  this.message = false;

}






}
