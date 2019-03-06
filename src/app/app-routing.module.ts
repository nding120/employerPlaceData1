import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WVzipcodeComponent } from './planstable/wvzipcode/wvzipcode.component';
import { NetworkComponent } from './PlanTable/network/network.component';
import { SgdentalComponent } from './PlansTable/sgdental/sgdental.component';
import { SgvisionComponent } from './PlansTable/sgvision/sgvision.component';
import { SgvisiondentalComponent } from './PlansTable/sgvisiondental/sgvisiondental.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'WV-zipcode', component: WVzipcodeComponent }, 
  { path: 'sgd', component: SgdentalComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'sgv', component: SgvisionComponent },
  { path: 'sgvnd', component: SgvisiondentalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
