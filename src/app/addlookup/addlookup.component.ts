import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { UserService } from '../services/user.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-addlookup',
  templateUrl: './addlookup.component.html',
  styleUrls: ['./addlookup.component.css']
})
export class AddlookupComponent implements OnInit {
  senduserdata:any;
  userId:any;
  resultdata:any;
  constructor(private route:Router, private http: HttpClient, private userdata:UserService){

    this.userdata.userdata().subscribe((userdata)=>{

      this.senduserdata = userdata;

  });
  this.userId = localStorage.getItem('token');
}
  ngOnInit(): void { 

  }
  message: boolean = false;
  onSubmit(lookupaddition: any) {
    
    this.http.post(environment.baseUrl+'/lookup/addLookup',lookupaddition).subscribe((result) => {
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
