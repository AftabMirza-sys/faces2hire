import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { LookuplistService } from '../services/lookuplist.service';
import { UserService } from '../services/user.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-aboutcompany',
  templateUrl: './aboutcompany.component.html',
  styleUrls: ['./aboutcompany.component.css']
})
export class AboutcompanyComponent implements OnInit {
aboutcompanylookupdata : any;
aboutcompanyuserdata : any;
userId:any;
employees:any;
aboutdata:any;
newaboutdata:any;
reso:any;
constructor(private route:Router, private http: HttpClient, private lookupdata:LookuplistService,private userdata:UserService)
{

  this.lookupdata.lookupdata().subscribe((lookupdata)=>{

    this.aboutcompanylookupdata = lookupdata;
    
      });

this.userdata.userdata().subscribe((userdata)=>{
  this.aboutcompanyuserdata = userdata;
});

this.userId = localStorage.getItem('token');

}


  ngOnInit(): void {
  this.getpreferences();
}


getpreferences(): void {
  let tmp :any= [];
  this.http.get<any>('http://localhost:3300/lookup/getLookupByType/employees').subscribe(data => {
    this.aboutdata = data;
      
    for(let i=0;i<this.aboutdata.data.length;i++)
    {
        this.newaboutdata=this.aboutdata.data;
        
        
    }
  });
}


message: boolean = false;
onSubmit(aboutcompany: any) {
  console.warn('aboutcompany',aboutcompany);
  this.http.post(environment.baseUrl+'/user/saveCompanyAbout',aboutcompany).subscribe((result) => {
    console.warn("result", result);
    this.reso = result;
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
