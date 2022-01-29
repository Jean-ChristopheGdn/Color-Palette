import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';

const routes: Routes = [
  { path: '', component: ColorPaletteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
