import { Routes } from '@angular/router';
import { HomeComponent } from './main/content/home/home.component';
import { OriginComponent } from './main/content/origin/origin.component';
import { NukhComponent } from './main/content/nukh/nukh.component';
import { GotraComponent } from './main/content/gotra/gotra.component';
import { HostelComponent } from './main/content/hostel/hostel.component';
import { OrganizationComponent } from './main/content/organization/organization.component';
import { TempleComponent } from './main/content/temple/temple.component';
import { LoginComponent } from './main/content/login/login.component';
import { ForgotPasswordComponent } from './main/content/forgotPassword/forgotPassword.component';
import { ResetPasswordComponent } from './main/content/reset-password/reset-password.component';
import { ChangePasswordComponent } from './main/content/change-password/change-password.component';
import { RegisterComponent } from './main/content/register/register.component';
import { FamilyComponent } from './main/content/family/family.component';
import { MemberComponent } from './main/content/member/member.component';
import { AuthGuard, LoggedInGuard } from './main/guards/auth-guard';
import { ForkComponent } from './main/content/fork/fork.component';
import { MatrimonyComponent } from './main/content/matrimony/matrimony.component';
import { MatrimonyViewComponent } from './main/content/matrimony-view/matrimony-view.component';
import { DirectoryComponent } from './main/content/directory/directory.component';
import { MatrimonySearchComponent } from './main/content/matrimony-search/matrimony-search.component';
import { AboutusComponent } from './main/content/aboutus/aboutus.component';
import { ContactusComponent } from './main/content/contactus/contactus.component';
import { TermsComponent } from './main/content/terms/terms.component';

export const bkRoutes: Routes = [
    {
        path : "origin",
        component: OriginComponent
    },
    {
        path: "nukhs",
        component: NukhComponent
    },
    {
        path: "gotras",
        component: GotraComponent
    },
    {
        path: "hostels",
        component: HostelComponent
    },
    {
        path: "organizations",
        component: OrganizationComponent
    },
    {
        path: "temples",
        component: TempleComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: "forgotpassword",
        component: ForgotPasswordComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: "resetpassword/:token",
        component: ResetPasswordComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: "changepassword",
        component: ChangePasswordComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "register",
        component: RegisterComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: "family/:familyId",
        component: FamilyComponent,
        //canActivate: [AuthGuard]
    },
    {
        path: "member/:familyId/:memberId",
        component: MemberComponent,
        //canActivate: [AuthGuard]
    },    
    {
        path: "family/fork/:familyId",
        component: ForkComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "matrimony/:memberId/:action",
        component: MatrimonyComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "matrimony-view/:memberId",
        component: MatrimonyViewComponent,
        //canActivate: [AuthGuard]
    },
    {
        path: "directory",
        component: DirectoryComponent,
        //canActivate: [AuthGuard]        
    },
    {
        path: "matrimony-search",
        component: MatrimonySearchComponent,
        //canActivate: [AuthGuard]        
    },
    {
        path: "aboutus",
        component: AboutusComponent
    },
    {
        path: "contactus",
        component: ContactusComponent
    },
    {
        path: "terms",
        component: TermsComponent
    },
    {
        path      : '**',
        redirectTo : "home"              
    }    
];