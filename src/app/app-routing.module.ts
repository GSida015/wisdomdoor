import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ChooseRoleComponent } from './components/choose-role/choose-role.component';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { AllTestsComponent } from './components/all-tests/all-tests.component';
import { ShopComponent } from './components/shop/shop.component';
import { NewsComponent } from './components/news/news.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'choose', component: ChooseRoleComponent},
  {path: 'teacher-login', component: TeacherLoginComponent},
  {path: 'student-login', component: StudentLoginComponent},
  {path: 'all-tests', component: AllTestsComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'news', component: NewsComponent},
  {path: 'about-us', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
