import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WVzipcodeComponent } from './planstable/wvzipcode/wvzipcode.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'WV-zipcode', component: WVzipcodeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
