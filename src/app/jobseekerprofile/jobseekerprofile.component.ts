import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { IndustrygetService } from '../services/industryget.service';
import { UserService } from '../services/user.service';
import { environment } from '../environments/environment';
import { LookuplistService } from '../services/lookuplist.service';
import { LookupbytypeService } from '../services/lookupbytype.service';


@Component({
  selector: 'app-jobseekerprofile',
  templateUrl: './jobseekerprofile.component.html',
  styleUrls: ['./jobseekerprofile.component.css']
})
export class JobseekerprofileComponent implements OnInit {

sendindustrydata:any;
senduserdata:any;
userid : any;
lookupdatasend:any;
lookuptypestatus:any;




jobseekerindustry:any=[];
industryItems:any=[];
indropdownSettings = {};

employementPreferences:any=[];
newdata:any=[];
employement:any=[];

selectedItems = [];
dropdownSettings = {};



  constructor(private route:Router, private http: HttpClient,private lookemployement:LookupbytypeService,private lookupdata:LookuplistService,private industrydata:IndustrygetService,private userdata:UserService){

    this.userid = localStorage.getItem('token');
    this.industrydata.industrydata().subscribe((industrydata)=>{

      this.sendindustrydata = industrydata;
      });

      this.userdata.userdata().subscribe((userdata)=>{

        this.senduserdata = userdata;
        });

        this.lookupdata.lookupdata().subscribe((lookupdata)=>{

          this.lookupdatasend = lookupdata;
          });
          this.lookemployement.lookemployement().subscribe((lookemployement)=>{

            this.lookuptypestatus = lookemployement;
            
            });

  }

public ngOnInit()
{
  this.getjobseekerindustry();
  this.getpreferences();
  this.dropdownSettings = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  this.indropdownSettings = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };




}

getpreferences(): void {
  let tmp :any= [];
  this.http.get<any>('http://localhost:3300/lookup/getLookupByType/employmentPreferences').subscribe(data => {
  
    for(let i=0; i < data.data.length; i++) {
      tmp.push({ item_id: data.data[i]._id, item_text: data.data[i].lookupName });
      
    }
    
    this.employementPreferences.data = tmp;
    
    for(let k =0; k<this.employementPreferences.data.length;k++)
    {
      this.employement = this.employementPreferences.data[k];
    }
    
    this.newdata = this.employement;
    console.log(this.newdata);
  
  });
}

getjobseekerindustry(): void {
  let tmp :any= [];
  let url:any  = "http://localhost:3300/industry/getIndustryByType/IndustryType "+this.userid;
  this.http.get<any>(url).subscribe(jobseekerindustry => {
    console.log(jobseekerindustry);    
    for(let i=0; i < jobseekerindustry.length; i++) {
      tmp.push({ item_id: jobseekerindustry[i]._id, item_text: jobseekerindustry[i].lookupName });
    }
    this.employementPreferences = tmp;
  });
}


message: boolean = false;
onSubmit(jobseekerprofile: any) {
  console.warn('jobseekerprofile',jobseekerprofile);
  this.http.post(environment.baseUrl+'/user/saveJobSeekerProfileInfo',jobseekerprofile).subscribe((result) => {
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
