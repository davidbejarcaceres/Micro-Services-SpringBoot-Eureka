import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchAddGamesPage } from './search-add-games.page';

const routes: Routes = [
  {
    path: '',
    component: SearchAddGamesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchAddGamesPage]
})
export class SearchAddGamesPageModule {}
