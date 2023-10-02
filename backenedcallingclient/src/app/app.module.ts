import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './service/auth.interceptor';
import { DashboardComponent } from './pages/Admin/dashboard/Adashboard.component';
import { UserDashboardComponent } from './pages/User/user-dashboard/Udashboard.component';
import { PostsComponent } from './requiredthings/posts/posts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { UpdateAdminComponent } from './pages/Admin/update-admin/update-admin.component';
import { ViewAllPostComponent } from './pages/Admin/view-all-post/view-all-post.component';
import { ViewAllUserComponent } from './pages/Admin/view-all-user/view-all-user.component';
import { NdashbordComponent } from './pages/user/normal/ndashbord/ndashbord.component';
import { NsidebarComponent } from './pages/user/sidebar/nsidebar/nsidebar.component';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
import { ViewPostSPecificComponent } from './pages/user/view-post-specific/view-post-specific.component';
import { CreatePostComponent } from './pages/user/create-post/create-post.component';
import { UpdatePostComponent } from './pages/user/update-post/update-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    UserDashboardComponent,
    DashboardComponent,
    PostsComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    UpdateAdminComponent,
    ViewAllPostComponent,
    ViewAllUserComponent,
    NdashbordComponent,
    NsidebarComponent,
    UpdateUserComponent,
    ViewPostSPecificComponent,
    CreatePostComponent,
    UpdatePostComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule ,
    MatSnackBarModule,
    MatCardModule ,
    MatToolbarModule,
    MatIconModule,
    MatListModule
    

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
