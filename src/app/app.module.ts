import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { PostService } from './share/post.service';
import { HttpClientModule } from '@angular/common/http';
import { NetworkComponent } from './planstable/network/network.component';
import { WVzipcodeComponent } from './planstable/wvzipcode/wvzipcode.component';
import { SgVisionComponent } from './planstable/sg-vision/sg-vision.component';
import { SgDentalComponent } from './planstable/sg-dental/sg-dental.component';
import { SgVnDComponent } from './planstable/sg-vn-d/sg-vn-d.component';

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
