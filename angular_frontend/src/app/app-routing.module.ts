import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'players', loadChildren: './players/players.module#PlayersPageModule' },
  { path: 'tabs/tab1/games', loadChildren: './games/games.module#GamesPageModule' },
  { path: 'tabs/tab1/games/game-detail', loadChildren: './game-detail/game-detail.module#GameDetailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
