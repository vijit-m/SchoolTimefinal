import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  //{ path: 'student', loadChildren: './login/login.module#LOGINPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'student', loadChildren: './student/student.module#StudentPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'uploadphoto', loadChildren: './uploadphoto/uploadphoto.module#UploadphotoPageModule' },
  { path: 'acctype', loadChildren: './acctype/acctype.module#AcctypePageModule' },
  { path: 'teachacc', loadChildren: './teachacc/teachacc.module#TeachaccPageModule' },
  { path: 'studacc', loadChildren: './studacc/studacc.module#StudaccPageModule' },
  { path: 'tinstructions', loadChildren: './tinstructions/tinstructions.module#TinstructionsPageModule' },
  { path: 'sprofile', loadChildren: './sprofile/sprofile.module#SprofilePageModule' },
  { path: 'codegen', loadChildren: './codegen/codegen.module#CodegenPageModule' },
  { path: 'sphoto', loadChildren: './sphoto/sphoto.module#SphotoPageModule' },
  { path: 'tprofile', loadChildren: './tprofile/tprofile.module#TprofilePageModule' },
  { path: 'tphoto', loadChildren: './tphoto/tphoto.module#TphotoPageModule' },
  { path: 'tinstructions', loadChildren: './tinstructions/tinstructions.module#TinstructionsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
