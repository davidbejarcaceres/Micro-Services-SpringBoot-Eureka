import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tabs/tab1/players', loadChildren: './players/players.module#PlayersPageModule' },
  { path: 'tabs/tab1/games', loadChildren: './games/games.module#GamesPageModule' },
  { path: 'tabs/tab1/games/game-detail', loadChildren: './game-detail/game-detail.module#GameDetailPageModule' },
  { path: 'tabs/tab2/search-add-games', loadChildren: './search-add-games/search-add-games.module#SearchAddGamesPageModule' },
  { path: 'tabs/tab2/my-games', loadChildren: './my-games/my-games.module#MyGamesPageModule' },
  { path: 'tabs/tab1/games/add-game', loadChildren: './add-game/add-game.module#AddGamePageModule' },
  { path: 'tabs/tab1/players/player-detail', loadChildren: './player-detail/player-detail.module#PlayerDetailPageModule' },
  { path: 'tabs/tab1/players/add-player', loadChildren: './add-player/add-player.module#AddPlayerPageModule' },
  { path: 'tabs/tab2/followers-following', loadChildren: './followers-following/followers-following.module#FollowersFollowingPageModule' },
  { path: 'tabs/tab2/following', loadChildren: './following/following.module#FollowingPageModule' },
  { path: 'tabs/tab2/followers', loadChildren: './followers/followers.module#FollowersPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
