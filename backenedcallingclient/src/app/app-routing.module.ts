import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/Admin/dashboard/Adashboard.component';

//import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
//import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/User/user-dashboard/Udashboard.component';
import { AdminssGuard } from './service/adminss.guard';
//import { AdminGuard } from './service/adminss.guard';
//import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

import { NormalGuard } from './service/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { UpdateAdminComponent } from './pages/Admin/update-admin/update-admin.component';
import { ViewAllPostComponent } from './pages/Admin/view-all-post/view-all-post.component';
import { ViewAllUserComponent } from './pages/Admin/view-all-user/view-all-user.component';
import { NdashbordComponent } from './pages/user/normal/ndashbord/ndashbord.component';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
import { ViewPostSPecificComponent } from './pages/user/view-post-specific/view-post-specific.component';
import { CreatePostComponent } from './pages/user/create-post/create-post.component';
import { UpdatePostComponent } from './pages/user/update-post/update-post.component';


const routes: Routes = [
 { 
  path:"signup",
  component:SignupComponent,
  pathMatch:'full',

 },
 {
path:"login",
component:LoginComponent,
pathMatch:"full",
 },
 {
  path:"",
  component:HomeComponent,
  pathMatch:"full",
   },
   {
    path:"admin",
    component:DashboardComponent,
    canActivate:[AdminssGuard],
    children:[
      {
      path:'',  
      component:WelcomeComponent,
      },
      {
      path:'profile',
      component:ProfileComponent,
      },
      {
      path:'update-admin',
      component:UpdateAdminComponent,
      },
      {
      path:'viewAll',
      component:ViewAllPostComponent,
      },
      {
        path:'AllUser',
      component:ViewAllUserComponent,
      },
    ],
    
    
     },
     {
    path:"user",
    component:NdashbordComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:'update-user',
      component:UpdateUserComponent,
      },
      {
        path:'viewOwnPost',
      component:ViewPostSPecificComponent,
      },
      {
        path:'profile',
      component:ProfileComponent,
      },
      {
        path:'createPost',
      component:CreatePostComponent,
      },{
        path:'updatePost',
      component:UpdatePostComponent,
      },
    
    ]
     },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
