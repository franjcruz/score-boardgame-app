import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BoardgameSearchComponent } from './boardgame-search.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [BoardgameSearchComponent],
  exports: [BoardgameSearchComponent],
})
export class BoardgameSearchComponentModule {}
