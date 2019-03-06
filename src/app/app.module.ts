import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { PostService } from './share/post.service';
import { HttpClientModule } from '@angular/common/http';
import { WVzipcodeComponent } from './planstable/wvzipcode/wvzipcode.component';
import { NetworkComponent } from './PlanTable/network/network.component';
import { SgdentalComponent } from './PlansTable/sgdental/sgdental.component';
import { SgvisionComponent } from './PlansTable/sgvision/sgvision.component';
import { SgvisiondentalComponent } from './PlansTable/sgvisiondental/sgvisiondental.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    WVzipcodeComponent,
    NetworkComponent,
    SgdentalComponent,
    SgvisionComponent,
    SgvisiondentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
