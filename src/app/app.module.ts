import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PostService } from './share/post.service';
import { HttpClientModule } from '@angular/common/http';
import { NetworkComponent } from './network/network.component';
import { WVzipcodeComponent } from './wvzipcode/wvzipcode.component';
import { SgVisionComponent } from './sg-vision/sg-vision.component';
import { SgDentalComponent } from './sg-dental/sg-dental.component';
import { SgVnDComponent } from './sg-vn-d/sg-vn-d.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NetworkComponent,
    WVzipcodeComponent,
    SgVisionComponent,
    SgDentalComponent,
    SgVnDComponent,
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
