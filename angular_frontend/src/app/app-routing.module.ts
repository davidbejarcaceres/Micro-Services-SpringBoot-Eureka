import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tabs/tab1/players', loadChildren: './players/players.module#PlayersPageModule' },
  { path: 'tabs/tab1/games', loadChildren: './games/games.module#GamesPageModule' },
  { path: 'tabs/tab1/games/game-detail', loadChildren: './game-detail/game-detail.module#GameDetailPageModule' },
  { path: 'tabs/tab2/search-add-games', loadChildren: './search-add-games/search-add-games.module#SearchAddGamesPageModule' },
  { path: 'tabs/tab2/my-games', loadChildren: './my-games/my-games.module#MyGamesPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
