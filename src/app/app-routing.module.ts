import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGenreComponent } from './create-genre/create-genre.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { ListGamesComponent } from './list-games/list-games.component';

const routes: Routes = [
  { path: 'create-game', component: CreateGenreComponent},
  { path: 'create-genre', component: CreateGenreComponent},
  { path: 'list-games', component: ListGamesComponent },
  { path: 'edit-game', component: EditGameComponent },
  { path: 'delete-game', component: DeleteGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
