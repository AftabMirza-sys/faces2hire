import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobseekerdashboardComponent } from './jobseekerdashboard/jobseekerdashboard.component';
import { JobseekerprofileComponent } from './jobseekerprofile/jobseekerprofile.component';
import { JobseekerskillsComponent } from './jobseekerskills/jobseekerskills.component';
import { JobseekereducationComponent } from './jobseekereducation/jobseekereducation.component';
import { JobseekerprofilevideoComponent } from './jobseekerprofilevideo/jobseekerprofilevideo.component';
import { JobseekerdocumentComponent } from './jobseekerdocument/jobseekerdocument.component';
import { JobseekeremployementhistoryComponent } from './jobseekeremployementhistory/jobseekeremployementhistory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchcompanyComponent } from './searchcompany/searchcompany.component';
import { SearchpeopleComponent } from './searchpeople/searchpeople.component';
import { ApplyforjobComponent } from './applyforjob/applyforjob.component';
import { JobseekerjobsComponent } from './jobseekerjobs/jobseekerjobs.component';
import { JobseekerdetailComponent } from './jobseekerdetail/jobseekerdetail.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoritechangestateComponent } from './favoritechangestate/favoritechangestate.component';
import { ChatsendmessageComponent } from './chatsendmessage/chatsendmessage.component';
import { LoginComponent } from './login/login.component';
import { EmployerdashboardComponent } from './employerdashboard/employerdashboard.component';
import { EmplocationComponent } from './emplocation/emplocation.component';
import { NavComponent } from './nav/nav.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { CompanycorporateComponent } from './companycorporate/companycorporate.component';
import { CompanyprofileinfoComponent } from './companyprofileinfo/companyprofileinfo.component';
import { SearchjobseekerComponent } from './searchjobseeker/searchjobseeker.component';
import { GetallappliedComponent } from './getallapplied/getallapplied.component';
import { FavoritechangestateemployerComponent } from './favoritechangestateemployer/favoritechangestateemployer.component';
import { SendmessageemployeerComponent } from './sendmessageemployeer/sendmessageemployeer.component';
import { AddjobComponent } from './addjob/addjob.component';
import { AddlookupComponent } from './addlookup/addlookup.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeaddfavoriteComponent } from './employeeaddfavorite/employeeaddfavorite.component';
import { JobseekernavComponent } from './jobseekernav/jobseekernav.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    JobseekerdashboardComponent,
    JobseekerprofileComponent,
    JobseekerskillsComponent,
    JobseekereducationComponent,
    JobseekerprofilevideoComponent,
    JobseekerdocumentComponent,
    JobseekeremployementhistoryComponent,
    
    SearchcompanyComponent,
    SearchpeopleComponent,
    ApplyforjobComponent,
    JobseekerjobsComponent,
    JobseekerdetailComponent,
    FavoriteComponent,
    FavoritechangestateComponent,
    ChatsendmessageComponent,
    LoginComponent,
    EmployerdashboardComponent,
    EmplocationComponent,
    NavComponent,
    AboutcompanyComponent,
    CompanycorporateComponent,
    CompanyprofileinfoComponent,
    SearchjobseekerComponent,
    GetallappliedComponent,
    FavoritechangestateemployerComponent,
    SendmessageemployeerComponent,
    AddjobComponent,
    AddlookupComponent,
    EmployeeaddfavoriteComponent,
    JobseekernavComponent
    
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
