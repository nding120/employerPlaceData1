import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { NetworkComponent } from './PlansTable/network/network.component';
import { SgDentalComponent } from './PlansTable/sg-dental/sg-dental.component';
import { SgVisionComponent } from './PlansTable/sg-vision/sg-vision.component';
import { WVzipcodeComponent } from './PlansTable/wvzipcode/wvzipcode.component';
import { SgVnDComponent } from './PlansTable/sg-vn-d/sg-vn-d.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
 // {path:'network',component: NetworkComponent},
  {path:'dental',component: SgDentalComponent},
  {path:'vision',component:SgVisionComponent},
  {path:'zipcode',component: WVzipcodeComponent},
  {path:'d&v',component: SgVnDComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
