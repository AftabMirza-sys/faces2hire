import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { UserService } from '../services/user.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-sendmessageemployeer',
  templateUrl: './sendmessageemployeer.component.html',
  styleUrls: ['./sendmessageemployeer.component.css']
})
export class SendmessageemployeerComponent implements OnInit{

resultdata:any;
userId:any;
  sendempmessage:any;
  constructor(private route:Router, private http: HttpClient, private userdata:UserService)
{
  this.userdata.userdata().subscribe((userdata)=>{

    this.sendempmessage = userdata;
    });
    this.userId = localStorage.getItem('token');
}

  ngOnInit(): void {
  
  }



  message: boolean = false;
onSubmit(empsendmessageuser: any) {
  console.warn('empsendmessageuser',empsendmessageuser);
  this.http.post(environment.baseUrl+'/chat/sendMessage',empsendmessageuser).subscribe((result) => {
   this.resultdata = result;
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
