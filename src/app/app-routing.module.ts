import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { AddjobComponent } from './addjob/addjob.component';
import { AddlookupComponent } from './addlookup/addlookup.component';
import { ApplyforjobComponent } from './applyforjob/applyforjob.component';
import { ChatsendmessageComponent } from './chatsendmessage/chatsendmessage.component';
import { CompanycorporateComponent } from './companycorporate/companycorporate.component';
import { CompanyprofileinfoComponent } from './companyprofileinfo/companyprofileinfo.component';
import { EmplocationComponent } from './emplocation/emplocation.component';
import { EmployerdashboardComponent } from './employerdashboard/employerdashboard.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoritechangestateComponent } from './favoritechangestate/favoritechangestate.component';
import { FavoritechangestateemployerComponent } from './favoritechangestateemployer/favoritechangestateemployer.component';
import { GetallappliedComponent } from './getallapplied/getallapplied.component';
import { JobseekerdashboardComponent } from './jobseekerdashboard/jobseekerdashboard.component';
import { JobseekerdocumentComponent } from './jobseekerdocument/jobseekerdocument.component';
import { JobseekereducationComponent } from './jobseekereducation/jobseekereducation.component';
import { JobseekeremployementhistoryComponent } from './jobseekeremployementhistory/jobseekeremployementhistory.component';
import { JobseekerjobsComponent } from './jobseekerjobs/jobseekerjobs.component';
import { JobseekerprofileComponent } from './jobseekerprofile/jobseekerprofile.component';
import { JobseekerprofilevideoComponent } from './jobseekerprofilevideo/jobseekerprofilevideo.component';
import { JobseekerskillsComponent } from './jobseekerskills/jobseekerskills.component';
import { LoginComponent } from './login/login.component';
import { SearchcompanyComponent } from './searchcompany/searchcompany.component';
import { SearchjobseekerComponent } from './searchjobseeker/searchjobseeker.component';
import { SearchpeopleComponent } from './searchpeople/searchpeople.component';
import { SendmessageemployeerComponent } from './sendmessageemployeer/sendmessageemployeer.component';
import { EmployeeaddfavoriteComponent } from './employeeaddfavorite/employeeaddfavorite.component';

import { AuthguardGuard } from './authguard.guard';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
    },
    {path:'employeeaddfavorite',
      component:EmployeeaddfavoriteComponent,
      canActivate:[AuthguardGuard]
      },
    {
      path:'employerdashboard',
      component:EmployerdashboardComponent,
      canActivate:[AuthguardGuard]
      },
      {
        path:'companycorporate',
        component:CompanycorporateComponent,
        canActivate:[AuthguardGuard]
        },
      {
        path:'aboutcompany',
        component:AboutcompanyComponent,
        canActivate:[AuthguardGuard]
        },
      {
        path:'emplocation',
        component:EmplocationComponent,
        canActivate:[AuthguardGuard]
        },
  {
    path:'jobseekerdashboard',
    component:JobseekerdashboardComponent,
    canActivate:[AuthguardGuard]
    },
    {
      path:'jobseekerprofile',
      component:JobseekerprofileComponent,
      canActivate:[AuthguardGuard]
    },
    {
      path:'jobseekerskills',
      component:JobseekerskillsComponent,
      canActivate:[AuthguardGuard]
    },
    {
      path:'jobseekereducation',
      component:JobseekereducationComponent,
      canActivate:[AuthguardGuard]
    },
    {
      path:'jobseekerprofilevideo',
      component:JobseekerprofilevideoComponent,
      canActivate:[AuthguardGuard]  
    },
    {
      path:'jobseekerdocuments',
      component:JobseekerdocumentComponent,
      canActivate:[AuthguardGuard]  
    },
    {
      path:'jobseekeremployementhistory',
      component:JobseekeremployementhistoryComponent,
      canActivate:[AuthguardGuard]  
    },
    {
      path:'searchcompanies',
      component:SearchcompanyComponent,
      canActivate:[AuthguardGuard]
    },
    {
      path:'searchpeople',
      component:SearchpeopleComponent,
      canActivate:[AuthguardGuard]
    },
    {
      path:'applyforjobs',
      component:ApplyforjobComponent,
      canActivate:[AuthguardGuard]
    },
    {
      path:'jobseekerjobs',
      component:JobseekerjobsComponent,
      canActivate:[AuthguardGuard]
    },
     {  path:'jobseekerfavorite',
        component:FavoriteComponent,
        canActivate:[AuthguardGuard]
      },
    { path:'favoritechangestate',
      component:FavoritechangestateComponent,
      canActivate:[AuthguardGuard]

    },
    {
    path:'favoritechat',
    component:ChatsendmessageComponent,
    canActivate:[AuthguardGuard]
    },
    {
      path:'companyprofileinfo',
      component:CompanyprofileinfoComponent,
      canActivate:[AuthguardGuard]
      },
      {
        path:'searchjobseeker',
        component:SearchjobseekerComponent,
        canActivate:[AuthguardGuard]
        },
        {
          path:'allapplied',
          component:GetallappliedComponent,
          canActivate:[AuthguardGuard]
          },
          {
            path:'favoritechangestateemployer',
            component:FavoritechangestateemployerComponent,
            canActivate:[AuthguardGuard]
            },
            {
              path:'sendmessageemployer',
              component:SendmessageemployeerComponent,
              canActivate:[AuthguardGuard]
              },
              {
                path:'addjobs',
                component:AddjobComponent,
                canActivate:[AuthguardGuard]
                },
                {
                  path:'addlookup',
                  component:AddlookupComponent,
                  canActivate:[AuthguardGuard]
                                 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
