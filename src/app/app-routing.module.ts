import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WVzipcodeComponent } from './planstable/wvzipcode/wvzipcode.component';
import { SgDentalComponent } from './PlansTable/sg-dental/sg-dental.component';
import { SgVisionComponent } from './PlansTable/sg-vision/sg-vision.component';
import { SgVnDComponent } from './PlansTable/sg-vn-d/sg-vn-d.component';
import { NetworkComponent } from './PlanTable/network/network.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'WV-zipcode', component: WVzipcodeComponent }, 
  // { path: 'sg-Dental', component: SgDentalComponent },
  // { path: 'sg-Vision', component: SgVisionComponent },
  // { path: 'sg-dnv', component: SgVnDComponent },
   { path: 'network', component: NetworkComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
