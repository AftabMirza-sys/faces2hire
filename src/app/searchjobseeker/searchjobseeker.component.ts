import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { UserService } from '../services/user.service'; 
import { SkillService } from '../services/skill.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-searchjobseeker',
  templateUrl: './searchjobseeker.component.html',
  styleUrls: ['./searchjobseeker.component.css']
})
export class SearchjobseekerComponent implements OnInit {
searchjobseeker:any;
skilldisplay:any;
newdata:any=[];
selectedItems = [];
dropdownSettings = {};
employementPreferences:any;
employement:any;
senddata:any=[];
constructor(private route:Router, private http: HttpClient, private userdata:UserService,private skilldata:SkillService)
{
  
this.userdata.userdata().subscribe((userdata)=>{

this.searchjobseeker = userdata;
});

this.skilldata.skilldata().subscribe((skilldata)=>{

  this.skilldisplay = skilldata;
  });


}

  ngOnInit(): void {
    this.getpreferences();
    
  
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 100,
      allowSearchFilter: true
    };

    
}



getpreferences(): void {
  let tmp :any= [];
  this.http.get<any>('http://localhost:3300/lookup/getLookupByType/employmentPreferences').subscribe(result => {
  this.newdata = result.data[0];
  this.senddata=
  [
{item_id:this.newdata,item_text:this.newdata.lookupName},


  ]
  
    for(let i=0; i < result.data.length; i++) {
      tmp.push({ item_id: result.data[i]._id, item_text: result.data[i].lookupName });
      
    }
    
    this.employementPreferences.data = tmp;
    
    for(let k =0; k<this.employementPreferences.data.length;k++)
    {
      this.employement = this.employementPreferences.data[k];
      
    }
    
    

  
  });
  
}


message: boolean = false;
onSubmit(searchjobseekers: any) {

  console.log(this.searchjobseeker);

  this.http.post(environment.baseUrl+'/user/searchJobSeeker',searchjobseekers).subscribe((result) => {
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
