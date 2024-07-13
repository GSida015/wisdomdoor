import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterLoginComponent } from './components/register-login/register-login.component';
import { MainComponent } from './components/main/main.component';
import { ChooseRoleComponent } from './components/choose-role/choose-role.component';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { TestComponent } from './components/test/test.component';
import { FeaturedTestsComponent } from './components/featured-tests/featured-tests.component';
import { AllTestsComponent } from './components/all-tests/all-tests.component';
import { GoToShopComponent } from './components/go-to-shop/go-to-shop.component';
import { ShopComponent } from './components/shop/shop.component';
import { NewsComponent } from './components/news/news.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterLoginComponent,
    MainComponent,
    ChooseRoleComponent,
    TeacherLoginComponent,
    StudentLoginComponent,
    TestComponent,
    FeaturedTestsComponent,
    AllTestsComponent,
    GoToShopComponent,
    ShopComponent,
    NewsComponent,
    CreatorsComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
