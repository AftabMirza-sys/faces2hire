import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { UserService } from '../services/user.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-favoritechangestateemployer',
  templateUrl: './favoritechangestateemployer.component.html',
  styleUrls: ['./favoritechangestateemployer.component.css']
})
export class FavoritechangestateemployerComponent {
  empchangestate:any;
  initiator:any;
  resultdata:any;
  constructor(private route:Router, private http: HttpClient, private userdata:UserService)
{
  this.userdata.userdata().subscribe((userdata)=>{

    this.empchangestate = userdata;
    });
    this.initiator = localStorage.getItem('token');
}
  ngOnInit(): void {
  
}


message: boolean = false;
onSubmit(employeesendchangedata: any) {
 console.log(employeesendchangedata);
  this.http.post(environment.baseUrl+'/favorite/changeStatus',employeesendchangedata).subscribe((result) => {
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
